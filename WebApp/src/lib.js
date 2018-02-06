var math = require('mathjs');

module.exports.calculateCircleArea = function(radius) {
  return math.pi * math.square(radius);
}

module.exports.calculateSphereVolume = function(radius) {
  return (4/3) * math.pi * math.cube(radius);
}
