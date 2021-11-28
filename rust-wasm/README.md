# Rust as the WebAssembly compilation source

- write WebAssembly functionality using Rust to lib.rs file
- use wasm-bindgen to define bindings (imports) to JavaScript APIs and exported functionality (from WebAssembly to JavaScript)
- use wasm-pack compile Rust to WebAssembly and JavaScript wrapper files (wasm-pack build --target web)
- import WebAssembly funtionality to a web application from produced JavaScript wrappers
- use a web application bundler to make the process more efficient

## References

https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm
