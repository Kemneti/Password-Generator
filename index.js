const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const firstPassword = document.getElementById("first-password");
const secondPassword = document.getElementById("second-password")
let text = ""
let secondText = ""
function secondPass () {
for (let i = 0; i < characters.length; i++) {
    while (secondText.length < 13){
   secondText += characters[Math.floor(Math.random() * characters.length)];
   secondPassword.textContent = secondText;
        }
    }
}
function firstPass () {
for (let i = 0; i < characters.length; i++) {
    while (text.length < 13){
   text += characters[Math.floor(Math.random() * characters.length)];
   firstPassword.textContent = text;
   /*secondPass ()*/
        }
    }
}
function pass () {
  firstPass ()
  secondPass ()
}









