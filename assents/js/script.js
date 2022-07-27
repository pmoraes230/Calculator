var input = document.querySelector('#display');
var operator = "";
var parar = false;

function limpar() {
    input.value = "";
    document.querySelector('#history').innerHTML = "";
    operator = "";
}

function add_number(string) {
    if(!parar) {
        if (string === '.' && input.value.indexOf('.') === -1 || string !== '.') {
            input.value = input.value + string;
            history.value = input.value;
        }
    }else {
        if (string === '.' && input.value.indexOf('.') === -1 || string !== '.') {
            input.value = "";
            parar = false;
            document.querySelector('#history').innerHTML = "";
            operator = "";
            input.value = input.value + string;
        }
    }
}

function add_number(op) {
    if (input.value == "") {
        input.value = "0";
    }

    if (operator == "") {
        operator = op;
        input.value = input.value + op;
    } else {
        total()
        input.value = input.value + op;
        operator = op;
        parar=false;
    }
}

function total() {
    if (!parar) {
      numeros = input.value.split(operator);
  
      if (numeros[1] == "") {
        input.value = input.value + '0';
        numeros[1] = 0;
  
      }
  
      document.querySelector("#history").innerHTML = input.value;
  
      switch (operator) {
        case "+":
          input.value = Number(numeros[0]) + Number(numeros[1]);
          break;
  
        case "-":
          input.value = numeros[0] - numeros[1];
          break;
  
        case "*":
          input.value = numeros[0] * numeros[1];
          break;
  
        case "/":
          input.value = numeros[0] / numeros[1];
          break;
      }
        parar = true;
    }
}