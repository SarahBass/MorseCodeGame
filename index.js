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
var delayInMilliseconds = 1000; //1 second
let buttonnumber = 0;
let gamenumber = 0;
let gamestart = 0;
let code = " ";
let morse = "";
let letter = "a";
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
  userinputLabel.text = "get started!";
  setTimeout(function() {wordLabel.text = "press";}, delayInMilliseconds);
  setTimeout(function() {wordLabel.text = "button";}, delayInMilliseconds);
  setTimeout(function() {wordLabel.text = "to";}, delayInMilliseconds);
  setTimeout(function() {wordLabel.text = "start!";}, delayInMilliseconds);                                             

  if ((gamenumber > 0)&&(gamestart == 0)){
    
  setTimeout(function() {wordLabel.text = "Watch";
                         menu.image = "background/purple.png";}, delayInMilliseconds);                       
  setTimeout(function() {wordLabel.text = "the";
                         menu.image = "background/purple.png";}, delayInMilliseconds);
  setTimeout(function() {wordLabel.text = "pattern";
                         menu.image = "background/purple.png";}, delayInMilliseconds);
                         gamestart++;
  }
                                                
   if ((gamenumber > 0)&&(gamestart == 1)){
       setTimeout(function() {wordLabel.text = "ready?";
                         menu.image = "background/purple.png";}, delayInMilliseconds);
                         
  setTimeout(function() {wordLabel.text = "get set";
                         menu.image = "background/purple.png";}, delayInMilliseconds);
  setTimeout(function() {wordLabel.text = "go!";
                         menu.image = "background/purple.png";}, delayInMilliseconds);
    play();
                                       
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
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  
  letter = alphabet[Math.floor(Math.random() * alphabet.length)];
}

 function createcode{
   if letter == a {code = ".-"};
   if letter == b {code = "-..."};
   if letter == c {code = "-.-."};
   if letter == d {code = "-.."};
   if letter == e {code = "."};
   if letter == f {code = "..-."};
   if letter == g {code = "--."};
   if letter == h {code = "...."};
   if letter == i {code = ".."};
   if letter == j {code = ".---"};
   if letter == k {code = "-.-"};
   if letter == l {code = ".-.."};
   if letter == m {code = "--"};
   if letter == n {code = "-."};
   if letter == o {code = "---"};
   if letter == p {code = ".--."};
   if letter == q {code = "--.-"};
   if letter == r {code = ".-."};
   if letter == s {code = "..."};
   if letter == t {code = "-"};
   if letter == u {code = "..-"};
   if letter == v {code = "...-"};
   if letter == w {code = ".--"};
   if letter == x {code = "-..-"};
   if letter == y {code = "-.--"};
   if letter == z {code = "--.."};
 }                                               
 
 function flashdah(){
   
 }
                                                
  function flashdih(){
   
 }                                               
                                                
 function play(){
   While (morse != code){
    button1.class = "clear text-button bottom left "; 
    button2.class = "clear text-button bottom right "; 
    button1.text = "-"; 
    button2.text = "."; 
   
    button1.onactivate = function(evt) {vibration.start("nudge");
                                       morse = +="-";
                                       console.log("morse:" + morse );}
    button2.onactivate = function(evt) {vibration.start("bump");
                                            morse = +=".";
                                       console.log("morse:" + morse ); }
   }
 }                                           
                                                
/*----------------------------END OF FUNCTIONS--------------------------------*/
/*-------------------------------END OF CODE----------------------------------*/
