use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    #[wasm_bindgen(js_namespace = console)]
    pub fn log(r: f64);
}

#[wasm_bindgen]
pub fn add(n1: f64, n2: f64) -> f64 {
    return n1 + n2;
}

#[wasm_bindgen]
pub fn log_result(result: f64) {
    log(result);
}
