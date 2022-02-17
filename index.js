/*
----------------------------------------------
 *  Project:    Morse Code Game
 *  Mail:       darahbass@gmail.com
 *  Github:     SarahBass
 ---------------------------------------------
 NOTES: 
 This Clock will be larger than normal
 because it has so many image backgrounds.
 
 Images are ALL Free Licence https://unsplash.com
 ---------------------------------------------
*/

/*--- Import Information from user Account ---*/
import { settingsStorage } from "settings";
import { me as appbit } from "appbit";
import clock from "clock";
import * as document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import { battery } from 'power';
import { display } from "display";
import { today as userActivity } from "user-activity";
import {goals, today} from "user-activity";
import { vibration } from "haptics";

/*--- Create Local Variables for Information Storage ---*/
let ufo = 0;
let dit = 0;
let dah = 0;
let buttonnumber = 0;
let ufonumber = 0;
let bonenumber = 0;
let ballnumber = 0;
let gamenumber = 0;
let gamestart = 0;
let foodnumber = 0;
let changetextnumber = 0;
/*--- Import Information from index.gui ---*/
const myAnimation = document.getElementById("myAnimation");
myAnimation.animate("enable");

let background = document.getElementById("background");
let menu = document.getElementById("menu");
let cuteobject = document.getElementById("cuteobject");
let menubutton = document.getElementById("menubutton"); 
let bonebutton = document.getElementById("bonebutton");  
let ufobutton = document.getElementById("ufobutton");  
let ballbutton = document.getElementById("ballbutton");
var demoinstance = document.getElementById("demoinstance");
cuteobject.image = "blank.png";

//Update the clock every second 
clock.granularity = "seconds";

// Get a handle on the <text> elements 

const batteryLabel = document.getElementById("batteryLabel");
const morseLabel = document.getElementById("morseLabel");
const userinputLabel = document.getElementById("userinputLabel");
const wordLabel = document.getElementById("wordLabel");
const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");

 menubutton.onactivate = function(evt) {
   cuteobject.image = "blank.png";
   buttonnumber++;
  if (buttonnumber > 1){
    buttonnumber = 0;}
  console.log("button number :" + buttonnumber); 
 }



/*--- CLOCK START ---*/
clock.ontick = (evt) => {

  let today = evt.date;
  let hours = today.getHours();
  let months = today.getMonth();
  let days = today.getDay();
  let dates = today.getDate();
  let years = today.getFullYear();
  let mins = util.zeroPad(today.getMinutes());
  let seconds = today.getSeconds();

  if(ufo > 0){background.image = "background/" + ufo + ".jpeg";
                   buttonnumber = 0;}
 else{background.image = "background/background.jpeg";}
  
  
     if(buttonnumber >0){ changetextnumber++; }
  
     if (changetextnumber > 0){
       wordLabel.text = " "
       userinputLabel.text = "";

if (buttonnumber == 1){
 menu.image = "background/menupurple.png";                         
 bonebutton.onactivate = function(evt) {
  foodnumber++; 
  ballnumber = 0;
   ufonumber = 0;
   bonenumber++;
   buttonnumber++;
  if (bonenumber > 2){
    bonenumber = 0;}
  if (foodnumber > 7){
    foodnumber = 0;}
  if ((foodnumber > 0)&&(foodnumber <= 7)){
    cuteobject.image = "food/"+ foodnumber + ".png";
  }else {cuteobject.image = "blank.png";}
  vibration.start("ping");
   
  console.log("bone number :" + bonenumber);
  console.log("food number :" + foodnumber);
  
 }

 ballbutton.onactivate = function(evt) {
  cuteobject.image = "blank.png";
   bonenumber = 0;
  ufonumber = 0;
  ballnumber++;
  if (ballnumber > 0){
    ballnumber = 0;
    buttonnumber = 0;}
  vibration.start("confirmation-max");
  console.log("ball number :" + ballnumber);
   gamenumber++;
  console.log("game number :" + gamenumber)
 }
 
   ufobutton.onactivate = function(evt) {
  cuteobject.image = "blank.png";
   ufo++;
  ballnumber = 0;
  bonenumber = 0; 
  ufonumber++;
     if (ufo > 10){
    ufo = 0;}
  if (ufonumber > 1){
    ufonumber = 0;}
  
  vibration.start("confirmation-max");
  console.log("ufo number :" + ufonumber)
     console.log("ufo :" + ufo)
     buttonnumber = 0;
 }

}
       else {menu.image = "background/purple.png";}
     }else{userinputLabel.text = "get started!";
  if ( seconds % 5 == 0){wordLabel.text = "press";}
  if ( seconds % 5 == 1){wordLabel.text = "the";}
  if ( seconds % 5 == 2){wordLabel.text = "button";}
  if ( seconds % 5 == 3){wordLabel.text = "to";}
  if ( seconds % 5 == 4){wordLabel.text = "start!";}
  
  if ( seconds % 24 == 0){menu.image = "background/purple.png";}
  if ( seconds % 24 == 1){menu.image = "background/yellow.png";}
  if ( seconds % 24 == 2){menu.image = "background/purple.png";}
  if ( seconds % 24 == 3){menu.image = "background/yellow.png";}
  if ( seconds % 24 == 4){menu.image = "background/purple.png";}
  if ( seconds % 24 == 5){menu.image = "background/yellow.png";}
  if ( seconds % 24 == 6){menu.image = "background/purple.png";}
  if ( seconds % 24 == 7){menu.image = "background/purple.png";}
  
  if ( seconds % 24 == 8){menu.image = "background/yellow.png";}
  if ( seconds % 24 == 9){menu.image = "background/yellow.png";}
  if ( seconds % 24 == 10){menu.image = "background/purple.png";}
  if ( seconds % 24 == 11){menu.image = "background/yellow.png";}
  if ( seconds % 24 == 12){menu.image = "background/yellow.png";}
  if ( seconds % 24 == 13){menu.image = "background/purple.png";}
  if ( seconds % 24 == 14){menu.image = "background/yellow.png";}
  if ( seconds % 24 == 15){menu.image = "background/yellow.png";}
  
  if ( seconds % 24 == 16){menu.image = "background/purple.png";}
  if ( seconds % 24 == 17){menu.image = "background/yellow.png";}
  if ( seconds % 24 == 18){menu.image = "background/purple.png";}
  if ( seconds % 24 == 19){menu.image = "background/yellow.png";}
  if ( seconds % 24 == 20){menu.image = "background/purple.png";}
  if ( seconds % 24 == 21){menu.image = "background/yellow.png";}
  if ( seconds % 24 == 22){menu.image = "background/purple.png";}
  if ( seconds % 24 == 23){menu.image = "background/purple.png";}}
  
  if ((gamenumber > 0)&&(gamestart == 0)){
    
  if ( seconds % 4 == 0){wordLabel.text = "ready?";
                          menu.image = "background/yellow.png";}
  if ( seconds % 4 == 1){wordLabel.text = "get set";
                        menu.image = "background/yellow.png";}
  if ( seconds % 4 == 2){wordLabel.text = "go!";
                        menu.image = "background/yellow.png";}
  if ( seconds % 4 == 3){wordLabel.text = "go!";
                        menu.image = "background/yellow.png";
                        gamestart++;}}
  
   if (gamestart == 1){
     if ( seconds % 11 == 0){wordLabel.text = "candy";
                          menu.image = "background/purple.png";
                          cuteobject.image = "object/candy.png";
                             vibration.stop();
                          userinputLabel.text = "- . - . ";}
     if ( seconds % 11 == 1){wordLabel.text = "candy";
                          menu.image = "background/purple.png";
                          cuteobject.image = "object/candy.png";
                             vibration.stop();
                             userinputLabel.text = "- . - . ";}
     if ( seconds % 11 == 2){wordLabel.text = "c";
                          menu.image = "background/yellow.png";
                          cuteobject.image = "blank.png";
                             userinputLabel.text = "-";
                             vibration.start("bump");}
     if ( seconds % 11 == 3){wordLabel.text = "c";
                          menu.image = "background/yellow.png";
                             cuteobject.image = "blank.png";
                             userinputLabel.text = "-";}
     if ( seconds % 11 == 4){wordLabel.text = "c";
                          menu.image = "background/purple.png";
                             cuteobject.image = "blank.png";
                             vibration.stop();
                             userinputLabel.text = "- ";}
     if ( seconds % 11 == 5){wordLabel.text = "c";
                          menu.image = "background/yellow.png";
                              vibration.start("bump");
                             cuteobject.image = "blank.png";
                             userinputLabel.text = "- .";}
     if ( seconds % 11 == 6){wordLabel.text = "c";
                          menu.image = "background/purple.png";
                             cuteobject.image = "blank.png";
                             vibration.stop();
                             userinputLabel.text = "- . ";}
     if ( seconds % 11 == 7){wordLabel.text = "c";
                          menu.image = "background/yellow.png";
                              vibration.start("bump");
                             cuteobject.image = "blank.png";
                             userinputLabel.text = "- . -";}
     if ( seconds % 11 == 8){wordLabel.text = "c";
                          menu.image = "background/yellow.png";
                             cuteobject.image = "blank.png";
                             userinputLabel.text = "- . -";}
     if ( seconds % 11 == 9){wordLabel.text = "c";
                          menu.image = "background/purple.png";
                             cuteobject.image = "blank.png";
                             vibration.stop();
                              userinputLabel.text = "- . - ";}
     if ( seconds % 11 == 10){wordLabel.text = "c";
                          menu.image = "background/yellow.png";
                               vibration.start("bump");
                              cuteobject.image = "blank.png";
                               userinputLabel.text = "- . - . ";
                               gamestart++;}}
  if (gamestart == 2){
    wordLabel.text = "c";
    cuteobject.image = "blank.png";
    button1.class = "clear text-button bottom left "; 
    button2.class = "clear text-button bottom right "; 
    button1.text = "-"; 
    button2.text = "."; 
    button1.onactivate = function(evt) {vibration.start("nudge");
                                       dit++;}
    button2.onactivate = function(evt) {vibration.start("bump");
                                       dah++;}
    if ((dit == 2) && (dah == 2)){gamestart++; 
                                  cuteobject.image = "right.png";}
    if ((dit > 2) || (dah > 2)) {cuteobject.image = "wrong.png";
                                 dit = 0;
                                 dah = 0;}
    
  }
  
  if (gamestart == 3){
    wordLabel.text= "candy";
    cuteobject.image = "object/candy.png";
    button1.class = "none text-button bottom left "; 
    button2.class = "none text-button bottom right "; 
    button1.text = " "; 
    button2.text = " "; 
  }
  

  

  
  
  
  
 
  
 /*--- Update Stats for Screen ---*/
 
  checkAndUpdateBatteryLevel();
 
  /*--- Battery Functions ---*/
  display.addEventListener('change', function () { if (this.on) {checkAndUpdateBatteryLevel();}
                                             
});}
/*----------------------------END OF ON TICK-----------------------------------*/
  
/*----------------------------START OF FUNCTIONS--------------------------------*/

 /*--- Change Battery RED , GREEN & CHARGE ---*/  

function checkAndUpdateBatteryLevel() {
  batteryLabel.text = `${battery.chargeLevel}%`;
  if (battery.chargeLevel > 30){ batteryLabel.class = "labelgreen";}
  else {batteryLabel.class = "labelred";
        battery.onchange = (charger, evt) => {batteryLabel.class = "labelgreen";}}
}
 

 

/*----------------------------END OF FUNCTIONS--------------------------------*/
/*-------------------------------END OF CODE----------------------------------*/
