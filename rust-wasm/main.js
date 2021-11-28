import init, { add, log_result } from "./pkg/rust_wasm.js";

(async () => {
    try {      
      await init();
  
      const input1 = document.getElementById('input1');
      const input2 = document.getElementById('input2');
  
      const handleInputChange = () => {
        const value1 = Number(input1.value);
        const value2 = Number(input2.value);

        const result = add(value1, value2);
        log_result(result);

        document.getElementById('result').textContent = result;
      }
  
      input1.addEventListener('change', handleInputChange);
      input2.addEventListener('change', handleInputChange);
    } catch(e) {
      console.log(e);
    }
  })();
  