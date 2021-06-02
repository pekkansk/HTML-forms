//Tasks
//Käyttöliittymä
//  Otsikot ✓
//  Inputit ✓
//  Outputit
//  Salaus valikointi ✓
//  Key input ✓
//  Salaa napit ✓
//Salaus
let decrypterKeyBoxCounter = ""
let encrypterKeyBoxCounter = ""
let decryptionMethod = document.getElementById("decryptionMethod");   
let encryptionMethod = document.getElementById("encryptionMethod");
document.addEventListener("DOMContentLoaded",()=> {
    Titles();
    CrypterTexts();
    InputBoxes();
    CryptionMethod();
})



function Titles(){
    let encrypterFormTitle = "Bad Encrypter";
    let decrypterFormTitle = "Bad Decrypter";
    let badEncrypter = document.getElementById("topTitle");
    badEncrypter.innerHTML = encrypterFormTitle;

    let badDecrypter = document.getElementById("lowerTitle");
    badDecrypter.innerHTML = decrypterFormTitle;
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
            encrypterKeyBox.addEventListener("input", updateKeyInput);
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
            decrypterKeyBox.addEventListener("input", updateKeyInput);   
            decrypterKeyBoxCounter = 1
            
        }
    }
}
decryptionMethod.addEventListener("change",CryptionMethod)
encryptionMethod.addEventListener("change",CryptionMethod)
   
  
function updateKeyInput(){
    console.log("juu")
}
function encryption() {
    var encrypterInputBox = document.getElementById("encrypterInputBox").value;
    document.getElementById("encryptedOutput").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + encrypterInputBox;
}
function decryption() {
    var decrypterInputBox = document.getElementById("decrypterInputBox").value;
    document.getElementById("decryptedOutput").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + decrypterInputBox;
}