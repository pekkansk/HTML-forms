function ceasarDecryption(input, key) {
    let completeWord = "";
    input = input.replace(/\u00E5/g, '1');
    input = input.replace(/\u00e4/g, '2');
    input = input.replace(/\u00f6/g, '3');
    let letterArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1", "2", "3"];
    for(i = 0; i < input.length; i++) {
        if(parseInt(key) > letterArray.length) {
            key = parseInt(key) % letterArray.length;
        }
        let letterIndex = letterArray.indexOf(input[i]);
        let newIndex =letterIndex - parseInt(key);
        let newWord = "";
        if(newIndex > (letterArray.length-1)) {
            newIndex = newIndex + letterArray.length;
            newWord = letterArray[newIndex];
        }
        else if(newIndex < 0) {
            newIndex = newIndex + letterArray.length;
            newWord = letterArray[newIndex];
        }
        else{
            newWord = letterArray[newIndex];
        }
        newWord = newWord.replace(/1/g, '\u00E5');
        newWord = newWord.replace(/2/g, '\u00e4');
        newWord = newWord.replace(/3/g, '\u00f6');
        completeWord = completeWord + newWord;
    }      
    return completeWord;
}   