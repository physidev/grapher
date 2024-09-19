vec2 cmul(vec2 a, vec2 b) {
    return vec2(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
}

vec2 cdiv(vec2 a, vec2 b) {
    return vec2(
        (a.x*b.x + a.y*b.y) / dot(b, b),
        (a.y*b.x - a.x*b.y) / dot(b, b)
    );
}

vec2 cpow(vec2 a, vec2 b) {
    return cexp(cmul(b, clog(a)));
}

vec2 csin(vec2 z) {
    return vec2(sin(x)*cosh(y), cos(x)*sinh(y));
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

vec2 cexp(vec2 z) {
    return exp(z.x) * vec2(cos(z.y), sin(z.y));
}

// helper functions
float sinh(float x) {
    return 0.5*(exp(x) - exp(-x));
}
float cosh(float x) {
    return 0.5*(exp(x) + exp(-x));
}