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
// salaukset omaan kansioon
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
decryptButton.addEventListener("click",runDecryptCeasarSalad);
var algorithms = ["String Reverse","Ceasar",];
var encryptionFunctions = [stringReverseEncryption,ceasarEncryption];
//var decryptionFunctions = [stringReverseDecryption,ceasarDecryption];
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

function encryptioOptions() {
    for(j = 0; j < algorithms.length; j++) {
        let option = document.createElement("option");
        option.innerHTML = "<option value=>" + algorithms[j] + "</option>";
        encryptionMethod.appendChild(option);
    }
}
function decryptioOptions() {
    for(j = 0; j < algorithms.length; j++) {
        let option = document.createElement("option");
        option.innerHTML = "<option value=>" + algorithms[j] + "</option>";
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
    encryptButton.addEventListener("click",()=> {
        let encryptionIndex = algorithms.indexOf(encryptionMethod.value)
        console.log(encryptionIndex);
        encryptFunction = encryptionFunctions[encryptionIndex];
        let encrypterInputBox = document.getElementById("encrypterInputBox");
        let getInputBoxvalue = getInput();
        getKeyBoxValue =  ""
        if(encryptionIndex === 1) {
            let getKeyBoxValue = getKey();
        }
        var cryptedWord = encryptFunction(getInputBoxvalue,getKeyBoxValue)
        encryptedOutput(cryptedWord)
    })
    
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
        if(encryptionMethod.options[selectedEncryptionMethod].text === algorithms[1]) {
            encrypterKeyTexts();
            tg.innerHTML = "<input id='encrypterKeyBox' type='number' name='fname'><br>";
            encrypterFormElement.appendChild(tg);
            encrypterKeyBoxCounter = 1;
        }
    }
    let selectedDecryptionMethod = decryptionMethod.selectedIndex;
    if(decrypterKeyBoxCounter == 1 ) {
        let decrypterFormElement = document.getElementById("decrypterFormElement");
        decrypterFormElement.innerHTML = "<td id = 'decrypterKeyText'></td>";
        decrypterKeyBoxCounter = 0;
    }
    if(decrypterKeyBoxCounter == 0 ) {
        if(decryptionMethod.options[selectedDecryptionMethod].text === algorithms[1]) {
            decrypterKeyTexts()
            td.innerHTML = "<input id='decrypterKeyBox' type='number' name='fname'><br>";
            decrypterFormElement.appendChild(td);
            var decrypterKeyBox = document.getElementById("decrypterKeyBox"); 
            decrypterKeyBoxCounter = 1
            
        }
    }
}


function getInput() {
    let encrypterInputBox = document.getElementById("encrypterInputBox").value;
    return encrypterInputBox;
}
function getKey() {
    var encrypterKeyBox = document.getElementById("encrypterKeyBox").value;
    return encrypterKeyBox;
}
  
function encryptedOutput(cryptedWord) {
    document.getElementById("encryptedOutput").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + cryptedWord;
    encryptionTitle("The Best Encrypter")
}
function runDecryptCeasarSalad() {
    let decrypterInputBox = document.getElementById("decrypterInputBox").value.toLowerCase();
    let decryptedData = ceasardDecryption(decrypterInputBox,decrypterKeyBox.value);
    decryptedOutput(decryptedData);
}

function decryptedOutput(decryptedword) {
    document.getElementById("decryptedOutput").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + decryptedword;
    decryptionTitle("The Best Decrypter")
}  
