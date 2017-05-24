var answer;

function add(a,b){
	answer = a + b;
}

function multiply(a,b){
	answer = a * b;	
}

function divide(a,b){
	answer = a / b;
}

function subtract(a,b){
	answer = a - b;
}

var equation = "";

function display(x){
	var display = document.getElementById("display");
	equation += x;
	display.textContent = equation;
	console.log(x);
}

function refresh(){
	location.reload();
}


