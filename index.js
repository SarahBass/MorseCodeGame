/*
----------------------------------------------
 *  Project:    Morse Code Game
 *  Mail:       darahbass@gmail.com
 *  Github:     SarahBass
 ---------------------------------------------
 NOTES: 
 All art created by myself using Vectornator.
 
 Three types of animations are used: sprite, 
 time activated, and transform. The sprite is
 used because it moves faster and smoother
 than a time activated animation. On the 
 Fitbit watch, keeping time activation to 
 seconds instead of miliseconds seems to 
 run more smoothly without errors. 
 
 You could optomize this by having holiday modes
 set by dates or months. You could also use the 
 users stats to change events. I might make 
 holiday versions later, so that is why there
 are a lot of imports that are not used. 
 
 You could also easily change backgrounds using
 background.image to give it a multi-page feel.
 
 I suggest not adding too many buttons and to 
 make the buttons as large as possible for 
 user friendly design. 
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
import { units } from "user-settings";
import { vibration } from "haptics";
/*--- Create Local Variables for Information Storage ---*/
let buttonnumber = 0;
let scopenumber = 0;
let gamenumber = 0;
let morsecode = "-.";
let morse = "";
let letternumber = 0;
let letter = generateString(1);
const characters ='abcdefghijklmnopqrstuvwxyz';
const myArray = morsecode.split("");
let word = "";
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
"zany"];

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
"zzz"];

       /*--- Assign Values based on Random Letter---*/
   if (letter == 'a') {morsecode = ".-"; letternumber = 0;}
   if (letter == 'b') {morsecode = "-...";letternumber = 1;}
   if (letter == 'c') {morsecode = "-.-.";letternumber = 2;}
   if (letter == 'd') {morsecode = "-..";letternumber = 3;}
   if (letter == 'e') {morsecode = ".";letternumber = 4;}
   if (letter == 'f') {morsecode = "..-.";letternumber = 5;}
   if (letter == 'g') {morsecode = "--.";letternumber = 6;}
   if (letter == 'h') {morsecode = "....";letternumber = 7;}
   if (letter == 'i') {morsecode = "..";letternumber = 8;}
   if (letter == 'j') {morsecode = ".---";letternumber = 9;}
   if (letter == 'k') {morsecode = "-.-";letternumber = 10;}
   if (letter == 'l') {morsecode = ".-..";letternumber = 11;}
   if (letter == 'm') {morsecode = "--";letternumber = 12;}
   if (letter == 'n') {morsecode = "-.";letternumber = 13;}
   if (letter == 'o') {morsecode = "---";letternumber = 14;}
   if (letter == 'p') {morsecode = ".--.";letternumber = 15;}
   if (letter == 'q') {morsecode = "--.-";letternumber = 16;}
   if (letter == 'r') {morsecode = ".-.";letternumber = 17;}
   if (letter == 's') {morsecode = "...";letternumber = 18;}
   if (letter == 't') {morsecode = "-";letternumber = 19;}
   if (letter == 'u') {morsecode = "..-";letternumber = 20;}
   if (letter == 'v') {morsecode = "...-";letternumber = 21;}
   if (letter == 'w') {morsecode = ".--";letternumber = 22;}
   if (letter == 'x') {morsecode = "-..-";letternumber = 23;}
   if (letter == 'y') {morsecode = "-.--";letternumber = 24;}
   if (letter == 'z') {morsecode = "--..";letternumber = 25;}

/*--- Animation Groups Imported from Index.gui---*/
var demoinstance = document.getElementById("demoinstance");
var demogroup = demoinstance.getElementById("demogroup");
const myAnimation = document.getElementById("myAnimation");

/*--- Import Information from index.gui ---*/
const menubutton = document.getElementById("menubutton");
const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
let background = document.getElementById("background");
let background2 = document.getElementById("background2");
background2.image = "blank.png";
background.image = "background/background.jpeg";
let menu = document.getElementById("menu");
menu.image = "background/purple.png";
let cuteobject = document.getElementById("cuteobject");
let dog = document.getElementById("dog");
var demoinstance = document.getElementById("demoinstance");
cuteobject.image = "blank.png";

// Get a handle on the <text> elements 
const batteryLabel = document.getElementById("batteryLabel");
const morseLabel = document.getElementById("morseLabel");
const userinputLabel = document.getElementById("userinputLabel");
const wordLabel = document.getElementById("wordLabel");

//Update the clock every second 
clock.granularity = "seconds";

//Game is run on clock updates
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
  demoinstance.animate("enable"); 
/*--- Update Stats for Screen ---*/
checkAndUpdateBatteryLevel();
  
 //Start Screen Animations
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
   }}
  

  //Game shows Animation for letter to learn the code
  if (gamenumber ==1){ 
   dog.image = "dog.png";
    background2.image = "background/background.jpeg";
    userinputLabel.text = morsecode;
  
  //activate button for skipping ahead
  menubutton.onactivate = function(evt) {
  buttonnumber++;
  gamenumber++;
  console.log("button number :" + buttonnumber); 
  console.log("game number :" + gamenumber);}  
   
  //This plays the animations at the same rate as the morse code. 1 second is a dih, and 2 seconds is a dah
  //Kind of a sloppy way to do it, because morse code is much faster than 3 seconds per symbol, but it loads the images better than being accurate
  //The button flashes and the words and animations change to a pattern, example long pause short is "n" in morse code.
     for (let i = 0; i < morsecode.length; i++){
       word = myArray[i];     
   if (seconds%3 == 0) { if (word == '-'){ menu.image = "background/yellow.png";
                         wordLabel.text = filewords[letternumber];
                         cuteobject.image = "object/"+ letter + 1 +".png";}
                         if (word == '.'){ menu.image = "background/yellow.png";
                         wordLabel.text = filewords[letternumber];
                         cuteobject.image = "object/"+ letter + 1 +".png";}} 
  if (seconds%3 == 1) { if (word == '-'){ menu.image = "background/yellow.png";
                         wordLabel.text = filewords[letternumber];
                         cuteobject.image = "object/"+ letter + 1 +".png";}
                         if (word == '.'){ menu.image = "background/purple.png";  
                         wordLabel.text = letter;
                         cuteobject.image = "blank.png";} }
   if (seconds%3 == 2) {menu.image = "background/purple.png";
                         wordLabel.text = letter;
                         cuteobject.image = "blank.png";}}}
    
//The user has clicked the button and now two buttons appear to enter the code. The original button is deactivated and invisible
if (gamenumber == 2){
        dog.image = "blank.png";
        background2.image = "blank.jpeg";
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
                                       vibration.start("ping");
                                       morse  += "-";
                                       console.log("morse:" + morse );
                                       morseLabel.text = "morse: " + morse;}
                              button2.onactivate = function(evt) {
                                       vibration.start("bump");
                                       morse  +=".";
                                       console.log("morse:" + morse );
                                       morseLabel.text = "morse: " + morse;}
       if (morse == morsecode) {gamenumber++;}
       }else{gamenumber++;}}
    
if (gamenumber == 3){
                     //hide elements of animation
                     dog.image = "blank.png";
                     background2.image = "blank.png";
                     morseLabel.text = " ";
                     //reactivate the skip ahead button
                     menu.image = "background/purple.png"
                     menubutton.onactivate = function(evt) {
                     cuteobject.image = "blank.png";
                     buttonnumber++;
                     gamenumber++;
                     console.log("button number :" + buttonnumber); 
                     console.log("game number :" + gamenumber); } 
                     //deactivate the morse code buttons and hide
                     button1.class = "none text-button bottom left "; 
                     button2.class = "none text-button bottom right "; 
                     button1.onactivate = function(evt) {}
                     button2.onactivate = function(evt) {}
                    //play animations based on user input being correct or incorrect
                    if (morse == morsecode){
                                            wordLabel.text = "correct!";
                                            cuteobject.image = "right.png";}
                    else{
                                            wordLabel.text = "wrong!";
                                            cuteobject.image = "wrong.png";}}
    
  
if (gamenumber ==4){ 
                    //Call round 2 animations to cover background animations
                    dog.image = "dog.png";
                    background2.image = "background/background.jpeg";
                   //Skip ahead button activated
                    menubutton.onactivate = function(evt) {
                    cuteobject.image = "blank.png";
                    buttonnumber++;
                    gamenumber++;
                    console.log("button number :" + buttonnumber); 
                    console.log("game number :" + gamenumber);}                   
                   //reset values for Round 2 
                   userinputLabel.text = morsecode;
                   morse = ""; 
                  //Play new animations for round 2 with different graphics and words 
                  for (let i = 0; i < morsecode.length; i++){
                  word = myArray[i];
                  if (seconds%3 == 0) {  
                                       if (word == '-'){ menu.image = "background/yellow.png";
                                                         wordLabel.text = filewords2[letternumber];
                                                         cuteobject.image = "object/"+ letter + 2 +".png";}
                                       if (word == '.'){ menu.image = "background/yellow.png";
                                                         wordLabel.text = filewords2[letternumber];
                                                         cuteobject.image = "object/"+ letter + 2 +".png";}} 
                  if (seconds%3 == 1) { 
                                       if (word == '-'){ menu.image = "background/yellow.png";
                                                         cuteobject.image = "object/"+ letter + 2 +".png";
                                                         wordLabel.text = filewords2[letternumber];}
                  if (word == '.'){ menu.image = "background/purple.png";       
                                    wordLabel.text = letter;
                                    cuteobject.image = "blank.png";} }
                  if (seconds%3 == 2) { 
                                       menu.image = "background/purple.png";
                                       wordLabel.text = letter;
                                       cuteobject.image = "blank.png";}}}
    
 if (gamenumber == 5){
                      //hide elements and animations
                      dog.image = "blank.png";
                      background2.image = "blank.png";
                      userinputLabel.text = " ";
                      vibration.stop();
                      cuteobject.image = "blank.png";
                      menu.image = "blank.png";
                      //deactivate skip ahead button
                      menubutton.onactivate = function(evt) {}
                      if (seconds%2 == 0) {wordLabel.text = "enter";}
                      else { wordLabel.text = letter;}
                     //activate morse code buttons
                      button1.class = "clear text-button bottom left "; 
                      button2.class = "clear text-button bottom right "; 
                      button1.text = "-"; 
                      button2.text = "."; 
                      if (morse.length < 4){button1.onactivate = function(evt) {
                                                                                vibration.start("ping");
                                                                                morse  += "-";
                                                                                console.log("morse:" + morse );
                                                                                morseLabel.text = "morse: " + morse; }
                                            button2.onactivate = function(evt) {vibration.start("bump");
                                                                                morse  +=".";
                                                                                console.log("morse:" + morse );
                                                                                morseLabel.text = "morse: " + morse;}
                      if (morse == morsecode) {gamenumber++;}
                    }else{gamenumber++;}}
    
if (gamenumber == 6){
                     dog.image = "blank.png";
                     background2.image = "blank.png";
                     menu.image = "background/purple.png"
                     //reactivate skip ahead button
                     menubutton.onactivate = function(evt) {
                     cuteobject.image = "blank.png";
                     buttonnumber++;
                     gamenumber++;
                     console.log("button number :" + buttonnumber); 
                     console.log("game number :" + gamenumber); }                   
                     morseLabel.text = " ";
                     //deactivate morsecode buttons
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
    
  
//End of game screen      
if (gamenumber > 6){
                    cuteobject.image = "blank.png";
                    if (seconds%6 == 0){dog.image = "dog1.png";}
                    if (seconds%6 == 1){dog.image = "dog2.png";}
                    if (seconds%6 == 2){dog.image = "dog3.png";}
                    if (seconds%6 == 3){dog.image = "dog4.png";}
                    if (seconds%6 == 4){dog.image = "dog5.png";}
                    if (seconds%6 == 5){dog.image = "dog6.png";}
                    background2.image = "background/background.jpeg";
                    button1.onactivate = function(evt) {}
                    button2.onactivate = function(evt) {}
                    menu.image = "blank.png";
                    menubutton.onactivate = function(evt) {}
                    if (seconds%2 == 0){wordLabel.text = "game";
                                        userinputLabel.text = "lvl: " + letter+ " complete";}
                    else{wordLabel.text = "over";
                         userinputLabel.text = "exit to restart";}}

  /*-------------------------------------- Battery Functions -------------------------------------*/
  display.addEventListener('change', function () { if (this.on) {checkAndUpdateBatteryLevel();}});
}

/*----------------------------START OF FUNCTIONS--------------------------------*/
                                                
 /*--- Change Battery RED , GREEN & CHARGE ---*/  
function checkAndUpdateBatteryLevel() {
  batteryLabel.text = `${battery.chargeLevel}%`;
  if (battery.chargeLevel > 30){ batteryLabel.class = "labelgreen";}
  else {batteryLabel.class = "labelred";
        battery.onchange = (charger, evt) => {batteryLabel.class = "labelgreen";}}}
 
function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {result = characters.charAt(Math.floor(Math.random() * charactersLength));}
    return result;}                                     

 
                                         
  
