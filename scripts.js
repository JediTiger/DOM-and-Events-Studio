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
    flightStatus.innerHtml = "Shuttle in flight."
    // Left off here
  }
  paragraph.innerHTML = "Houston, we have liftoff!";
  console.log("Houston, we have liftoff!");    
});
}
// 3
button.addEventListener("click", function() {
  paragraph.innerHTML = "Houston, we have liftoff!";
  console.log("Houston, we have liftoff!");    
});
// 4
button.addEventListener("click", function() {
  paragraph.innerHTML = "Houston, we have liftoff!";
  console.log("Houston, we have liftoff!");    
});

window.addEventListener("load", init);