//CONDITIONS

//IF - Descover if a number is pair or odd
function pairOrOdd(number) {
    if(number%2 === 0) {
        console.log("The number is pair");
    } else {
        console.log("The number is odd");
    }
}

//SWITCH - Descover if a letter is vowel or a consonant
function vowelOrConsonant(letter) {

    switch(letter) {
        case 'a': console.log("It is a vowel"); break;
        case 'e': console.log("It is a vowel"); break;
        case 'i': console.log("It is a vowel"); break;
        case 'o': console.log("It is a vowel"); break;
        case 'u': console.log("It is a vowel"); break;
        default: console.log("It is a consonant"); break;
    }
}

//LOOPS
function triangle(){
    for(i = 0; i <= 10; i++){
        console.log('*'.repeat(i));
    }
    for(i = 9; i < 10; i--){
        if(i<=0) break;
        console.log('*'.repeat(i));
    }
}