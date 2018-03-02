var lettersMissing = function(phrase){

    phrase = phrase.toLowerCase();
    var alphabet = "abcdefghijklmnopqrstuvxwyz".split("");
   
    for (var i = 0; i < phrase.length; i++){

        index = alphabet.indexOf(phrase[i]);
        alphabet.splice(index, 1, "")[i];
    }
    console.log(alphabet);
}