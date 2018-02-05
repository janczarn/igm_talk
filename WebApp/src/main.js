var lib = require('./lib');

//Wait until DOM is loaded.
document.addEventListener('DOMContentLoaded', function() {

  //Add listener to circle radius input box that calculates area whenever it is
  //changed.
  var circleInput = document.getElementById('circle_input');
  circleInput.addEventListener('change', setCircleOutputContent);

  //Add listener to sphere radius input box that calculates volume whenever it
  //is changed.
  var sphereInput = document.getElementById('sphere_input');
  sphereInput.addEventListener('change', setSphereOutputContent);
});

//Accepts an input element event, calculates the area from the input value and
//inserts it into the output element.
function setCircleOutputContent(event) {
  var output = document.getElementById('circle_output');
  output.innerHTML = lib.calculateCircleArea(event.target.value);
}

//Accepts an input element event, calculates the volume from the input value and
//inserts it into the output element.
function setSphereOutputContent(event) {
  var output = document.getElementById('sphere_output');
  output.innerHTML = lib.calculateSphereVolume(event.target.value);
}
