//Tasks
//Käyttöliittymä
//  Otsikot ✓
//  Inputit ✓
//  Outputit ✓
//  Salaus valikointi ✓
//  Key input ✓
//  Salaa napit ✓

//Salaus
//  muunnetaan annettu string lowercase ✓
// tehdään kirjain array ✓
// loopataan annetun sanan pituudelta ✓
//  etsitääm sanan kirjainta vastaava indexi taulukosta
//  lisätään key indexiin
//  jos indexi +  key on > array lenght tai < kuin array lenght korjataan takaisin scopeem
//  jos ei, lisätään uutta indexiä vastaava kirjain returniin
let decrypterKeyBoxCounter = ""
let encrypterKeyBoxCounter = ""
let decryptionMethod = document.getElementById("decryptionMethod");   
let encryptionMethod = document.getElementById("encryptionMethod");    
let encrypterFormTitle = "Bad Encrypter";
let decrypterFormTitle = "Bad Decrypter";
let encryptButton = document.getElementById("encryptButton")
encryptButton.addEventListener("click",runEncryptCeasarSalad)
let decryptButton = document.getElementById("decryptButton")
decryptButton.addEventListener("click",runDecryptCeasarSalad)

document.addEventListener("DOMContentLoaded",()=> {
    encryptionTitle(encrypterFormTitle);
    decryptionTitle(decrypterFormTitle);
    CrypterTexts();
    CryptionMethod();
})



function encryptionTitle(title){
    let badEncrypter = document.getElementById("topTitle");
    badEncrypter.innerHTML = title;
}
function decryptionTitle(title){
    let badDecrypter = document.getElementById("lowerTitle");
    badDecrypter.innerHTML = title;
}
function CrypterTexts(){
    let encrypterInfoText = "Input";
    let decrypterInfoText = "Input";

    let badEncrypterInfo = document.getElementById("encrypterBoxinfo");
    badEncrypterInfo.innerHTML = encrypterInfoText;
    let badDecrypterInfo = document.getElementById("decrypterBoxinfo");
    badDecrypterInfo.innerHTML = decrypterInfoText;
}
function encrypterKeyTexts(){
    let encrypterKeyTexts = "Key";
    let encrypterKeyInfo = document.getElementById("encrypterKeyText");
    encrypterKeyInfo.innerHTML = encrypterKeyTexts;

}
function decrypterKeyTexts(){
    let decrypterKeyTexts = "Key";

    let decrypterKeyInfo = document.getElementById("decrypterKeyText");
    decrypterKeyInfo.innerHTML = decrypterKeyTexts;
}

function CryptionMethod(){
    let encryptionMethods = {
        SHA: "SHA",
        Ceasar: "Ceasar"
    };   
    let decryptionMethods = {
        SHA: "SHA",
        Ceasar: "Ceasar"
        
        };     
    let decrypterFormElement = document.getElementById("decrypterFormElement");
    let encrypterFormElement = document.getElementById("encrypterFormElement");

    let selectedEncryptionMethod = encryptionMethod.selectedIndex;
    let td = document.createElement("td");
    let tg = document.createElement("td");
    if(encrypterKeyBoxCounter == 1) {
        let encrypterFormElement = document.getElementById("encrypterFormElement");
        encrypterFormElement.innerHTML = '<td id = "encrypterKeyText"></td>';
        encrypterKeyBoxCounter = 0;
    }
    if(encrypterKeyBoxCounter == 0) {
        if(encryptionMethod.options[selectedEncryptionMethod].text === encryptionMethods.Ceasar) {
            encrypterKeyTexts();
            tg.innerHTML = "<input id='encrypterKeyBox' type='number' name='fname'><br>";
            encrypterFormElement.appendChild(tg);
            var encrypterKeyBox = document.getElementById("encrypterKeyBox");
            //encrypterKeyBox.addEventListener("input", updateKeyInput);
            encrypterKeyBoxCounter = 1;
        }
    }
    let selectedDecryptionMethod = decryptionMethod.selectedIndex;
    if(decrypterKeyBoxCounter == 1 ) {
        let decrypterFormElement = document.getElementById("decrypterFormElement");
        decrypterFormElement.innerHTML = "<td id = 'decrypterKeyText'></td>"
        decrypterKeyBoxCounter = 0
    }
    if(decrypterKeyBoxCounter == 0 ) {
        if(decryptionMethod.options[selectedDecryptionMethod].text === decryptionMethods.Ceasar) {
            decrypterKeyTexts()
            td.innerHTML = "<input id='decrypterKeyBox' type='number' name='fname'><br>"
            decrypterFormElement.appendChild(td)
            var decrypterKeyBox = document.getElementById("decrypterKeyBox");
            //decrypterKeyBox.addEventListener("input", updateKeyInput);   
            decrypterKeyBoxCounter = 1
            
        }
    }
}
decryptionMethod.addEventListener("change",CryptionMethod)
encryptionMethod.addEventListener("change",CryptionMethod)

function runEncryptCeasarSalad() {
    let encrypterInputBox = document.getElementById("encrypterInputBox").value.toLowerCase();
    ceasarEncryption(encrypterInputBox,encrypterKeyBox.value)
}
function ceasarEncryption(Input, Key) {
    let completeWord = "";
    Input = Input.replace(/\u00E5/g, '1');
    Input = Input.replace(/\u00e4/g, '2');
    Input = Input.replace(/\u00f6/g, '3');
    let letterArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1", "2", "3"];
    for(i = 0; i < Input.length; i++) {
            let letterIndex = letterArray.indexOf(Input[i]);
            let newIndex =letterIndex + parseInt(Key);
            let newWord = "";
            if(newIndex > (letterArray.length-1)) {
                newIndex = newIndex - letterArray.length;
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
    encryptedOutput(completeWord)
}     
function encryptedOutput(cryptedWord) {
    document.getElementById("encryptedOutput").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + cryptedWord;
    encryptionTitle("The Best Encrypter")
}
function runDecryptCeasarSalad() {
    let decrypterInputBox = document.getElementById("decrypterInputBox").value.toLowerCase();
    ceasardDecryption(decrypterInputBox,decrypterKeyBox.value)
}
function ceasardDecryption(Input, Key) {
    let completeWord = "";
    Input = Input.replace(/\u00E5/g, '1');
    Input = Input.replace(/\u00e4/g, '2');
    Input = Input.replace(/\u00f6/g, '3');
    let letterArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1", "2", "3"];
    for(i = 0; i < Input.length; i++) {
            let letterIndex = letterArray.indexOf(Input[i]);
            let newIndex =letterIndex - parseInt(Key);
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
    decryptedOutput(completeWord)
}   
function decryptedOutput(decryptedword) {
    document.getElementById("decryptedOutput").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + decryptedword;
    decryptionTitle("The Best Decrypter")
}  
