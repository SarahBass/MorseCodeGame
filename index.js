/*
 *  Project:    Versa 2 Dog Clock Face
 *  Mail:       darahbass@gmail.com
 *  Github:     SarahBass
 *  Credit:     volkan-labs reading-watch-face
 *  Credit:     mihaibabusca SnowflakeClockface
 *  Credit:     denk0403 Mario-Fitbit-Watchface
 */


import { geolocation } from "geolocation";
import clock from "clock";
import * as document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import { battery } from 'power';
import { display } from "display";
import { today as userActivity } from "user-activity";

import { vibration } from "haptics";
// Update the clock 
clock.granularity = "seconds";

//PLAYER
let standLink;
let jumpLink;
let isJumping = false;
let mario = document.getElementById("mario");
let jumpAnim = document.getElementById("jump_animation");

//SCENE
let background = document.getElementById("background");
let movable = document.getElementById("movable");

// sunrise/sunset info
let sunrise;
let sunset;

// Get a handle on the <text> element
const myLabel = document.getElementById("myLabel");

const batteryLabel = document.getElementById("batteryLabel");

const greenbatteryLabel = document.getElementById("greenbatteryLabel");

const redbatteryLabel = document.getElementById("redbatteryLabel");

const stepsLabel = document.getElementById("stepsLabel");



// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  
  checkAndUpdateBatteryLevel();
  stepsLabel.text = userActivity.adjusted.steps;
 
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(today.getMinutes());
  myLabel.text = `${hours}:${mins}`;
  
  if (hours === 0 && mins === 0) {
  resetDate();}
  updateScene();
}

display.addEventListener('change', function () {
    if (this.on) {checkAndUpdateBatteryLevel();} 
});

battery.onchange = (charger, evt) => {
    greenBatteryLevel();
}

function greenBatteryLevel() {
    greenbatteryLabel.text = `${battery.chargeLevel}%`;
}

function checkAndUpdateBatteryLevel() {
  if (battery.chargeLevel > 15){
    batteryLabel.text = `${battery.chargeLevel}%`;}
  else {redbatteryLabel.text = `${battery.chargeLevel}%`;}
}

function defaultSunsetSunrise(error) {
  sunrise = new Date();
  sunrise.setHours(6);
  sunrise.setMinutes(0);
  sunrise.setSeconds(0);
  sunset = new Date();
  sunset.setHours(20);
  sunset.setMinutes(0);
  sunset.setSeconds(0);
}

defaultSunsetSunrise(null);

function setToNight() {
  background.image = "batterydogscreen.png";
}

function setToMorning() {
  background.image = "daydog.png";
}

function updateScene() {
  let today = new Date();
  if (today.getTime() >= sunrise.getTime() && today.getTime() < sunset.getTime()) {
    setToMorning();
  } else {
    setToNight();
  }
}

function updateSunsetSunrise(position) {
  let loc = position.coords;
  var times = answer.getTimes(new Date(), loc.latitude, loc.longitude);
  sunrise = times.sunrise;
  sunset = times.sunset;
  updateScene();
}

function resetdog() {
  if (isJumping) {
    mario.image = jumpLink;
  } else {
    mario.image = standLink;
  }
}

function setToRegular() {
  jumpLink = "2jump.png";
  standLink = "1jump.png";
  resetdog();
  
}
function resetDate() {
  geolocation.getCurrentPosition(updateSunsetSunrise, defaultSunsetSunrise);
}

