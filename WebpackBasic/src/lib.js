var math = require('mathjs');

exports.calculateCircleArea = function(radius) {
  return math.pi * math.square(radius);
}

exports.calculateSphereVolume = function(radius) {
  return (4/3) * math.pi * math.cube(radius);
}
