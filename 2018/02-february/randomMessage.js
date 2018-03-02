var randomMessage = function() {

    var number = Math.trunc((Math.random() * 5) + 1);

    switch(number){
        case 1: console.log("A friend is someone who knows all about you and still loves you.\nElbert Hubbard"); break;
        case 2: console.log("Don't cry because it's over, smile because it happened.\nDr.Seuss"); break;
        case 3: console.log("A room without books is like a body without a soul.\nMarcus Tullius Cicero"); break;
        case 4: console.log("Be the change that you wish to see in the world.\nMahatma Gandhi"); break;
        case 5: console.log("If you tell the truth, you don't have to remember anything.\nMark Twain"); break;
        default: "Erro"; break;
    }
}