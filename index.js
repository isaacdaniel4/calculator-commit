let number1 = '';
let number2 = '';
let currentOperator = '';
let clearResult = false;

function writeNuber(num) {
    let result = 
    document.getElementById('result')

    if (clearResult) {
        result.value = '';
        clearResult = false;
    }

    result.value += num;
}

function writeSymbol(symbol) {
    let result = 
    document.getElementById('result')


    if (number1 === '') {
        number1 = result.value;
        currentOperator = symbol;
        clearResult = true;
    }

        number2 = result.value;
        calculate();
        currentOperator = symbol;
        clearResult = true;
    }

    function calculate() {
        let result = 
        document.getElementsByName('result');

        switch (currentOperator) {
            case '/':
      result.value = parseFloat(number1) / parseFloat(number2);
      break;
    case '*':
      result.value = parseFloat(number1) * parseFloat(number2);
      break;
    case '-':
      result.value = parseFloat(number1) - parseFloat(number2);
      break;
    case '+':
      result.value = parseFloat(number1) + parseFloat(number2);
      break;
  }
  
  number1 = result.value;
  number2 = '';
}

function clearResult() {
    let result = document.getElementById('result');
    
    result.value = '';
    number1 = '';
    number2 = '';
    currentOperator = '';
  }
