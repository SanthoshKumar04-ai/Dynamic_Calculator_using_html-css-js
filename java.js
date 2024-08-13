// script.js

function clearDisplay() {
    document.getElementById('result').value = '';
}

function appendValue(value) {
    document.getElementById('result').value += value;
}

function backspace() {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}

function calculateResult() {
    try {
        let result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (error) {
        alert("Invalid input!");
    }
}
