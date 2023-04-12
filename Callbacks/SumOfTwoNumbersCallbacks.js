function calculate(num1, num2, callback) {
    const result = num1 + num2;
  
    // calling the callback function with the result
    callback(result);
  }
  
  // function to be used as the callback
  function printResult(result) {
    console.log(`The result is ${result}`);
  }
  
  
  calculate(10, 20, printResult);