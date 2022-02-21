/*
----------------------------------------------
 *  Project:    Morse Code Game
 *  Mail:       darahbass@gmail.com
 *  Github:     SarahBass
 ---------------------------------------------
 NOTES: 
 All art created by myself using Vectornator
 ---------------------------------------------
*/

/*--- Import Information from user Account ---*/
import { settingsStorage } from "settings";
import { me as appbit } from "appbit";
import { HeartRateSensor } from "heart-rate";
import clock from "clock";
import * as document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import { battery } from 'power';
import { display } from "display";
import { today as userActivity } from "user-activity";
import {goals, today} from "user-activity";
import { units } from "user-settings";
import { vibration } from "haptics";
/*--- Create Local Variables for Information Storage ---*/
var delayInMilliseconds = 100; //1 second
let buttonnumber = 0;
let scopenumber = 0;
let gamenumber = 0;
let gamestart = 0;
let scopenumber = 0;
let morsecode = "-.";
let morse = "";
let letter = "a";
let randomnumber = 1;
//letter = alphabet[randomnumber];
const alphabet = ['a',"b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let letternumber = 0;
const mArray = ["-", "."];
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
/*--- Import Information from index.gui ---*/
const myAnimation = document.getElementById("myAnimation");

const menubutton = document.getElementById("menubutton");
const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
let background = document.getElementById("background");
background.image = "background/background.jpeg";
let menu = document.getElementById("menu");
menu.image = "background/purple.png";
let cuteobject = document.getElementById("cuteobject");
var demoinstance = document.getElementById("demoinstance");
cuteobject.image = "blank.png";
// Get a handle on the <text> elements 
const batteryLabel = document.getElementById("batteryLabel");
const morseLabel = document.getElementById("morseLabel");
const userinputLabel = document.getElementById("userinputLabel");
const wordLabel = document.getElementById("wordLabel");



//Update the clock every second 
clock.granularity = "seconds";

clock.ontick = (evt) => {

  let today = evt.date;
  let hours = today.getHours();
  let months = today.getMonth();
  let days = today.getDay();
  let dates = today.getDate();
  let years = today.getFullYear();
  let mins = util.zeroPad(today.getMinutes());
  let seconds = today.getSeconds();
  myAnimation.animate("enable");
/*--- Update Stats for Screen ---*/
checkAndUpdateBatteryLevel();
  
  if (gamenumber == 0){
  userinputLabel.text = "get started!";
    if (seconds%2 == 0){wordLabel.text = "press";}
    else{wordLabel.text = "button";}
    menubutton.onactivate = function(evt) {
   cuteobject.image = "blank.png";
   buttonnumber++;
   gamenumber++;
  console.log("button number :" + buttonnumber); 
   console.log("game number :" + gamenumber); 
 }                   
  }
  

  
  if (gamenumber ==1){ 
    userinputLabel.text = morsecode;
     menubutton.onactivate = function(evt) {
   cuteobject.image = "blank.png";
   buttonnumber++;
   gamenumber++;
  console.log("button number :" + buttonnumber); 
   console.log("game number :" + gamenumber); 
 }                   
    
   if (seconds%6 == 0) {  vibration.start("ring"); 
   if (mArray[0] == "-"){ menu.image = "background/yellow.png";
                         wordLabel.text = filewords[letternumber];
                         cuteobject.image = "object/"+ letter + 1 +".png";}
   if (mArray[0] == "."){ menu.image = "background/yellow.png";
                         wordLabel.text = filewords[letternumber];
                         cuteobject.image = "object/"+ letter + 1 +".png";}} 
   if (seconds%6 == 1) { 
     if (mArray[0] == "-"){ menu.image = "background/yellow.png";
                           cuteobject.image = "object/"+ letter + 1 +".png";}
   if (mArray[0] == "."){ menu.image = "background/purple.png";
                         vibration.stop();
                        wordLabel.text = letter;
                         cuteobject.image = "blank.png";} }
    
   if (seconds%6 == 2) { vibration.stop();
                       menu.image = "background/purple.png";
                       wordLabel.text = letter;
                        cuteobject.image = "blank.png";}
   
    if (seconds%6 == 3) {   vibration.start("ring"); 
    if (mArray[1] == "-"){ menu.image = "background/yellow.png";
                          wordLabel.text = filewords[letternumber];
                          cuteobject.image = "object/"+ letter + 1 +".png";}
   if (mArray[1] == "."){  menu.image = "background/yellow.png";
                         wordLabel.text = filewords[letternumber];
                         cuteobject.image = "object/"+ letter + 1 +".png";}} 
   if (seconds%6 == 4) { 
     if (mArray[1] == "-"){ menu.image = "background/yellow.png";
                          wordLabel.text = filewords[letternumber];
                          cuteobject.image = "object/"+ letter + 1 +".png";}
   if (mArray[1] == "."){ menu.image = "background/purple.png";
                         vibration.stop();
                        wordLabel.text = letter;
                         cuteobject.image = "blank.png";} }
  
   if (seconds%6 == 5) {  menu.image = "background/purple.png";
                        vibration.stop();
                       wordLabel.text = letter;
                        cuteobject.image = "blank.png";}
  }
    
     if (gamenumber == 2){
       userinputLabel.text = " ";
        vibration.stop();
       cuteobject.image = "blank.png";
       menu.image = "blank.png";
       menubutton.onactivate = function(evt) {}
      if (seconds%2 == 0) {wordLabel.text = "enter";}
       else { wordLabel.text = letter;}
      
    button1.class = "clear text-button bottom left "; 
    button2.class = "clear text-button bottom right "; 
    button1.text = "-"; 
    button2.text = "."; 
   if (morse.length < 4){
    button1.onactivate = function(evt) {
                                       vibration.start("nudge");
                                       morse  += "-";
                                       console.log("morse:" + morse );
                                       morseLabel.text = "morse: " + morse; }
    button2.onactivate = function(evt) {vibration.start("bump");
                                            morse  +=".";
                                       console.log("morse:" + morse );
                                        morseLabel.text = "morse: " + morse;}
       if (morse == morsecode) {gamenumber++;}
   }else{gamenumber = 3;} 
   
     }
    
       if (gamenumber == 3){
         menu.image = "background/purple.png"
          menubutton.onactivate = function(evt) {
   cuteobject.image = "blank.png";
   buttonnumber++;
   gamenumber++;
  console.log("button number :" + buttonnumber); 
   console.log("game number :" + gamenumber); 
 }                   
         morseLabel.text = " ";
         button1.class = "none text-button bottom left "; 
    button2.class = "none text-button bottom right "; 
         button1.onactivate = function(evt) {}
          button2.onactivate = function(evt) {}
     if (morse == morsecode){
     wordLabel.text = "correct!";
      cuteobject.image = "right.png";}
     else{
       wordLabel.text = "wrong!";
     cuteobject.image = "wrong.png";}}
    
  
   if (gamenumber ==4){ 
      menubutton.onactivate = function(evt) {
   cuteobject.image = "blank.png";
   buttonnumber++;
   gamenumber++;
  console.log("button number :" + buttonnumber); 
   console.log("game number :" + gamenumber); 
 }                   
    userinputLabel.text = morsecode;
    morse = ""; 
   if (seconds%6 == 0) {  vibration.start("ring"); 
   if (mArray[0] == "-"){ menu.image = "background/yellow.png";
                         wordLabel.text = filewords2[letternumber];
                         cuteobject.image = "object/"+ letter + 2 +".png";}
   if (mArray[0] == "."){ menu.image = "background/yellow.png";
                         wordLabel.text = filewords2[letternumber];
                         cuteobject.image = "object/"+ letter + 2 +".png";}} 
   if (seconds%6 == 1) { 
     if (mArray[0] == "-"){ menu.image = "background/yellow.png";
                           cuteobject.image = "object/"+ letter + 2 +".png";}
   if (mArray[0] == "."){ menu.image = "background/purple.png";
                         vibration.stop();
                        wordLabel.text = letter;
                         cuteobject.image = "blank.png";} }
    
   if (seconds%6 == 2) { vibration.stop();
                       menu.image = "background/purple.png";
                       wordLabel.text = letter;
                        cuteobject.image = "blank.png";}
   
    if (seconds%6 == 3) {   vibration.start("ring"); 
    if (mArray[1] == "-"){ menu.image = "background/yellow.png";
                          wordLabel.text = filewords2[letternumber];
                          cuteobject.image = "object/"+ letter + 2 +".png";}
   if (mArray[1] == "."){  menu.image = "background/yellow.png";
                         wordLabel.text = filewords2[letternumber];
                         cuteobject.image = "object/"+ letter + 2 +".png";}} 
   if (seconds%6 == 4) { 
     if (mArray[1] == "-"){ menu.image = "background/yellow.png";
                          wordLabel.text = filewords2[letternumber];
                          cuteobject.image = "object/"+ letter + 2 +".png";}
   if (mArray[1] == "."){ menu.image = "background/purple.png";
                         vibration.stop();
                        wordLabel.text = letter;
                         cuteobject.image = "blank.png";} }
  
   if (seconds%6 == 5) {  menu.image = "background/purple.png";
                        vibration.stop();
                       wordLabel.text = letter;
                        cuteobject.image = "blank.png";}
  }
    
     if (gamenumber == 5){
       userinputLabel.text = " ";
        vibration.stop();
       cuteobject.image = "blank.png";
       menu.image = "blank.png";
       menubutton.onactivate = function(evt) {}
      if (seconds%2 == 0) {wordLabel.text = "enter";}
       else { wordLabel.text = letter;}
      
    button1.class = "clear text-button bottom left "; 
    button2.class = "clear text-button bottom right "; 
    button1.text = "-"; 
    button2.text = "."; 
   if (morse.length < 4){
    button1.onactivate = function(evt) {
                                       vibration.start("nudge");
                                       morse  += "-";
                                       console.log("morse:" + morse );
                                       morseLabel.text = "morse: " + morse; }
    button2.onactivate = function(evt) {vibration.start("bump");
                                            morse  +=".";
                                       console.log("morse:" + morse );
                                        morseLabel.text = "morse: " + morse;}
       if (morse == morsecode) {gamenumber++;}
   }else{gamenumber = 3;} 
   
     }
    
       if (gamenumber == 6){
         menu.image = "background/purple.png"
          menubutton.onactivate = function(evt) {
   cuteobject.image = "blank.png";
   buttonnumber++;
   gamenumber++;
  console.log("button number :" + buttonnumber); 
   console.log("game number :" + gamenumber); 
 }                   
         morseLabel.text = " ";
         button1.class = "none text-button bottom left "; 
    button2.class = "none text-button bottom right "; 
         button1.onactivate = function(evt) {}
          button2.onactivate = function(evt) {}
     if (morse == morsecode){
     wordLabel.text = "correct!";
      cuteobject.image = "right.png";}
     else{
       wordLabel.text = "wrong!";
     cuteobject.image = "wrong.png";}}
    
  
      
  if (gamenumber > 6){
    button1.onactivate = function(evt) {}
          button2.onactivate = function(evt) {}
     menu.image = "blank.png";
       menubutton.onactivate = function(evt) {}
    if (seconds%2 == 0){wordLabel.text = "game";
  userinputLabel.text = "lvl: " + letter+ " complete";}
    else{wordLabel.text = "over";
  userinputLabel.text = "exit to restart";}}
  
  
/*--- Battery Display---*/
  /*--- Battery Functions ---*/
  display.addEventListener('change', function () { if (this.on) {checkAndUpdateBatteryLevel();}});
}


/*--- turn on and off start text ---*/  
   //play float animation                                               
/*
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
       wordLabel.text = 'press';
    }, 1000);
});

p.then((result) => {
         
     setTimeout(() => {
        wordLabel.text = 'button';
    }, 1000);   
       
    
    return result* 4;
});
*/

  /*
  if (scopenumber == 0){ setTimeout(function() {wordLabel.text = 'press'; }, 1000);}
 
 if (scopenumber == 1){ setTimeout(function() {wordLabel.text = 'button'; scopenumber++; }, 1000);}

  if (scopenumber == 2){ setTimeout(function() {wordLabel.text = 'press'; scopenumber++;}, 1000);}
  
  if (scopenumber == 3){ setTimeout(function() { wordLabel.text = 'button'; scopenumber++;}, 1000);}
*/

   /*                  

  if ((gamenumber > 0)&&(gamestart == 0)){
  if (seconds%2 == 0){ wordLabel.text = letter;}
    else{wordLabel.text = filewords[letternumber];}
  
  setTimeout(() => {letter = generateRandomLetter();
                          wordLabel.text = letter;
                          letternumber = letter.charCodeAt(0) - 97; 
                          morsecode = createcode(letter);
                          userinputLabel.text = morsecode;
                          flashletter(letter);}, delayInMilliseconds*10);
 setTimeout(() => {
                          wordLabel.text = filewords[letternumber];
                          morsecode = createcode(letter);
                          cuteobject.image = "object/"+ letter + 1 +".png";
                          userinputLabel.text = morsecode;
                          flashletter(letter);}, delayInMilliseconds*10);
  gamestart++;
  cuteobject.image = "blank.png";
  }
                                                
   if ((gamenumber > 0)&&(gamestart == 1)){
      //play run animation 
       setTimeout(() => {wordLabel.text = "ready?";
                         menu.image = "background/purple.png";}, delayInMilliseconds*5);
                         
  setTimeout(() => {wordLabel.text = "get set";
                         menu.image = "background/yellow.png";}, delayInMilliseconds*5);
 setTimeout(() => {wordLabel.text = "go!";
                         menu.image = "background/purple.png";}, delayInMilliseconds*5);
     cuteobject.image = blank.png; 
     for(let i = 0; i < createcode(letter).length; i++){morse = play();}
     
     if (morse == morsecode){
     setTimeout(() => {wordLabel.text = "correct!";
                             cuteobject.image = right.png;
                         menu.image = "background/purple.png";}, delayInMilliseconds*10); }
     if (morse !== morsecode){
     setTimeout(() => {wordLabel.text = "wrong!";
                         cuteobject.image = wrong.png;   
                         menu.image = "background/purple.png";}, delayInMilliseconds*10); }
     
    gamestart++;
   }
   
                                                
if ((gamenumber > 0)&&(gamestart == 2)){
  //play float animation      
  cuteobject.image = "blank.png";
 setTimeout(() => {wordLabel.text = "round 2";
                         menu.image = "background/purple.png";}, delayInMilliseconds*5);
                         
  setTimeout(() => {wordLabel.text = "letter";
                         menu.image = "background/yellow.png";}, delayInMilliseconds*5);
 setTimeout(() => {wordLabel.text = letter;
                         menu.image = "background/purple.png";}, delayInMilliseconds*5);
  setTimeout(() => { wordLabel.text = filewords2[letternumber];
                          cuteobject.image = "object/"+ letter + 2 +".png";
                          flashletter(letter);}, delayInMilliseconds*10);
     cuteobject.image = blank.png;                   
     for(let i = 0; i < createcode(letter).length; i++){morse = play();}
    
     if (morse == morsecode){
     setTimeout(() => {wordLabel.text = "correct!";
                             cuteobject.image = right.png;
                         menu.image = "background/purple.png";}, delayInMilliseconds*10); }
     if (morse !== morsecode){
     setTimeout(() => {wordLabel.text = "wrong!";
                         cuteobject.image = wrong.png;   
                         menu.image = "background/purple.png";}, delayInMilliseconds*10); }
     
gamestart++;
}
                                                
if ((gamenumber > 0)&&(gamestart == 3)){
  //play sleep animation
   cuteobject.image = blank.png;
  menu.image = "background/purple.png";
   setTimeout(() => {wordLabel.text = "game";}, delayInMilliseconds*10); 
   setTimeout(() => {wordLabel.text = "over";}, delayInMilliseconds*10); 
  setTimeout(() => {wordLabel.text = "restart";}, delayInMilliseconds*10); 
  setTimeout(() => {wordLabel.text = "to";}, delayInMilliseconds*10); 
  setTimeout(() => {wordLabel.text = "play";}, delayInMilliseconds*10); 
  
}
   
  */
/*----------------------------START OF FUNCTIONS--------------------------------*/
                                                
 

 /*--- Change Battery RED , GREEN & CHARGE ---*/  

function checkAndUpdateBatteryLevel() {
  batteryLabel.text = `${battery.chargeLevel}%`;
  if (battery.chargeLevel > 30){ batteryLabel.class = "labelgreen";}
  else {batteryLabel.class = "labelred";
        battery.onchange = (charger, evt) => {batteryLabel.class = "labelgreen";}}
}
 

                                          
function createcode(letter){
  let codeflash = " ";
   if (letter == 'a') {codeflash = ".-";}
   if (letter == 'b') {codeflash = "-...";}
   if (letter == 'c') {codeflash = "-.-.";}
   if (letter == 'd') {codeflash = "-..";}
   if (letter == 'e') {codeflash = ".";}
   if (letter == 'f') {codeflash = "..-.";}
   if (letter == 'g') {codeflash = "--.";}
   if (letter == 'h') {codeflash = "....";}
   if (letter == 'i') {codeflash = "..";}
   if (letter == 'j') {codeflash = ".---";}
   if (letter == 'k') {codeflash = "-.-";}
   if (letter == 'l') {codeflash = ".-..";}
   if (letter == 'm') {codeflash = "--";}
   if (letter == 'n') {codeflash = "-.";}
   if (letter == 'o') {codeflash = "---";}
   if (letter == 'p') {codeflash = ".--.";}
   if (letter == 'q') {codeflash = "--.-";}
   if (letter == 'r') {codeflash = ".-.";}
   if (letter == 's') {codeflash = "...";}
   if (letter == 't') {codeflash = "-";}
   if (letter == 'u') {codeflash = "..-";}
   if (letter == 'v') {codeflash = "...-";}
   if (letter == 'w') {codeflash = ".--";}
   if (letter == 'x') {codeflash = "-..-";}
   if (letter == 'y') {codeflash = "-.--";}
   if (letter == 'z') {codeflash = "--..";}
  return codeflash;
 };                                               
 
 
                                         
  
