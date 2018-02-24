var numbers = [20, 30, 40, 50, 10];
var smaller = 0;

function smallerNumber(numbers) {
    smaller = numbers[0];
    for(let index in numbers) {
        if(numbers[index] < smaller) {
            smaller = numbers[index];
        }
    }
    return smaller;
}