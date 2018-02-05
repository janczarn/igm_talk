import {
  calculateCircleArea,
  calculateSphereVolume
} from './lib';

//Wait until DOM is loaded.
document.addEventListener('DOMContentLoaded', () => {

  //Add listener to circle radius input box that calculates area whenever it is
  //changed.
  const circleInput = document.getElementById('circle_input');
  circleInput.addEventListener('change', setCircleOutputContent);

  //Add listener to sphere radius input box that calculates volume whenever it
  //is changed.
  const sphereInput = document.getElementById('sphere_input');
  sphereInput.addEventListener('change', setSphereOutputContent);
}, false);

//Accepts an input element event, calculates the area from the input value and
//inserts it into the output element.
function setCircleOutputContent(event) {
  const output = document.getElementById('circle_output');
  output.innerHTML = calculateCircleArea(event.target.value);
}

//Accepts an input element event, calculates the volume from the input value and
//inserts it into the output element.
function setSphereOutputContent(event) {
  const output = document.getElementById('sphere_output');
  output.innerHTML = calculateSphereVolume(event.target.value);
}
