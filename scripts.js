function init () {
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const takeOffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
// 2
button.addEventListener("click", function() {
  let liftoffAnswer = window.confirm("Confirm that the shuttle is ready for takeoff.")
  if (lifftoffAnswer) {
    flightStatus.innerHtml = "Shuttle in flight.";
    console.log("Shuttle in flight.");
    shuttleBackground.backgroundColor = "blue";
    console.log("Background color changed to blue");
    spaceShuttleHeight.innerHTML = 10000;
    console.log("Shuttle heigth set to 10,000 miles.")
  }
});
// 3
landingButton.addEventListener("click", function() {
  window.alert("The shuttle is landing. Landing gear engaged.");
  flightStatus.innerHtml = "The shuttle has landed.";
  console.log("The shuttle has landed.");
  shuttleBackground.backgroundColor = "green";
  console.log("Background color changed to green");
  spaceShuttleHeight.innerHTML = 0;
  console.log("Shuttle heigth set to 0 miles.")
});
// 4
abortButton.addEventListener("click", function() {
  paragraph.innerHTML = "Houston, we have liftoff!";
  console.log("Houston, we have liftoff!");    
});
}
// 1
window.addEventListener("load", init);