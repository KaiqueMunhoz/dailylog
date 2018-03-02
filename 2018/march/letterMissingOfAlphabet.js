function lettersMissing(text) {

    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','w','y','z'];
    text = text.toLowerCase();
    var missing = [];

    for(let letter of alphabet){
        if(text.indexOf(letter) === -1) {
            missing.push(letter);
        }
    }
    return missing;
}