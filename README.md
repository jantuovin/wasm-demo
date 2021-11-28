# WebAssembly

This repository demostrates usage of WebAssembly in web applications using WebAssembly text-format and using Rust as the compilation source for WebAssembly.

## What is WebAssembly

- a low-level assembly-like language with a compact binary format that runs with near-native performance
- like physical assembly languages, the WebAssembly binary format (.wasm) has a text representation (.wat) with 1:1 correspondence
- provides languages such as C/C++, C# and Rust with a compilation target so that they can run on the web
- primarily not intended to be written by hand, rather it is designed to be an effective compilation target for source languages
- designed to run alongside JavaScript, allowing both to work together
- WebAssembly modules will be able to call into and out of the JavaScript context and access browser functionality through the same Web APIs accessible from JavaScript
- JavaScript has complete control over how WebAssembly code is downloaded, compiled and run, JavaScript developers could even think of WebAssembly as just a JavaScript feature for efficiently generating high-performance functions
- when embedded in the web, WebAssembly will enforce the same-origin and permissions security policies of the browser

## Content of the repository

- ./vanilla (WebAssembly text-format)
- ./rust-wasm (Rust as the compilation source)

## References

https://webassembly.org/

https://developer.mozilla.org/en-US/docs/WebAssembly
