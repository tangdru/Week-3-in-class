var testString = "Hello world";
console.log(testString.length);
console.log(testString.charAt(2));

numCharInString(testString,'o');

function numCharInString(str,char){
	//using str.length, construct a for loop to iterate over every character in the string
var counter = 0;

	//compare charater in string to "char"

	//if a match, add a number 
	for(var i=0; i<str.length; i+=1){
		str.chartAt(i) == char){
	counter +=1;
}
}

console.log("The number of matches is " + counter);
//return ("The number of matches is" + counter);