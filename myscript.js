//Задание 1

function firstCharToUpperCase(s) {
	return s[0].toUpperCase() + s.slice(1);
}
			firstCharToUpperCase("igor")	
	alert(firstCharToUpperCase("igor"));

//Задание 2
var string = "string",
	substring = "ring";
string.includes(substring);
//Задание 3
function splitString(str, maxlength) {
	return (str.length > maxlength) ?
		    str.slice(0, maxlength - 1) + '...' : str;
		}
	alert(splitString("Всем привет, меня зовут Игорь", 25));
//Задание 4
	var max = 55;
	alert(Math.random() * max)
//Задание 5
	function fib(n) {
			  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
			}
			alert( fib(3) ); // 2
			alert( fib(5) ); // 5
			alert( fib(8) ); // 21
			alert( fib(13) ); // 233
			alert( fib(21) ); // 10946
//Задание 6
function changeDirection(string) {
		 return string.split("").reverse().join("");
	}
	alert(changeDirection("string"));
//Задание 7

//Задание 8
function factorial(n) {
		return n ? n * factorial(n - 1) : 1;
	}
	alert( factorial(1) ); // 1
	alert( factorial(2) ); // 2
	alert( factorial(3) ); // 6
	alert( factorial(4) ); // 24
	alert( factorial(5) ); // 120