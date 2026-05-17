# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

The only build step is for the LaTeX parser. The main app has no build step and is served as static files.

```bash
# Build the parser bundle (must re-run after editing anything in /parser)
cd parser
npm install
npm run build   # produces parser/dist/parser.bundle.js
```

There are no lint or test commands configured.

## Architecture

**Complex Grapher** is a client-side WebGL app that visualizes complex-valued functions f(z) in the complex plane. Users type LaTeX expressions into a MathQuill input; the app parses them, generates GLSL shader code on the fly, compiles it onto the GPU, and renders the result at 60 FPS.

### Data flow

1. **User input** — MathQuill mathfield in `index.html` emits a LaTeX string on Enter.
2. **Parsing** (`parser/LaTeXParser.js`) — An ANTLR4 lexer+parser tokenizes the LaTeX, builds a CST, and a custom Visitor walks it to produce a GLSL function body (complex number arithmetic using `vec2`).
3. **Shader generation** (`shaders.js`) — The generated GLSL snippet is embedded into a fragment shader template that also contains all complex math helpers (`cmul`, `cdiv`, `cpow`, `csin`, etc.) and color-mapping code.
4. **Compilation & rendering** (`complex.js`) — The fragment shader is compiled via WebGL 2, bound to a fullscreen quad, and drawn every frame. Uniforms carry the current pan offset and zoom level.
5. **Grid overlay** — A separate 2D canvas is drawn on top to render axis labels and gridlines.

### Key files

| File | Role |
|---|---|
| `complex.js` | App init, pan/zoom interaction (Hammer.js + mouse wheel), render loop |
| `shaders.js` | Fragment shader template, GLSL complex-math helpers, OKLab/OKHSL color mapping |
| `parser/LaTeXParser.js` | ANTLR Visitor that converts LaTeX AST nodes → GLSL expressions |
| `parser/Math.g4` | ANTLR4 grammar for mathematical LaTeX (source of truth for supported syntax) |
| `index.html` | Single HTML page; loads `parser/dist/parser.bundle.js` (pre-built) |
| `demo.html` | Debug variant that prints the intermediate parsing steps to the page |

### Complex numbers in GLSL

All complex values are `vec2(real, imag)`. The helpers in `shaders.js` implement standard formulas (e.g., `cmul` uses (ac−bd, ad+bc)). Constants `I`, `PI`, and `E` are declared as `vec2` uniforms or literals in the shader preamble.

### Color mapping

Two modes are toggled by a checkbox:
- **OKLab (default)** — maps argument (angle) → hue and magnitude → perceptual lightness in OKLab space.
- **OKHSL** — hue = angle, saturation/lightness driven by magnitude.

Both pipelines live in `shaders.js` and end with an sRGB conversion before `gl_FragColor`.

### Parser bundle

`parser/dist/parser.bundle.js` is a pre-built Webpack bundle committed to the repo. If you edit `parser/LaTeXParser.js` or `parser/Math.g4` you must rebuild it (`npm run build` inside `/parser`). The main app will silently use the old bundle otherwise.
