/*
----------------------------------------------
 *  Project:    Pet Space Dog Clock Face
 *  Mail:       darahbass@gmail.com
 *  Github:     SarahBass
 ---------------------------------------------
 NOTES: 

 
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


/*--- Create Local Variables for Information Storage ---*/
let daytext = "day";
let monthtext = "month";
let goalreached = "NONE";


/*--- Import Information from index.gui ---*/

let background = document.getElementById("background");
let ampm = document.getElementById("ampm");  
let date = document.getElementById("date");
let hourhand = document.getElementById("hourhand");
let minutehand = document.getElementById("minutehand");
let minutehand2 = document.getElementById("minutehand2");
let colon = document.getElementById("colon");
let bodyobject = document.getElementById("bodyobject");
let legs1object = document.getElementById("legs1object");
let tailobject = document.getElementById("tailobject");
let eyesobject = document.getElementById("eyesobject");
let legs2object = document.getElementById("legs2object");
let object = document.getElementById("object");
let cuteobject = document.getElementById("cuteobject");
let body = document.getElementById("body");
let legs1 = document.getElementById("legs1");
let eyes = document.getElementById("eyes");
let legs2 = document.getElementById("legs2");
let cute = document.getElementById("cute");
let heartbutton = document.getElementById("heartbutton");  
let heartclick = 0;   
let pasteventread = "";   
//Update the clock every second 
clock.granularity = "seconds";

// Get a handle on the <text> elements 
const myLabel = document.getElementById("myLabel");
const batteryLabel = document.getElementById("batteryLabel");
const stepsLabel = document.getElementById("stepsLabel");
const firelabel = document.getElementById("firelabel");
const boltlabel = document.getElementById("boltlabel");
const stairslabel = document.getElementById("stairslabel");
const distancelabel = document.getElementById("distancelabel");
const targetlabel = document.getElementById("targetlabel");
heartlabel.text = "off";
 /*--- Animation Groups Imported from Index.gui---*/
var demoinstance = document.getElementById("demoinstance");

  

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
  

 /*--- Update Stats for Screen ---*/
  updateScene();
  
  if (preferences.UnitsSettings == "us"){
  distancelabel.text = (0.000621371 * userActivity.adjusted.distance).toFixed(1) + " mi";}
  else {distancelabel.text = (0.001 * userActivity.adjusted.distance).toFixed(1) + " km";}

  stairslabel.text = userActivity.adjusted.elevationGain;
  stepsLabel.text = userActivity.adjusted.steps;
  firelabel.text = userActivity.adjusted.calories;
  targetlabel.text = parseInt(userActivity.adjusted.steps/goals.steps * 100) + "%";
  boltlabel.text = userActivity.adjusted.activeZoneMinutes.total;
    
  checkAndUpdateBatteryLevel();
  
  
  //AM PM -Change the image based on 24 hours
  if (util.zeroPad(hours) <12){ampm.image = "background/am.png";
                              if ((util.zeroPad(hours) >= 0) && (util.zeroPad(hours) < 7)) {
                                   cuteobject.image = "object/zzz.png";
                                   cute.image = "object/zzz.png";}
                              else if (util.zeroPad(hours) == 7){
                                   cuteobject.image = "object/cereal.png";
                                   cute.image = "object/cereal.png";}
                              else if (util.zeroPad(hours) == 8){
                                   cuteobject.image = "object/toothbrush.png";
                                   cute.image = "object/toothbrush.png";}
                              else if (util.zeroPad(hours) == 9){ 
                                   cuteobject.image = "object/write.png"; 
                                   cute.image = "object/write.png";}
                              else if (util.zeroPad(hours) == 11){ 
                                   cuteobject.image = "object/write.png"; 
                                   cute.image = "object/write.png";}
                              else {
                                    cuteobject.image = " ";
                                    cute.image = " ";}
                              
                              
                              }
  if (util.zeroPad(hours) >= 12){ampm.image = "background/pm.png";
                                 
                                 else if (util.zeroPad(hours) == 16){
                                   cuteobject.image = "object/ballplay.png";
                                   cute.image = "object/ballplay.png";}
                                 else if (util.zeroPad(hours) == 17){  
                                   cuteobject.image = "object/ballplay.png";
                                   cute.image = "object/ballplay.png";}
                                 else if (util.zeroPad(hours) == 18){  
                                   cuteobject.image = "object/cereal.png";
                                   cute.image = "object/cereal.png";}
                                 else if (util.zeroPad(hours) == 19){  
                                    cuteobject.image = "object/music.png";
                                    cute.image = "object/music.png";} 
                                 else if (util.zeroPad(hours) == 20){  
                                    cuteobject.image = "object/movie.png";
                                    cute.image = "object/movie.png";}
                                 else if (util.zeroPad(hours) == 21){ 
                                    cuteobject.image = "object/toothbrush.png";
                                    cute.image = "object/toothbrush.png";}
                                 else if ((util.zeroPad(hours) == 22) ||
                                          (util.zeroPad(hours) == 23)){
                                    cuteobject.image = "object/zzz.png";
                                    cute.image = "object/zzz.png";}
                                 else {
                                    cuteobject.image = " ";
                                    cute.image = " ";}
                                 
                                 }                            
  
  
  //Get Prize from Steps Goal 
  if (userActivity.adjusted.steps > goals.steps){goalreached = "show";}
  
  
   /*--- OPTION 2: TIME IMAGES FOR 12 HOUR CLOCK---*/
  //set class of each # IMAGE individually if needed for formatting
  if (preferences.clockDisplay === "12h") {
    colon.image = "numbers/colon.png";
    myLabel.class = "myLabel";
    hours = hours % 12 || 12;
    hourhand.image = "numbers/" + hours + ".png";
  //Minute hand % 10 will return ones digit
   minutehand2.image =      "numbers/" + mins%10 + ".png";     
  //Minute hand /10 will return tens digit, but ints don't exist in Javascript
  //Use the parseInt function to turn quotient into an integer
   minutehand.image = "numbers/" + parseInt(mins/10)+ ".png";} 
    
    /*--- OPTION 2: TIME TEXT FOR 24 HOUR CLOCK ---*/
    //This is how to set a clock with text
    //Invisible until 24 hour mode selected
    else { 
    hours = util.zeroPad(hours);
    myLabel.text = `${hours}:${mins}`; 
    myLabel.class = "showLabel";
    hourhand.image = " ";
    minutehand.image = " ";  
    minutehand2.image = " ";
    colon.image = " ";
  }
  
  /*----------------------------SHOW CLOCK END----------------------------------*/
  //ANIMATIONS

  //PLAY FLOAT ANIMATION
  if ( mins % 2 == 0){
                         if (seconds % 2 == 0){mouth.image = "star/notongue.png";}
                         else{mouth.image = "star/littlemouth.png";}     
                         float();
  //PLAY STAND ANIMATION - MOUTH CHANGES EVERY 10 MINUTES  
  }else{            
                   if ( parseInt(mins/10) == 1 ){
                   if (seconds % 2 == 0){mouthobject.image = "star/littlemouth.png";}
                   else{mouthobject.image = "star/tinymouth.png";}}
                 else if (parseInt(mins/10) == 2 ){
                   if (seconds % 2 == 0){mouthobject.image = "star/circlemouth.png";}
                   else{mouthobject.image = "star/tinycirclemouth.png";}}
                                     
                 else if ( parseInt(mins/10) == 3 ){
                   if (seconds % 2 == 0){mouthobject.image = "star/tinycirclemouth.png";}
                   else{mouthobject.image = "star/mouth.png";}}  
                 
                 else if (parseInt(mins/10) == 4 ){ 
                   if (seconds % 2 == 0){mouthobject.image = "star/littleovalmouth.png";}
                   else{mouthobject.image = "star/tinymouth.png";}}
                 
                 else if (parseInt(mins/10) == 5 ){
                   if (seconds % 2 == 0){mouthobject.image = "star/littlemouth.png";}
                   else{mouthobject.image = "star/tinymouth.png";}}

                 else if (parseInt(mins/10) == 6 ){ 
                   if (seconds % 2 == 0){mouthobject.image = "star/notongue.png";}
                   else{mouthobject.image = "star/littlemouth.png";}}
                 
                 else if (parseInt(mins/10) == 0 ){ 
                   if (seconds % 2 == 0){mouthobject.image = "star/tinymouth.png";}
                   else{mouthobject.image = "star/tinycirclemouth.png";}}
                
       stand();
      }

   

  /*--- Battery Functions ---*/
  display.addEventListener('change', function () { if (this.on) {checkAndUpdateBatteryLevel();}
                                                  
                                                    
                                                  
});
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
   changeBackground();
   date.text = " " + daytext + " " + monthtext + " " + dates + " " + years + " ";  
  if (months == 0){monthtext = "January";}
  else if (months == 1){monthtext =  "February";}
  else if (months == 2){monthtext =  "March";}
  else if (months == 3){monthtext =  "April";}
  else if (months == 4){monthtext =  "May";}
  else if (months == 5){monthtext =  "June";}
  else if (months == 6){monthtext =  "July";}
  else if (months == 7){monthtext =  "August";}
  else if (months == 8){monthtext =  "Septemper";}
  else if (months == 9){monthtext =  "October";}
  else if (months == 10){monthtext = "November";}
  else if (months == 11){monthtext = "December";}
  else {monthtext = "MONTH";}
    
  if (days == 0){daytext =      "Sunday,";}
  else if (days == 1){daytext = "Monday,";}
  else if (days == 2){daytext = "Tuesday,";}
  else if (days == 3){daytext = "Wednesday,";}
  else if (days == 4){daytext = "Thursday,";}
  else if (days == 5){daytext = "Friday,";}
  else if (days == 6){daytext = "Saturday,";}
  else {daytext = "DAY";}
 }


//You can use a convienent way to find your and upload your images
//"file location" + number variable + ".imageformat" 

 function changeBackground(){ 
  background.image = "night.jpeg";
}

//Animation Functions   
function float (){
//if goif (goalreached == "show"){ 
                           if ((months == 2)||(months == 3)){object.image = "object/mar" + (dates % 10) + ".png";}
                           else if (months == 9){object.image = "object/oct" + (dates % 10) + ".png";}
                           else if (months == 11){object.image = "object/dec" + (dates % 10) + ".png";}
                           else {object.image = "object/plain" + (dates % 10) + ".png";}
  } else{ object.image = " ";}
  body.image = "dog/body.png"
  eyes.image = "dog/eyes1.png";
  legs1.image;
  legs2.image;
  tail.image;
  cute.image;
  bodyobject.image = "";
  eyesobject.image = "";
  legs1object.image = "";
  legs2object.image = "";
  tailobject.image = "";
  cuteobject.image = "";
  setTimeout(() => {
  demoinstance.animate("enable"); 
   }, 600);
}  

function stand(){
  if (goalreached == "show"){ 
                           if ((months == 2)||(months == 3)){object.image = "object/mar" + (dates % 10) + ".png";}
                           else if (months == 9){object.image = "object/oct" + (dates % 10) + ".png";}
                           else if (months == 11){object.image = "object/dec" + (dates % 10) + ".png";}
                           else {object.image = "object/plain" + (dates % 10) + ".png";}
  } else{ object.image = " ";}
  
  
  body.image = " ";
  eyes.image = " ";
  legs1.image = " ";
  legs2.image = " ";
  tail.image = " ";
  cute.image = " ";
  bodyobject.image = "dog/body.png"
  eyesobject.image = "dog/eyes1.png";
  legs1object.image;
  legs2object.image;
  tailobject.image;
  cuteobject.image;
  
}  
}
}
/*----------------------------END OF FUNCTIONS--------------------------------*/
/*-------------------------------END OF CODE----------------------------------*/

