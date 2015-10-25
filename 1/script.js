/* Construct a simulation of Math.random()
 * to verify how truly random it is
 */
var case1= 0, case2= 0, case3= 0, case4= 0;
var numOfExpressions = 10000000

//First, construct a for loop so we can run Math.random() x number of times
for(var i=0; i<numOfExpressions; i=(i+1)){
	var newNumber = Math.random();

	if(newNumber < .25){
	//do something
	case1 += 1;

}else if(newNumber < .5){
	//do something
	case2 += 1;

}else if(newNumber < .75){
	//do something
	case3 += 1;

}else{
	case4 += 1;
}
}


console.log(case1);
console.log(case2);
console.log(case3);
console.log(case4);




//within the for loop, run Math.random()


//If Math.random() is truly random, then its return value should be equally distributed between 0 and 1
//therefore, a value between 0 and 0.25 should occur 25% of the time, between 0.25 and 0.5, another 25%, and so on and so forth
//use if...else if...else to test that out


//Finally, print out the results in the following format
//"x number of simulations were run"
//"x% of results occurred between 0 and 0.25"
//"x% of results occurred between 0.25 and 0.5"
//...