import {pi, square, cube} from 'mathjs';

export function calculateCircleArea(radius) {
  return pi * square(radius);
}

export function calculateSphereVolume(radius) {
  return (4/3) * pi * cube(radius);
}
