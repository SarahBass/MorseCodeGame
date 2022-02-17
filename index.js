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
let buttonnumber = 0;

/*--- Import Information from index.gui ---*/
const myAnimation = document.getElementById("myAnimation");
myAnimation.animate("enable");
let background = document.getElementById("background");
let menu = document.getElementById("menu");
let object = document.getElementById("object");
let menubutton = document.getElementById("menubutton");  
let bonebutton = document.getElementById("bonebutton");  
let ufobutton = document.getElementById("ufobutton");  
let ballbutton = document.getElementById("ballbutton");  

//Update the clock every second 
clock.granularity = "seconds";

// Get a handle on the <text> elements 

const batteryLabel = document.getElementById("batteryLabel");
const morseLabel = document.getElementById("morseLabel");
const userinputLabel = document.getElementById("userinputLabel");
const wordLabel = document.getElementById("wordLabel");

menubutton.text = "x";
 menubutton.onactivate = function(evt) {
   buttonnumber++;
  if (buttonnumber > 2){
    buttonnumber = 0;}
  console.log(buttonnumber);
   if (buttonnumber == 1){
   menu.image = "background/menupurple.png";}
   else{menu.image = "background/purple.png"}
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
  
  if ( seconds % 5 == 0){wordLabel.text = "press";}
  if ( seconds % 5 == 1){wordLabel.text = "the";}
  if ( seconds % 5 == 2){wordLabel.text = "button";}
  if ( seconds % 5 == 3){wordLabel.text = "to";}
  if ( seconds % 5 == 4){wordLabel.text = "start!";}
  
  if ( seconds % 8 == 0){menu.image = "background/purple.png";}
  if ( seconds % 8 == 1){menu.image = "background/yellow.png";}
  if ( seconds % 8 == 2){menu.image = "background/purple.png";}
  if ( seconds % 8 == 3){menu.image = "background/yellow.png";}
  if ( seconds % 8 == 4){menu.image = "background/purple.png";}
  if ( seconds % 8 == 5){menu.image = "background/yellow.png";}
  if ( seconds % 8 == 6){menu.image = "background/purple.png";}
  if ( seconds % 8 == 7){menu.image = "background/purple.png";}
  
  
 /*--- Update Stats for Screen ---*/
  updateScene();
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
 
  
  
/*--- Change Date and Background Functions ---*/
  function updateScene() {
   changeobject();
   changetext();
   changebackground();
  }
 function changeobject(){ }

 function changetext(){ 
 userinputLabel.text = "get started!"; 
 }

 function changebackground(){
 background.image = "background/background.jpeg";}
 

/*----------------------------END OF FUNCTIONS--------------------------------*/
/*-------------------------------END OF CODE----------------------------------*/
