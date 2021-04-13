function init () {
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const takeOffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const missionAbortButton = document.getElementById("missionAbort");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
// 2
button.addEventListener("click", function() {
  let liftoffAnswer = window.confirm("Confirm that the shuttle is ready for takeoff.")
  if (lifftoffAnswer) {
    flightStatus.innerHtml = "Shuttle in flight.";
    console.log("Shuttle in flight.");
    shuttleBackground.backgroundColor = "blue";
    console.log("Background color changed to blue");
    // somehow increase shuttle height by 10,000 miles
  }
});
// 3
button.addEventListener("click", function() {
  window.alert("The shuttle is landing. Landing gear engaged.");
  flightStatus.innerHtml = "The shuttle has landed.";
  console.log("The shuttle has landed.");
  shuttleBackground.backgroundColor = "green";
  console.log("Background color changed to green");
  // somehow reset shuttle height to 0
});
// 4
button.addEventListener("click", function() {
  paragraph.innerHTML = "Houston, we have liftoff!";
  console.log("Houston, we have liftoff!");    
});
}
// 1
window.addEventListener("load", init);