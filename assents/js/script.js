//enter numbers to calculate
function insert(num) {
    let number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + num;
}

// clear errors
function clear() {
    document.getElementById('result').innerHTML = "";
}

//back action
function back() {
    let result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length -1);
}

//calculator
function calculate() {
    let result = document.getElementById('result').innerHTML;
    if(result) {
        document.getElementById('result').innerHTML = eval(result);    
    } else {
        document.getElementById('result').innerHTML = 'anything...'
    }
}