//Older

var myObject = {a:1, b:3, c:5};
var myArray = [2, 4, 6];

var a = myObject.a,
    b = myObject.b,
    c = myObject.c;

var d = myArray[0],
    e = myArray[1],
    f = myArray[2];

//New

var myObject2 = {g:1, h:3, i:5};
var myArray2 = [2, 4, 6];

var {g,h,i} = myObject2; //The variables has to have the same names of properties
var [j,k,l] = myArray2; //Here the names could be others