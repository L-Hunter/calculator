
var calcDisplay = document.getElementById("display");
var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', setA);
}

var equation = "";
var a;
var b;
var op;
var n = "";
var answer;

function add(){
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

function display(x){
	if (b){
		//refresh();
		equation = "" + x;
		calcDisplay.textContent = equation;
		a = undefined;
		b = undefined;
		n = "" + x;
	} else {
		equation += x;
		calcDisplay.textContent = equation;
		if (!(isNaN(x))){
			n += x;
		}
		else {
			op = x;
		}
	}
}

function setA(){
	a = parseInt(n);
	n = "";
}

function setB(){
	b = parseInt(n);
	n = "";
}

function calculate(){
	setB();
	if (a && b){
		if (op === "+"){
			add(a,b);
		} else if (op === "-"){
			subtract(a,b);
		} else if (op === "*"){
			multiply(a,b);
		} else if (op === "/"){
			divide(a,b);
		}
		calcDisplay.textContent = answer;
	} else {
		calcDisplay.textContent = "Please enter a valid equation."
	}
}

function refresh(){
	location.reload();
}


