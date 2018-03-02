//For in and for of
var numbers = [10, 20, 30, 40, 50];
var object = {
    property1: 'value 1',
    property2: 'value 2',
    property3: 'value 3',
    property4: 'value 4',
    property5: 'value 5',
}

//For in: Return the property of array or object

for(let number in numbers) {
    console.log(number);
}

for(let property in object) {
    console.log(property);
}

//For of: Return the value of array
for(let number of numbers) {
    console.log(number);
}

//ps: Objects doesn't work in 'For of'