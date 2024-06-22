document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('addBut').addEventListener('click', addNumbers);
});

function addNumbers(){
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    const sum = Number(num1) + Number(num2);;

    document.getElementById('result').textContent = 'Result: '+sum;
}