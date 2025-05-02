const okhslGlsl = `
// Copyright(c) 2021 Björn Ottosson
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this softwareand associated documentation files(the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and /or sell copies
// of the Software, and to permit persons to whom the Software is furnished to do
// so, subject to the following conditions :
// The above copyright noticeand this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

#define M_PI 3.1415926535897932384626433832795

float cbrt( float x )
{
    return sign(x)*pow(abs(x),1.0/3.0f);
}

float srgb_transfer_function(float a)
{
	return .0031308f >= a ? 12.92f * a : 1.055f * pow(a, .4166666666666667f) - .055f;
}

float srgb_transfer_function_inv(float a)
{
	return .04045f < a ? pow((a + .055f) / 1.055f, 2.4f) : a / 12.92f;
}

vec3 linear_srgb_to_oklab(vec3 c)
{
	float l = 0.4122214708f * c.r + 0.5363325363f * c.g + 0.0514459929f * c.b;
	float m = 0.2119034982f * c.r + 0.6806995451f * c.g + 0.1073969566f * c.b;
	float s = 0.0883024619f * c.r + 0.2817188376f * c.g + 0.6299787005f * c.b;

	float l_ = cbrt(l);
	float m_ = cbrt(m);
	float s_ = cbrt(s);

	return vec3(
		0.2104542553f * l_ + 0.7936177850f * m_ - 0.0040720468f * s_,
		1.9779984951f * l_ - 2.4285922050f * m_ + 0.4505937099f * s_,
		0.0259040371f * l_ + 0.7827717662f * m_ - 0.8086757660f * s_
	);
}

vec3 oklab_to_linear_srgb(vec3 c)
{
	float l_ = c.x + 0.3963377774f * c.y + 0.2158037573f * c.z;
	float m_ = c.x - 0.1055613458f * c.y - 0.0638541728f * c.z;
	float s_ = c.x - 0.0894841775f * c.y - 1.2914855480f * c.z;

	float l = l_ * l_ * l_;
	float m = m_ * m_ * m_;
	float s = s_ * s_ * s_;

	return vec3(
		+4.0767416621f * l - 3.3077115913f * m + 0.2309699292f * s,
		-1.2684380046f * l + 2.6097574011f * m - 0.3413193965f * s,
		-0.0041960863f * l - 0.7034186147f * m + 1.7076147010f * s
	);
}

// Finds the maximum saturation possible for a given hue that fits in sRGB
// Saturation here is defined as S = C/L
// a and b must be normalized so a^2 + b^2 == 1
float compute_max_saturation(float a, float b)
{
	// Max saturation will be when one of r, g or b goes below zero.

	// Select different coefficients depending on which component goes below zero first
	float k0, k1, k2, k3, k4, wl, wm, ws;

	if (-1.88170328f * a - 0.80936493f * b > 1.f)
	{
		// Red component
		k0 = +1.19086277f; k1 = +1.76576728f; k2 = +0.59662641f; k3 = +0.75515197f; k4 = +0.56771245f;
		wl = +4.0767416621f; wm = -3.3077115913f; ws = +0.2309699292f;
	}
	else if (1.81444104f * a - 1.19445276f * b > 1.f)
	{
		// Green component
		k0 = +0.73956515f; k1 = -0.45954404f; k2 = +0.08285427f; k3 = +0.12541070f; k4 = +0.14503204f;
		wl = -1.2684380046f; wm = +2.6097574011f; ws = -0.3413193965f;
	}
	else
	{
		// Blue component
		k0 = +1.35733652f; k1 = -0.00915799f; k2 = -1.15130210f; k3 = -0.50559606f; k4 = +0.00692167f;
		wl = -0.0041960863f; wm = -0.7034186147f; ws = +1.7076147010f;
	}

	// Approximate max saturation using a polynomial:
	float S = k0 + k1 * a + k2 * b + k3 * a * a + k4 * a * b;

	// Do one step Halley's method to get closer
	// this gives an error less than 10e6, except for some blue hues where the dS/dh is close to infinite
	// this should be sufficient for most applications, otherwise do two/three steps 

	float k_l = +0.3963377774f * a + 0.2158037573f * b;
	float k_m = -0.1055613458f * a - 0.0638541728f * b;
	float k_s = -0.0894841775f * a - 1.2914855480f * b;

	{
		float l_ = 1.f + S * k_l;
		float m_ = 1.f + S * k_m;
		float s_ = 1.f + S * k_s;

		float l = l_ * l_ * l_;
		float m = m_ * m_ * m_;
		float s = s_ * s_ * s_;

		float l_dS = 3.f * k_l * l_ * l_;
		float m_dS = 3.f * k_m * m_ * m_;
		float s_dS = 3.f * k_s * s_ * s_;

		float l_dS2 = 6.f * k_l * k_l * l_;
		float m_dS2 = 6.f * k_m * k_m * m_;
		float s_dS2 = 6.f * k_s * k_s * s_;

		float f = wl * l + wm * m + ws * s;
		float f1 = wl * l_dS + wm * m_dS + ws * s_dS;
		float f2 = wl * l_dS2 + wm * m_dS2 + ws * s_dS2;

		S = S - f * f1 / (f1 * f1 - 0.5f * f * f2);
	}

	return S;
}

// finds L_cusp and C_cusp for a given hue
// a and b must be normalized so a^2 + b^2 == 1
vec2 find_cusp(float a, float b)
{
	// First, find the maximum saturation (saturation S = C/L)
	float S_cusp = compute_max_saturation(a, b);

	// Convert to linear sRGB to find the first point where at least one of r,g or b >= 1:
	vec3 rgb_at_max = oklab_to_linear_srgb(vec3( 1, S_cusp * a, S_cusp * b ));
	float L_cusp = cbrt(1.f / max(max(rgb_at_max.r, rgb_at_max.g), rgb_at_max.b));
	float C_cusp = L_cusp * S_cusp;

	return vec2( L_cusp , C_cusp );
}

// Finds intersection of the line defined by 
// L = L0 * (1 - t) + t * L1;
// C = t * C1;
// a and b must be normalized so a^2 + b^2 == 1
float find_gamut_intersection(float a, float b, float L1, float C1, float L0, vec2 cusp)
{
	// Find the intersection for upper and lower half seprately
	float t;
	if (((L1 - L0) * cusp.y - (cusp.x - L0) * C1) <= 0.f)
	{
		// Lower half

		t = cusp.y * L0 / (C1 * cusp.x + cusp.y * (L0 - L1));
	}
	else
	{
		// Upper half

		// First intersect with triangle
		t = cusp.y * (L0 - 1.f) / (C1 * (cusp.x - 1.f) + cusp.y * (L0 - L1));

		// Then one step Halley's method
		{
			float dL = L1 - L0;
			float dC = C1;

			float k_l = +0.3963377774f * a + 0.2158037573f * b;
			float k_m = -0.1055613458f * a - 0.0638541728f * b;
			float k_s = -0.0894841775f * a - 1.2914855480f * b;

			float l_dt = dL + dC * k_l;
			float m_dt = dL + dC * k_m;
			float s_dt = dL + dC * k_s;


			// If higher accuracy is required, 2 or 3 iterations of the following block can be used:
			{
				float L = L0 * (1.f - t) + t * L1;
				float C = t * C1;

				float l_ = L + C * k_l;
				float m_ = L + C * k_m;
				float s_ = L + C * k_s;

				float l = l_ * l_ * l_;
				float m = m_ * m_ * m_;
				float s = s_ * s_ * s_;

				float ldt = 3.f * l_dt * l_ * l_;
				float mdt = 3.f * m_dt * m_ * m_;
				float sdt = 3.f * s_dt * s_ * s_;

				float ldt2 = 6.f * l_dt * l_dt * l_;
				float mdt2 = 6.f * m_dt * m_dt * m_;
				float sdt2 = 6.f * s_dt * s_dt * s_;

				float r = 4.0767416621f * l - 3.3077115913f * m + 0.2309699292f * s - 1.f;
				float r1 = 4.0767416621f * ldt - 3.3077115913f * mdt + 0.2309699292f * sdt;
				float r2 = 4.0767416621f * ldt2 - 3.3077115913f * mdt2 + 0.2309699292f * sdt2;

				float u_r = r1 / (r1 * r1 - 0.5f * r * r2);
				float t_r = -r * u_r;

				float g = -1.2684380046f * l + 2.6097574011f * m - 0.3413193965f * s - 1.f;
				float g1 = -1.2684380046f * ldt + 2.6097574011f * mdt - 0.3413193965f * sdt;
				float g2 = -1.2684380046f * ldt2 + 2.6097574011f * mdt2 - 0.3413193965f * sdt2;

				float u_g = g1 / (g1 * g1 - 0.5f * g * g2);
				float t_g = -g * u_g;

				float b = -0.0041960863f * l - 0.7034186147f * m + 1.7076147010f * s - 1.f;
				float b1 = -0.0041960863f * ldt - 0.7034186147f * mdt + 1.7076147010f * sdt;
				float b2 = -0.0041960863f * ldt2 - 0.7034186147f * mdt2 + 1.7076147010f * sdt2;

				float u_b = b1 / (b1 * b1 - 0.5f * b * b2);
				float t_b = -b * u_b;

				t_r = u_r >= 0.f ? t_r : 10000.f;
				t_g = u_g >= 0.f ? t_g : 10000.f;
				t_b = u_b >= 0.f ? t_b : 10000.f;

				t += min(t_r, min(t_g, t_b));
			}
		}
	}

	return t;
}

float find_gamut_intersection(float a, float b, float L1, float C1, float L0)
{
	// Find the cusp of the gamut triangle
	vec2 cusp = find_cusp(a, b);

	return find_gamut_intersection(a, b, L1, C1, L0, cusp);
}

vec3 gamut_clip_preserve_chroma(vec3 rgb)
{
	if (rgb.r < 1.f && rgb.g < 1.f && rgb.b < 1.f && rgb.r > 0.f && rgb.g > 0.f && rgb.b > 0.f)
		return rgb;

	vec3 lab = linear_srgb_to_oklab(rgb);

	float L = lab.x;
	float eps = 0.00001f;
	float C = max(eps, sqrt(lab.y * lab.y + lab.z * lab.z));
	float a_ = lab.y / C;
	float b_ = lab.z / C;

	float L0 = clamp(L, 0.f, 1.f);

	float t = find_gamut_intersection(a_, b_, L, C, L0);
	float L_clipped = L0 * (1.f - t) + t * L;
	float C_clipped = t * C;

	return oklab_to_linear_srgb(vec3( L_clipped, C_clipped * a_, C_clipped * b_ ));
}

vec3 gamut_clip_project_to_0_5(vec3 rgb)
{
	if (rgb.r < 1.f && rgb.g < 1.f && rgb.b < 1.f && rgb.r > 0.f && rgb.g > 0.f && rgb.b > 0.f)
		return rgb;

	vec3 lab = linear_srgb_to_oklab(rgb);

	float L = lab.x;
	float eps = 0.00001f;
	float C = max(eps, sqrt(lab.y * lab.y + lab.z * lab.z));
	float a_ = lab.y / C;
	float b_ = lab.z / C;

	float L0 = 0.5;

	float t = find_gamut_intersection(a_, b_, L, C, L0);
	float L_clipped = L0 * (1.f - t) + t * L;
	float C_clipped = t * C;

	return oklab_to_linear_srgb(vec3( L_clipped, C_clipped * a_, C_clipped * b_ ));
}

vec3 gamut_clip_project_to_L_cusp(vec3 rgb)
{
	if (rgb.r < 1.f && rgb.g < 1.f && rgb.b < 1.f && rgb.r > 0.f && rgb.g > 0.f && rgb.b > 0.f)
		return rgb;

	vec3 lab = linear_srgb_to_oklab(rgb);

	float L = lab.x;
	float eps = 0.00001f;
	float C = max(eps, sqrt(lab.y * lab.y + lab.z * lab.z));
	float a_ = lab.y / C;
	float b_ = lab.z / C;

	// The cusp is computed here and in find_gamut_intersection, an optimized solution would only compute it once.
	vec2 cusp = find_cusp(a_, b_);

	float L0 = cusp.x;

	float t = find_gamut_intersection(a_, b_, L, C, L0);

	float L_clipped = L0 * (1.f - t) + t * L;
	float C_clipped = t * C;

	return oklab_to_linear_srgb(vec3( L_clipped, C_clipped * a_, C_clipped * b_ ));
}

vec3 gamut_clip_adaptive_L0_0_5(vec3 rgb, float alpha)
{
	if (rgb.r < 1.f && rgb.g < 1.f && rgb.b < 1.f && rgb.r > 0.f && rgb.g > 0.f && rgb.b > 0.f)
		return rgb;

	vec3 lab = linear_srgb_to_oklab(rgb);

	float L = lab.x;
	float eps = 0.00001f;
	float C = max(eps, sqrt(lab.y * lab.y + lab.z * lab.z));
	float a_ = lab.y / C;
	float b_ = lab.z / C;

	float Ld = L - 0.5f;
	float e1 = 0.5f + abs(Ld) + alpha * C;
	float L0 = 0.5f * (1.f + sign(Ld) * (e1 - sqrt(e1 * e1 - 2.f * abs(Ld))));

	float t = find_gamut_intersection(a_, b_, L, C, L0);
	float L_clipped = L0 * (1.f - t) + t * L;
	float C_clipped = t * C;

	return oklab_to_linear_srgb(vec3( L_clipped, C_clipped * a_, C_clipped * b_ ));
}

vec3 gamut_clip_adaptive_L0_L_cusp(vec3 rgb, float alpha)
{
	if (rgb.r < 1.f && rgb.g < 1.f && rgb.b < 1.f && rgb.r > 0.f && rgb.g > 0.f && rgb.b > 0.f)
		return rgb;

	vec3 lab = linear_srgb_to_oklab(rgb);

	float L = lab.x;
	float eps = 0.00001f;
	float C = max(eps, sqrt(lab.y * lab.y + lab.z * lab.z));
	float a_ = lab.y / C;
	float b_ = lab.z / C;

	// The cusp is computed here and in find_gamut_intersection, an optimized solution would only compute it once.
	vec2 cusp = find_cusp(a_, b_);

	float Ld = L - cusp.x;
	float k = 2.f * (Ld > 0.f ? 1.f - cusp.x : cusp.x);

	float e1 = 0.5f * k + abs(Ld) + alpha * C / k;
	float L0 = cusp.x + 0.5f * (sign(Ld) * (e1 - sqrt(e1 * e1 - 2.f * k * abs(Ld))));

	float t = find_gamut_intersection(a_, b_, L, C, L0);
	float L_clipped = L0 * (1.f - t) + t * L;
	float C_clipped = t * C;

	return oklab_to_linear_srgb(vec3( L_clipped, C_clipped * a_, C_clipped * b_ ));
}

float toe(float x)
{
	float k_1 = 0.206f;
	float k_2 = 0.03f;
	float k_3 = (1.f + k_1) / (1.f + k_2);
	return 0.5f * (k_3 * x - k_1 + sqrt((k_3 * x - k_1) * (k_3 * x - k_1) + 4.f * k_2 * k_3 * x));
}

float toe_inv(float x)
{
	float k_1 = 0.206f;
	float k_2 = 0.03f;
	float k_3 = (1.f + k_1) / (1.f + k_2);
	return (x * x + k_1 * x) / (k_3 * (x + k_2));
}

vec2 to_ST(vec2 cusp)
{
	float L = cusp.x;
	float C = cusp.y;
	return vec2( C / L, C / (1.f - L) );
}

// Returns a smooth approximation of the location of the cusp
// This polynomial was created by an optimization process
// It has been designed so that S_mid < S_max and T_mid < T_max
vec2 get_ST_mid(float a_, float b_)
{
	float S = 0.11516993f + 1.f / (
		+7.44778970f + 4.15901240f * b_
		+ a_ * (-2.19557347f + 1.75198401f * b_
			+ a_ * (-2.13704948f - 10.02301043f * b_
				+ a_ * (-4.24894561f + 5.38770819f * b_ + 4.69891013f * a_
					)))
		);

	float T = 0.11239642f + 1.f / (
		+1.61320320f - 0.68124379f * b_
		+ a_ * (+0.40370612f + 0.90148123f * b_
			+ a_ * (-0.27087943f + 0.61223990f * b_
				+ a_ * (+0.00299215f - 0.45399568f * b_ - 0.14661872f * a_
					)))
		);

	return vec2( S, T );
}

vec3 get_Cs(float L, float a_, float b_)
{
	vec2 cusp = find_cusp(a_, b_);

	float C_max = find_gamut_intersection(a_, b_, L, 1.f, L, cusp);
	vec2 ST_max = to_ST(cusp);
	
	// Scale factor to compensate for the curved part of gamut shape:
	float k = C_max / min((L * ST_max.x), (1.f - L) * ST_max.y);

	float C_mid;
	{
		vec2 ST_mid = get_ST_mid(a_, b_);

		// Use a soft minimum function, instead of a sharp triangle shape to get a smooth value for chroma.
		float C_a = L * ST_mid.x;
		float C_b = (1.f - L) * ST_mid.y;
		C_mid = 0.9f * k * sqrt(sqrt(1.f / (1.f / (C_a * C_a * C_a * C_a) + 1.f / (C_b * C_b * C_b * C_b))));
	}

	float C_0;
	{
		// for C_0, the shape is independent of hue, so vec2 are constant. Values picked to roughly be the average values of vec2.
		float C_a = L * 0.4f;
		float C_b = (1.f - L) * 0.8f;

		// Use a soft minimum function, instead of a sharp triangle shape to get a smooth value for chroma.
		C_0 = sqrt(1.f / (1.f / (C_a * C_a) + 1.f / (C_b * C_b)));
	}

	return vec3( C_0, C_mid, C_max );
}

vec3 okhsl_to_srgb(vec3 hsl)
{
	float h = hsl.x;
	float s = hsl.y;
	float l = hsl.z;

	if (l == 1.0f)
	{
		return vec3( 1.f, 1.f, 1.f );
	}

	else if (l == 0.f)
	{
		return vec3( 0.f, 0.f, 0.f );
	}

	float a_ = cos(2.f * M_PI * h);
	float b_ = sin(2.f * M_PI * h);
	float L = toe_inv(l);

	vec3 cs = get_Cs(L, a_, b_);
	float C_0 = cs.x;
	float C_mid = cs.y;
	float C_max = cs.z;

	float mid = 0.8f;
	float mid_inv = 1.25f;

	float C, t, k_0, k_1, k_2;

	if (s < mid)
	{
		t = mid_inv * s;

		k_1 = mid * C_0;
		k_2 = (1.f - k_1 / C_mid);

		C = t * k_1 / (1.f - k_2 * t);
	}
	else
	{
		t = (s - mid)/ (1.f - mid);

		k_0 = C_mid;
		k_1 = (1.f - mid) * C_mid * C_mid * mid_inv * mid_inv / C_0;
		k_2 = (1.f - (k_1) / (C_max - C_mid));

		C = k_0 + t * k_1 / (1.f - k_2 * t);
	}

	vec3 rgb = oklab_to_linear_srgb(vec3( L, C * a_, C * b_ ));
	return vec3(
		srgb_transfer_function(rgb.r),
		srgb_transfer_function(rgb.g),
		srgb_transfer_function(rgb.b)
	);
}

vec3 srgb_to_okhsl(vec3 rgb)
{
	vec3 lab = linear_srgb_to_oklab(vec3(
		srgb_transfer_function_inv(rgb.r),
		srgb_transfer_function_inv(rgb.g),
		srgb_transfer_function_inv(rgb.b)
		));

	float C = sqrt(lab.y * lab.y + lab.z * lab.z);
	float a_ = lab.y / C;
	float b_ = lab.z / C;

	float L = lab.x;
	float h = 0.5f + 0.5f * atan(-lab.z, -lab.y) / M_PI;

	vec3 cs = get_Cs(L, a_, b_);
	float C_0 = cs.x;
	float C_mid = cs.y;
	float C_max = cs.z;

	// Inverse of the interpolation in okhsl_to_srgb:

	float mid = 0.8f;
	float mid_inv = 1.25f;

	float s;
	if (C < C_mid)
	{
		float k_1 = mid * C_0;
		float k_2 = (1.f - k_1 / C_mid);

		float t = C / (k_1 + k_2 * C);
		s = t * mid;
	}
	else
	{
		float k_0 = C_mid;
		float k_1 = (1.f - mid) * C_mid * C_mid * mid_inv * mid_inv / C_0;
		float k_2 = (1.f - (k_1) / (C_max - C_mid));

		float t = (C - k_0) / (k_1 + k_2 * (C - k_0));
		s = mid + (1.f - mid) * t;
	}

	float l = toe(L);
	return vec3( h, s, l );
}


vec3 okhsv_to_srgb(vec3 hsv)
{
	float h = hsv.x;
	float s = hsv.y;
	float v = hsv.z;

	float a_ = cos(2.f * M_PI * h);
	float b_ = sin(2.f * M_PI * h);
	
	vec2 cusp = find_cusp(a_, b_);
	vec2 ST_max = to_ST(cusp);
	float S_max = ST_max.x;
	float T_max = ST_max.y;
	float S_0 = 0.5f;
	float k = 1.f- S_0 / S_max;

	// first we compute L and V as if the gamut is a perfect triangle:

	// L, C when v==1:
	float L_v = 1.f   - s * S_0 / (S_0 + T_max - T_max * k * s);
	float C_v = s * T_max * S_0 / (S_0 + T_max - T_max * k * s);

	float L = v * L_v;
	float C = v * C_v;

	// then we compensate for both toe and the curved top part of the triangle:
	float L_vt = toe_inv(L_v);
	float C_vt = C_v * L_vt / L_v;

	float L_new = toe_inv(L);
	C = C * L_new / L;
	L = L_new;

	vec3 rgb_scale = oklab_to_linear_srgb(vec3( L_vt, a_ * C_vt, b_ * C_vt ));
	float scale_L = cbrt(1.f / max(max(rgb_scale.r, rgb_scale.g), max(rgb_scale.b, 0.f)));

	L = L * scale_L;
	C = C * scale_L;

	vec3 rgb = oklab_to_linear_srgb(vec3( L, C * a_, C * b_ ));
	return vec3(
		srgb_transfer_function(rgb.r),
		srgb_transfer_function(rgb.g),
		srgb_transfer_function(rgb.b)
	);
}

vec3 srgb_to_okhsv(vec3 rgb)
{
	vec3 lab = linear_srgb_to_oklab(vec3(
		srgb_transfer_function_inv(rgb.r),
		srgb_transfer_function_inv(rgb.g),
		srgb_transfer_function_inv(rgb.b)
		));

	float C = sqrt(lab.y * lab.y + lab.z * lab.z);
	float a_ = lab.y / C;
	float b_ = lab.z / C;

	float L = lab.x;
	float h = 0.5f + 0.5f * atan(-lab.z, -lab.y) / M_PI;

	vec2 cusp = find_cusp(a_, b_);
	vec2 ST_max = to_ST(cusp);
	float S_max = ST_max.x;
	float T_max = ST_max.y;
	float S_0 = 0.5f;
	float k = 1.f - S_0 / S_max;

	// first we find L_v, C_v, L_vt and C_vt

	float t = T_max / (C + L * T_max);
	float L_v = t * L;
	float C_v = t * C;

	float L_vt = toe_inv(L_v);
	float C_vt = C_v * L_vt / L_v;

	// we can then use these to invert the step that compensates for the toe and the curved top part of the triangle:
	vec3 rgb_scale = oklab_to_linear_srgb(vec3( L_vt, a_ * C_vt, b_ * C_vt ));
	float scale_L = cbrt(1.f / max(max(rgb_scale.r, rgb_scale.g), max(rgb_scale.b, 0.f)));

	L = L / scale_L;
	C = C / scale_L;

	C = C * toe(L) / L;
	L = toe(L);

	// we can now compute v and s:

	float v = L / L_v;
	float s = (S_0 + T_max) * C_v / ((T_max * S_0) + T_max * k * C_v);

	return vec3 (h, s, v );
}
`;

let origin = {
    x: 6.4, y: 4.8
};
let viewSize = { width: 12.8, height: 9.6 };
let gridSpacing = {major: 2, minor: 0.5};
let grid = false;
const zoomIntensity = 0.05;
let oldColor = false;

let gl, program, locations, buffers;

function generateShaderFunction(ast) {
    return `vec2 f(vec2 z) {\n    return ${a2g(ast)};\n}`;
}

function a2g(n) {
    switch (n.op) {
        case '+': return `${a2g(n.children[0])} + ${a2g(n.children[1])}`;
        case '-': return `${a2g(n.children[0])} - ${a2g(n.children[1])}`;
        case '*': return `cmul(${a2g(n.children[0])}, ${a2g(n.children[1])})`;
        case '/': return `cdiv(${a2g(n.children[0])}, ${a2g(n.children[1])})`;
        case '^': return `cpow(${a2g(n.children[0])}, ${a2g(n.children[1])})`;
        case 'u+': return a2g(n.children[0]);
        case 'u-': return `-(${a2g(n.children[0])})`;
        case 'sin': return `csin(${a2g(n.children[0])})`;
        case 'cos': return `ccos(${a2g(n.children[0])})`;
        case 'tan': return `ctan(${a2g(n.children[0])})`;
        case 'log': return `clog(${a2g(n.children[0])})`;
        case 'exp': return `cexp(${a2g(n.children[0])})`;
        case '\\pi': return 'vec2(PI, 0.0)';
        case 'e': return 'vec2(E, 0.0)';
        case 'i': return 'I';
        case 'z': return 'z';
        default:
            if (n.op.includes('.'))
                return `vec2(${n.op}, 0.0)`;
            else
                return `vec2(${n.op}.0, 0.0)`;
    }
}

function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (success)
        return shader;

    console.log(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
}

function createProgram(gl, vertexShader, fragmentShader) {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    const success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (success)
        return program;

    console.log(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
}

function calculateGridSpacing(x) {
    // largest power of 10 smaller than the screenWidth x
    s = Math.pow(10, Math.floor(Math.log10(x)));
    t = s/100;

    if(x > 6.5 * s)
        return {major: 100 * t, minor: 20 * t}
    if(x > 2.5 * s)
        return {major: 50 * t, minor: 10 * t}
    if(x > 1.3 * s)
        return {major: 20 * t, minor: 5 * t}
    return {major: 10 * t, minor: 2 * t}
} 

function initProgram(gl, cFunction) {
    gl.getExtension("OES_standard_derivatives");
    const vsSource = `#version 300 es
        in vec4 a_position;

        void main() {
            gl_Position = a_position;
        }
    `;
    const fsSource = `#version 300 es
        // #extension GL_OES_standard_derivatives : enable
      
        #define PI 3.1415926538
        #define E  2.7182818285
        #define I vec2(0.0, 1.0)

        precision highp float;
        
        uniform vec2 u_resolution;
        uniform vec2 u_viewSize;
        uniform vec2 u_offset;
        uniform vec2 u_gridSpacing;

        ${okhslGlsl}

        // COMPLEX MATH
        // helper functions
        // float sinh(float x) {
        //     return 0.5*(exp(x) - exp(-x));
        // }
        // float cosh(float x) {
        //     return 0.5*(exp(x) + exp(-x));
        // }

        vec2 cmul(vec2 a, vec2 b) {
            return vec2(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
        }
        vec2 cdiv(vec2 a, vec2 b) {
            return vec2(
                (a.x*b.x + a.y*b.y) / dot(b, b),
                (a.y*b.x - a.x*b.y) / dot(b, b)
            );
        }   
        vec2 cexp(vec2 z) {
            return exp(z.x) * vec2(cos(z.y), sin(z.y));
        }
        vec2 csin(vec2 z) {
            return vec2(sin(z.x)*cosh(z.y), cos(z.x)*sinh(z.y));
        }
        vec2 ccos(vec2 z) {
            return vec2(cos(z.x)*cosh(z.y), -sin(z.x)*sinh(z.y));
        }
        vec2 ctan(vec2 z) {
            return cdiv(csin(z), ccos(z));
        }
        // principal branch
        vec2 clog(vec2 z) {
            return vec2(log(length(z)), atan(z.y, z.x));
        }
        vec2 cpow(vec2 a, vec2 b) {
            return cexp(cmul(b, clog(a)));
        }

        ${cFunction}


        // PERCEPTUALLY-UNIFORM COLOR
        //  code by Iñigo Quiles: https://www.shadertoy.com/view/MsS3Wc
        vec3 hsb2rgb(in vec3 c) {
            vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),
                                    6.0)-3.0)-1.0,
                            0.0,
                            1.0 );
            rgb = rgb*rgb*(3.0-2.0*rgb);
            return c.z * mix( vec3(1.0), rgb, c.y);
        }

        vec3 oklab2rgb(in vec3 c) {
            float l_ = c.x + 0.3963377774 * c.y + 0.2158037573 * c.z;
            float m_ = c.x - 0.1055613458 * c.y - 0.0638541728 * c.z;
            float s_ = c.x - 0.0894841775 * c.y - 1.2914855480 * c.z;

            float l = l_*l_*l_;
            float m = m_*m_*m_;
            float s = s_*s_*s_;

            return vec3(
                +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
                -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
                -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
            );
        }

        // accurate color inversion
        // code by Jive Dadson
        // sRGB luminance(Y) values
        float rY = 0.212655;
        float gY = 0.715158;
        float bY = 0.072187;

        // Inverse of sRGB "gamma" function. (approx 2.2)
        float inv_gam_sRGB(float c) {
            if ( c <= 0.04045 )
                return c/12.92;
            else 
                return pow(((c+0.055)/(1.055)),2.4);
        }

        // sRGB "gamma" function (approx 2.2)
        float gam_sRGB(float v) {
            if(v<=0.0031308)
                v *= 12.92;
            else 
                v = 1.055*pow(v,1.0/2.4)-0.055;
            return v;  // This is correct in C++. Other languages may not
                                    // require +0.5
        }

        // gray value ("brightness")
        float gray(float r, float g, float b) {
            return gam_sRGB(
                    rY*inv_gam_sRGB(r) +
                    gY*inv_gam_sRGB(g) +
                    bY*inv_gam_sRGB(b)
            );
        }
        

        // GRIDLINES
        // code by Ricky Reusser: https://observablehq.com/@rreusser/locally-scaled-domain-coloring-part-1-contour-plots
        float linearstep(float e0, float e1, float x) {
            return clamp((x-e0) / (e1 - e0), 0.0, 1.0);
        }

        float triangle(float x, float spacing) {
            return (0.5 - abs(fract(abs(x) / spacing) - 0.5));
        }

        // spacing == 0 for axis
        float gridline(float coord, float width, float antialiasWidth, float spacing) {
            if(spacing == 0.0) {
                return linearstep(
                    width + 0.5 * antialiasWidth,
                    width - 0.5 * antialiasWidth,
                    abs(coord) / length(vec2(dFdx(coord), dFdy(coord)))
                );
            }
            float screenSpaceGradient = length(vec2(dFdx(coord), dFdy(coord))) / spacing;
            return linearstep(
                width + 0.5 * antialiasWidth,
                width - 0.5 * antialiasWidth,
                triangle(coord, spacing) / screenSpaceGradient
            );
        }

        float invert(float x) {
            return 0.5*cos(PI*x)+0.5;
        }

        out vec4 outColor;

        void main() {
            vec2 coords = (gl_FragCoord.xy/u_resolution)*u_viewSize + u_offset; 
            vec2 f = f(coords);

            float angle = atan(f.y, f.x);
            float radius = length(f);
            float C = radius / (radius + 1.0);
            
            ${oldColor  ? '' : '//'} vec3 color = oklab2rgb(vec3( radius/(radius + 1.0), 0.25 * cos(angle), 0.25 * sin(angle) ));
            ${!oldColor ? '' : '//'} vec3 color = okhsl_to_srgb(vec3(angle / (2.0*PI), 0.75*C, 0.5*C));

            float width = 0.75;
            float antialiasWidth = 1.0;

            // gridline spacing in complex plane
            float major = u_gridSpacing.x;
            float minor = u_gridSpacing.y;

            // x,y axes
            float axisX = 1.75 * gridline(coords.x, width, antialiasWidth, 0.0);
            float axisY = 1.75 * gridline(coords.y, width, antialiasWidth, 0.0);

            // major gridlines
            float majorX = gridline(coords.x, width, antialiasWidth, major);
            float majorY = gridline(coords.y, width, antialiasWidth, major);

            // minor gridlines
            float minorX = 0.25 * gridline(coords.x, width, antialiasWidth, minor);
            float minorY = 0.25 * gridline(coords.y, width, antialiasWidth, minor);

            float gM = 0.5*max(max(axisX,axisY), max(max(majorX, majorY), max(minorX, minorY)));

            float g = invert(gray(color.x,color.y,color.z));

            outColor = mix(vec4(color, 1.0), vec4(g,g,g, 1.0), gM);
        }
    `;

    // compile shaders and link into shader program
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    program = createProgram(gl, vertexShader, fragmentShader);

    const locations = {
        uniform: {
            resolution: gl.getUniformLocation(program, 'u_resolution'),
            viewSize: gl.getUniformLocation(program, 'u_viewSize'),
            offset: gl.getUniformLocation(program, 'u_offset'),
            gridSpacing: gl.getUniformLocation(program, 'u_gridSpacing')
        },
        attribute: {
            position: gl.getAttribLocation(program, "a_position")
        }
    }

    const buffers = {
        position: gl.createBuffer()
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    const positions = [-1, -1, -1, 1, 1, 1, 1, 1, 1, -1, -1, -1];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    return { program, locations, buffers };
}

window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

function render(gl, program, locations, buffers) {
    // update clip space if canvas resized
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.useProgram(program);
    gl.enableVertexAttribArray(locations.attribute.position);

    // bind position attribute
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    const size = 2;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.vertexAttribPointer(locations.attribute.position, size, type, normalize, stride, offset);

    // bind uniforms
    gl.uniform2f(locations.uniform.resolution, gl.canvas.width, gl.canvas.height);
    gl.uniform2f(locations.uniform.viewSize, viewSize.width, viewSize.height);
    gl.uniform2f(locations.uniform.offset, -origin.x, -origin.y);
    gl.uniform2f(locations.uniform.gridSpacing, gridSpacing.major, gridSpacing.minor);

    const primitiveType = gl.TRIANGLES;
    const count = 6;
    gl.drawArrays(primitiveType, 0, count);
}

// // extremely slow
// function renderGrid(canvas) {
//     const c = canvas.getContext('2d');
// 	c.strokeStyle = 'rgb(255,255,255)';

//     // clear canvas
//     c.setTransform(1, 0, 0, 1, 0, 0);
// 	c.clearRect(0, 0, canvas.width, canvas.height);

//     c.scale(canvas.width, -canvas.height);
//     c.translate(0, -1);
//     c.scale(1/viewSize.width, 1/viewSize.height);
//     c.translate(origin.x, origin.y);
    
//     c.beginPath();
//     c.moveTo(0, 0);
//     c.lineTo(0, 1);
//     c.closePath();
//     c.stroke();

//     // draw gridlines
//     c.lineWidth = viewSize.width / canvas.width;

//     // major vertical gridlines
//     for(let x = Math.ceil(-origin.x); x < -origin.x + viewSize.width; x += 1) {
//         c.beginPath();
//         c.moveTo(x, -origin.y);
//         c.lineTo(x, -origin.y + viewSize.height);
//         c.closePath();
//         c.stroke();
//     }

//     // major horizontal gridlines
//     for(let y = Math.ceil(-origin.y); y < -origin.y + viewSize.height; y += 1) {
//         c.beginPath();
//         c.moveTo(-origin.x, y);
//         c.lineTo(-origin.y + viewSize.width, y);
//         c.closePath();
//         c.stroke();
//     }
// }

function main() {
    // INITIALIZATION
    // obtain canvas webgl context
    const canvas = document.querySelector('#glcanvas');
    const gridCanvas = document.querySelector('#gridcanvas');

    gl = canvas.getContext('webgl2');
    if (!gl) {
        console.error('No webgl!');
        return;
    }

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    gridCanvas.width = rect.width;
    gridCanvas.height = rect.height;

    viewSize = { height: 10, width: rect.width / rect.height * 10 };
    origin = { y: 5, x: rect.width / rect.height * 5 };

    // math input
    const inputSpan = document.getElementById('mathinput');
    var inputMathField = MQ.MathField(inputSpan, {
        handlers: {
            enter: () => {
                const enteredMath = inputMathField.latex().replaceAll('\\left', '').replaceAll('\\right', '');
                const ast = MathParser.parse(enteredMath);
                const func = generateShaderFunction(ast);

                ({ program, locations, buffers } = initProgram(gl, func));

                if (demo) {
                    document.getElementById('latex').innerText = enteredMath;
                    document.getElementById('ast').innerText = JSON.stringify(ast, null, '  ');
                    document.getElementById('shader').innerText = func;
                }
            }
        }
    });

    // settings
    const colorCheck = document.getElementById('colorcheck');
    colorCheck.addEventListener('change', (e) => {
        oldColor = colorCheck.checked;
        
        const enteredMath = inputMathField.latex().replaceAll('\\left', '').replaceAll('\\right', '');
        const ast = MathParser.parse(enteredMath);
        const func = generateShaderFunction(ast);

        ({ program, locations, buffers } = initProgram(gl, func));
    })

    // motion controls
    const hammer = new Hammer(gridCanvas);
    let dragging = false, dragStart;
    hammer.on('panstart', event => {
        dragStart = {
            x: event.center.x - canvas.offsetLeft,
            y: event.center.y - canvas.offsetTop
        }
        dragging = true;
    });
    hammer.on('panend', event => {
        dragging = false;
    });
    hammer.on('pancancel', event => {
        dragging = false;
    });
    hammer.on('panmove', event => {
        if (!dragging)
            return

        dragEnd = {
            x: event.center.x - canvas.offsetLeft,
            y: event.center.y - canvas.offsetTop
        }

        origin.x -= - (dragEnd.x - dragStart.x) / gl.canvas.width * viewSize.width;
        origin.y -= (dragEnd.y - dragStart.y) / gl.canvas.height * viewSize.height;

        dragStart = dragEnd;
    });
    gridCanvas.addEventListener('wheel', event => {
        event.preventDefault();

        const wheel = event.deltaY < 0 ? 1 : -1;
        const zoom = Math.exp(wheel * zoomIntensity);
        if (viewSize.width * zoom < 1e-6 || viewSize.width * zoom > 1e6)
            return;


        const rect = canvas.getBoundingClientRect();
        const mouseU = (event.clientX - rect.left) / canvas.width;
        const mouseV = (rect.bottom - event.clientY) / canvas.height;

        viewSize.width /= zoom;
        viewSize.height /= zoom;

        // origin += mouseNew - mouseOld
        origin.x += (mouseU - mouseU * zoom) * viewSize.width;
        origin.y += (mouseV - mouseV * zoom) * viewSize.height;

        // document.getElementById('canvas-debug').innerText = `x: ${ mouseNewX } \ny: ${ mouseNewY } `;

        gridSpacing = calculateGridSpacing(viewSize.width);
    });


    // initialize function
    const enteredMath = inputMathField.latex().replaceAll('\\left', '').replaceAll('\\right', '');
    const ast = MathParser.parse(enteredMath);
    const func = generateShaderFunction(ast);

    ({ program, locations, buffers } = initProgram(gl, func));

    if (demo) {
        document.getElementById('latex').innerText = enteredMath;
        document.getElementById('ast').innerText = JSON.stringify(ast, null, '  ');
        document.getElementById('shader').innerText = func;
    }

    (function animloop() {
        requestAnimFrame(animloop);
        render(gl, program, locations, buffers);
    })();
}

main();