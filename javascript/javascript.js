//Tasks
//Käyttöliittymä
//  Otsikot ✓
//  Inputit ✓
//  Outputit ✓
//  Salaus valikointi ✓
//  Key input ✓
//  Salaa napit 
//standardi
//options
// salaukset omaan tiedostoon
// Ez muokkaus

//Salaus
//  muunnetaan annettu string lowercase ✓
// tehdään kirjain array ✓
// loopataan annetun sanan pituudelta ✓
//  etsitääm sanan kirjainta vastaava indexi taulukosta
//  lisätään key indexiin
//  jos indexi +  key on > array lenght tai < kuin array lenght korjataan takaisin scopeem
//  jos ei, lisätään uutta indexiä vastaava kirjain returniin
var decrypterKeyBoxCounter = "";
var encrypterKeyBoxCounter = "";

var decryptionMethod = document.getElementById("decryptionMethod");   
var encryptionMethod = document.getElementById("encryptionMethod");  

var encrypterFormTitle = "Bad Encrypter";
var decrypterFormTitle = "Bad Decrypter";

var encryptButton = document.getElementById("encryptButton");
var decryptButton = document.getElementById("decryptButton");

var algorithms = ["String Reverse","Ceasar","Dummy"];
var algorithmsWithKey = ["Ceasar","Dummy"];
var encryptionFunctions = [stringReverseEncryption,ceasarEncryption,dummyEncryption];
var decryptionFunctions = [stringReverseDecryption,ceasarDecryption,dummyDecryption];

var decryptionMethod = document.getElementById("decryptionMethod");
var encryptionMethod = document.getElementById("encryptionMethod");
decryptionMethod.addEventListener("change",cryptionMethod);
encryptionMethod.addEventListener("change",cryptionMethod);


document.addEventListener("DOMContentLoaded",()=> {
    encryptionTitle(encrypterFormTitle);
    decryptionTitle(decrypterFormTitle);
    encryptioOptions();
    decryptioOptions();
    crypterTexts();
    cryptionMethod();
})
encryptButton.addEventListener("click",()=> {
    let encryptionIndex = algorithms.indexOf(encryptionMethod.value);
    encryptFunction = encryptionFunctions[encryptionIndex];
    let getInputBoxvalue = getEncrypterInput();
    for(o = 0; o < algorithmsWithKey.length; o++){
        if(algorithmsWithKey[o] == encryptionMethod.value) {
            let getKeyBoxValue = getEncrypterKey();
            let cryptedWord = encryptFunction(getInputBoxvalue,getKeyBoxValue);
            encryptedOutput(cryptedWord);
            break;
        }
        else if(algorithmsWithKey[o] != decryptionMethod.value){
            let cryptedWord = encryptFunction(getInputBoxvalue);
            encryptedOutput(cryptedWord);
            break;
        }
    }  
})
decryptButton.addEventListener("click",()=> {
    let decryptionIndex = algorithms.indexOf(decryptionMethod.value);
    decryptFunction = decryptionFunctions[decryptionIndex];
    let getInputBoxvalue = getDecrypterInput();
    for(o = 0; o < algorithmsWithKey.length; o++){
        if(algorithmsWithKey[o] == decryptionMethod.value) {
            let getKeyBoxValue = getDecrypterKey();
            let decryptedword = decryptFunction(getInputBoxvalue,getKeyBoxValue);
            decryptedOutput(decryptedword);
            break;
        }
        else if(algorithmsWithKey[o] != decryptionMethod.value){
            let decryptedword = decryptFunction(getInputBoxvalue);
            decryptedOutput(decryptedword);
            break;
        }
    }    

})
function encryptioOptions() {
    for(j = 0; j < algorithms.length; j++) {
        let option = document.createElement("option");
        option.value = algorithms[j];
        option.textContent = algorithms[j];
        encryptionMethod.appendChild(option);
    }
}
function decryptioOptions() {
    for(j = 0; j < algorithms.length; j++) {
        let option = document.createElement("option");
        option.value = algorithms[j];
        option.textContent = algorithms[j];
        decryptionMethod.appendChild(option); 
    }     
}
function encryptionTitle(title){
    let badEncrypter = document.getElementById("topTitle");
    badEncrypter.innerHTML = title;
}
function decryptionTitle(title){
    let badDecrypter = document.getElementById("lowerTitle");
    badDecrypter.innerHTML = title;
}
function crypterTexts(){
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

function cryptionMethod() {

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
        for(o = 0; o < algorithmsWithKey.length; o++){
            if(encryptionMethod.options[selectedEncryptionMethod].text == algorithmsWithKey[o]) {
                encrypterKeyTexts();
                tg.innerHTML = "<input id='encrypterKeyBox' type='number' name='fname'><br>";
                encrypterFormElement.appendChild(tg);
                encrypterKeyBoxCounter = 1;
            }
        }
    }
    let selectedDecryptionMethod = decryptionMethod.selectedIndex;
    if(decrypterKeyBoxCounter == 1 ) {
        let decrypterFormElement = document.getElementById("decrypterFormElement");
        decrypterFormElement.innerHTML = "<td id = 'decrypterKeyText'></td>";
        decrypterKeyBoxCounter = 0;
    }
    if(decrypterKeyBoxCounter == 0 ) {
        for(o = 0; o < algorithmsWithKey.length; o++){
            if(decryptionMethod.options[selectedDecryptionMethod].text == algorithmsWithKey[o]) {
                decrypterKeyTexts();
                td.innerHTML = "<input id='decrypterKeyBox' type='number' name='fname'><br>";
                decrypterFormElement.appendChild(td);
                var decrypterKeyBox = document.getElementById("decrypterKeyBox"); 
                decrypterKeyBoxCounter = 1;
            }
        }
    }
}


function getEncrypterInput() {
    let encrypterInputBox = document.getElementById("encrypterInputBox").value;
    return encrypterInputBox;
}
function getEncrypterKey() {
    var encrypterKeyBox = document.getElementById("encrypterKeyBox").value;
    return encrypterKeyBox;
}
function getDecrypterInput() {
    let decrypterInputBox = document.getElementById("decrypterInputBox").value;
    return decrypterInputBox;
}
function getDecrypterKey() {
    var decrypterKeyBox = document.getElementById("decrypterKeyBox").value;
    return decrypterKeyBox;
}
  
  
function encryptedOutput(cryptedWord) {
    document.getElementById("encryptedOutput").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + cryptedWord;
    encryptionTitle("The Best Encrypter");
}

function decryptedOutput(decryptedword) {
    document.getElementById("decryptedOutput").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + decryptedword;
    decryptionTitle("The Best Decrypter");
}  
