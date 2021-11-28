(async () => {
  try {
    const imports = {
      console: {
        log: (arg) => {
          console.log(arg);
        }
      }
    };
    
    const response = await fetch('./main.wasm');
    const bytes = await response.arrayBuffer();
    const result = await WebAssembly.instantiate(bytes, imports);
    const instanceExports = result.instance.exports;

    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');

    const handleInputChange = () => {
      const value1 = Number(input1.value);
      const value2 = Number(input2.value);
      const result = instanceExports.add(value1, value2);
      instanceExports.logResult(result);
      document.getElementById('result').textContent = result;
    }

    input1.addEventListener('change', handleInputChange);
    input2.addEventListener('change', handleInputChange);
  } catch(e) {
    console.log(e);
  }
})();
