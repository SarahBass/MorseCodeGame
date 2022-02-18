/*
----------------------------------------------
 *  Project:    Morse Code Game
 *  Mail:       darahbass@gmail.com
 *  Github:     SarahBass
 ---------------------------------------------
 NOTES: 
 All art created by nyself using Vectornator
 ---------------------------------------------
*/

/*--- Import Information from user Account ---*/
import { settingsStorage } from "settings";
import * as document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import { battery } from 'power';
import { display } from "display";
import { today as userActivity } from "user-activity";
import { vibration } from "haptics";

/*--- Create Local Variables for Information Storage ---*/
var delayInMilliseconds = 100; //1 second
let buttonnumber = 0;
let gamenumber = 0;
let gamestart = 0;
let morsecode = "";
let morse = "";
let letter = "a";
let letternumber = "1";
/*--- Import Information from index.gui ---*/
const myAnimation = document.getElementById("myAnimation");
myAnimation.animate("enable");
const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
let background = document.getElementById("background");
background.image = "background/background";
let menu = document.getElementById("menu");
let cuteobject = document.getElementById("cuteobject");
var demoinstance = document.getElementById("demoinstance");
cuteobject.image = "blank.png";
// Get a handle on the <text> elements 
const batteryLabel = document.getElementById("batteryLabel");
const morseLabel = document.getElementById("morseLabel");
const userinputLabel = document.getElementById("userinputLabel");
const wordLabel = document.getElementById("wordLabel");
/*--- Update Stats for Screen ---*/
checkAndUpdateBatteryLevel();
/*--- Battery Display---*/
display.addEventListener('change', function () { if (this.on) {checkAndUpdateBatteryLevel();}                             
/*--- Button Click Starts Game ---*/                                             
 menubutton.onactivate = function(evt) {
   cuteobject.image = "blank.png";
   buttonnumber++;
   gamenumber++;
  if (buttonnumber > 1){
    buttonnumber = 0;}
  console.log("button number :" + buttonnumber); 
 }
/*--- turn on and off start text ---*/  
   //play float animation                                               
  userinputLabel.text = "get started!";
  setTimeout(function() {wordLabel.text = "press";}, delayInMilliseconds*10);
  setTimeout(function() {wordLabel.text = "button";}, delayInMilliseconds*10);
  setTimeout(function() {wordLabel.text = "to";}, delayInMilliseconds*10);
  setTimeout(function() {wordLabel.text = "start!";}, delayInMilliseconds*10);                                             

  if ((gamenumber > 0)&&(gamestart == 0)){
  //play wag animation  
  setTimeout(function() {wordLabel.text = "Watch";
                         menu.image = "background/purple.png";}, delayInMilliseconds*10);                      
  setTimeout(function() {wordLabel.text = "the";
                         menu.image = "background/purple.png";}, delayInMilliseconds*10);
  setTimeout(function() {wordLabel.text = "pattern";
                         menu.image = "background/purple.png";}, delayInMilliseconds*10);
  setTimeout(function() {letter = generateRandomLetter();
                          wordLabel.text = letter;
                          letternumber = letter.charCodeAt(0) - 97; 
                          morsecode = createcode(letter);
                          userinputLabel.text = morsecode;
                          flashletter(letter);}, delayInMilliseconds*10);
  setTimeout(function() {
                          wordLabel.text = filewords[letternumber];
                          morsecode = createcode(letter);
                          cuteobject.image = "object/"+ letter + 1 +".png";
                          userinputLabel.text = morsecode;
                          flashletter(letter);}, delayInMilliseconds*10);
  gamestart++;
  cuteobject.image = "blank.png;
  }
                                                
   if ((gamenumber > 0)&&(gamestart == 1)){
      //play run animation 
       setTimeout(function() {wordLabel.text = "ready?";
                         menu.image = "background/purple.png";}, delayInMilliseconds*5);
                         
  setTimeout(function() {wordLabel.text = "get set";
                         menu.image = "background/yellow.png";}, delayInMilliseconds*5);
  setTimeout(function() {wordLabel.text = "go!";
                         menu.image = "background/purple.png";}, delayInMilliseconds*5);
     cuteobject.image = blank.png; 
     for(let i = 0; i < createcode(letter).length; i++){morse = play();}
     
     if (morse == morsecode){
     setTimeout(function() {wordLabel.text = "correct!";
                             cuteobject.image = right.png;
                         menu.image = "background/purple.png";}, delayInMilliseconds*10); }
     if (morse !== morsecode){
     setTimeout(function() {wordLabel.text = "wrong!";
                         cuteobject.image = wrong.png;   
                         menu.image = "background/purple.png";}, delayInMilliseconds*10); }
     
    gamestart++;
   }
   
                                                
if ((gamenumber > 0)&&(gamestart == 2)){
  //play float animation      
  cuteobject.image = "blank.png";
 setTimeout(function() {wordLabel.text = "round 2:"";
                         menu.image = "background/purple.png";}, delayInMilliseconds*5);
                         
  setTimeout(function() {wordLabel.text = "letter";
                         menu.image = "background/yellow.png";}, delayInMilliseconds*5);
  setTimeout(function() {wordLabel.text = letter;
                         menu.image = "background/purple.png";}, delayInMilliseconds*5);
  setTimeout(function() { wordLabel.text = filewords2[letternumber];
                          cuteobject.image = "object/"+ letter + 2 +".png";
                          flashletter(letter);}, delayInMilliseconds*10);
     cuteobject.image = blank.png;                   
     for(let i = 0; i < createcode(letter).length; i++){morse = play();}
    
     if (morse == morsecode){
     setTimeout(function() {wordLabel.text = "correct!";
                             cuteobject.image = right.png;
                         menu.image = "background/purple.png";}, delayInMilliseconds*10); }
     if (morse !== morsecode){
     setTimeout(function() {wordLabel.text = "wrong!";
                         cuteobject.image = wrong.png;   
                         menu.image = "background/purple.png";}, delayInMilliseconds*10); }
     
gamestart++;
}
                                                
if ((gamenumber > 0)&&(gamestart == 3)){
  //play sleep animation
   cuteobject.image = blank.png;
  menu.image = "background/purple.png";
   setTimeout(function() {wordLabel.text = "game";}, delayInMilliseconds*10); 
   setTimeout(function() {wordLabel.text = "over";}, delayInMilliseconds*10); 
  setTimeout(function() {wordLabel.text = "restart";}, delayInMilliseconds*10); 
  setTimeout(function() {wordLabel.text = "to";}, delayInMilliseconds*10); 
  setTimeout(function() {wordLabel.text = "play";}, delayInMilliseconds*10); 
  
}
   
  
 
  


  
/*----------------------------START OF FUNCTIONS--------------------------------*/

 /*--- Change Battery RED , GREEN & CHARGE ---*/  

function checkAndUpdateBatteryLevel() {
  batteryLabel.text = `${battery.chargeLevel}%`;
  if (battery.chargeLevel > 30){ batteryLabel.class = "labelgreen";}
  else {batteryLabel.class = "labelred";
        battery.onchange = (charger, evt) => {batteryLabel.class = "labelgreen";}}
}
 
function generateRandomLetter() {
  let newletter = "a";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  newletter = alphabet[Math.floor(Math.random() * alphabet.length)];
  return newletter;
}
const filewords = [                                                
"ate",
"bird",
"clover",
"donut",
"exercise",
"fall",
"guitar",
"hat",
"ice",
"jerky",
"king",
"linen",
"movie",
"nice",
"owl",
"pretzel",
"quirky",
"read",
"spider",
"tennis",
"until",
"velvet",
"witch",
"xy",
"yum",
"zany",
       
];

const filewords2 = [                                                
"apple",
"bat",
"candy",
"dreidel",
"egg",
"food",
"ghost",
"honey",
"In-n-Out",
"jumbo",
"kabob",
"lucky",
"mouse",
"neat",
"orange",
"popcorn",
"queen",
"reindeer",
"squirrel",
"tooth",
"under",
"violet",
"wreath",
"xx",
"yellow",
"zzz"         
];
                                                
 function createcode(letter){
   let code = ".-";
   if (letter == a) {code = ".-";}
   if (letter == b) {code = "-...";}
   if (letter == c) {code = "-.-.";}
   if (letter == d) {code = "-..";}
   if (letter == e) {code = ".";}
   if (letter == f) {code = "..-.";}
   if (letter == g) {code = "--.";}
   if (letter == h) {code = "....";}
   if (letter == i) {code = "..";}
   if (letter == j) {code = ".---";}
   if (letter == k) {code = "-.-";}
   if (letter == l) {code = ".-..";}
   if (letter == m) {code = "--";}
   if (letter == n) {code = "-.";}
   if (letter == o) {code = "---";}
   if (letter == p) {code = ".--.";}
   if (letter == q) {code = "--.-";}
   if (letter == r) {code = ".-.";}
   if (letter == s) {code = "...";}
   if (letter == t) {code = "-";}
   if (letter == u) {code = "..-";}
   if (letter == v) {code = "...-";}
   if (letter == w) {code = ".--";}
   if (letter == x) {code = "-..-";}
   if (letter == y) {code = "-.--";}
   if (letter == z) {code = "--..";}
 return code;
 }                                               
 
 function flashletter(letter){
   let codeflash = createcode(letter);
   Array.from(codeflash);
    setTimeout(function() {wordLabel.text = " ";
                         menu.image = "background/purple.png";}, delayInMilliseconds*5);         
   for (let i = 0; i < Array.length; i++) {
   if Array[i] == "-"{ 
                         setTimeout(function() {wordLabel.text = "-";
                         menu.image = "background/yellow.png";}, delayInMilliseconds*10);}
   if Array[i] == "."{ 
                         setTimeout(function() {wordLabel.text = "Watch";
                         menu.image = "background/yellow.png";}, delayInMilliseconds)*5;}
   setTimeout(function() {wordLabel.text = " ";
                         menu.image = "background/purple.png";}, delayInMilliseconds*5);          
   }
   
 }                                             
                                                
 function play(){
  
    button1.class = "clear text-button bottom left "; 
    button2.class = "clear text-button bottom right "; 
    button1.text = "-"; 
    button2.text = "."; 
   
    button1.onactivate = function(evt) {
                                       vibration.start("nudge");
                                       morse = +="-";
                                       console.log("morse:" + morse );}
    button2.onactivate = function(evt) {vibration.start("bump");
                                            morse = +=".";
                                       console.log("morse:" + morse ); }
   
 return morse;
 }                                           
                                                
/*----------------------------END OF FUNCTIONS--------------------------------*/
/*-------------------------------END OF CODE----------------------------------*/
