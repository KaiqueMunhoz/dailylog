//Operator Spread in javascript

var sum = function(n1, n2, n3) {
    return n1 + n2 + n3;
}
var myArray = [10,20,30];
var myArray2 = [40, 50, 60];

//Older
//To get a value of an array to make something

sum(myArray[0],myArray[1],myArray[2]);

//Newer
sum(...myArray); //If you have, n numbers to sum, in this case it isn't a problem.

//In the case that you have to concatenate the values of two or more arrays
var newArray = [...myArray, ...myArray2]