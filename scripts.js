function init () {
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const takeOffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const buttonUp = document.getElementById("button-up");
    const buttonDown = document.getElementById("button-down");
    const buttonRight = document.getElementById("button-right");
    const buttonLeft = document.getElementById("button-left");
    
// 2
takeOffButton.addEventListener("click", function() {
  let liftoffAnswer = window.confirm("Confirm that the shuttle is ready for takeoff.")
  if (liftoffAnswer) {
    flightStatus.innerHTML = "Shuttle in flight.";
    console.log("Shuttle in flight.");
    shuttleBackground.style.background = "blue";
    console.log("Background color changed to blue");
    spaceShuttleHeight.innerHTML = 10000;
    console.log("Shuttle heigth set to 10,000 miles.")
  }
});
// 3
landingButton.addEventListener("click", function() {
  window.alert("The shuttle is landing. Landing gear engaged.");
  flightStatus.innerHTML = "The shuttle has landed.";
  console.log("The shuttle has landed.");
  shuttleBackground.style.background = "green";
  console.log("Background color changed to green");
  spaceShuttleHeight.innerHTML = 0;
  console.log("Shuttle heigth set to 0 miles.")
});
// 4
abortButton.addEventListener("click", function() {
  let abortAnswer = window.confirm("Confirm that you want to abort the mission.");
  if (abortAnswer) {
    flightStatus.innerHTML = "Mission aborted.";
    console.log("Mission aborted.");
    shuttleBackground.style.background = "green";
    console.log("Background color changed to green");
    spaceShuttleHeight.innerHTML = "0";
    console.log("Shuttle heigth set to 0 miles.");
  }
// 5
/*
	<button id="button-up"">Up</button>
	<button id="button-down">Down</button>
	<button id ="button-right">Right</button>
	<button id="button-left">Left</button>
*/
buttonDown.addEventListener("click", function() {
	spaceShuttleHeight.innerHTML = /*spaceShuttleHeight.innerHTML -*/ 10000;
	console.log("Lower shuttle height by 10000");
	
});
// Bonus
//
});
}
// 1
window.addEventListener("load", init);