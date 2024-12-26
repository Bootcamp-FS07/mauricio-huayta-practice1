// CODE WARS EXCERCISE LINK -> https://www.codewars.com/kata/567610d21541a88876000024/train/javascript
function thetaFormula(radius, arc, angle) {
  if (radius === undefined || arc === undefined || angle === undefined)
    return null;
  if (angle === "?" && radius !== "?" && arc !== "?")
    return parseFloat((arc / radius).toFixed(3));
  if (arc === "?" && radius !== "?" && angle !== "?")
    return parseFloat((radius * angle).toFixed(3));
  if (radius === "?" && arc !== "?" && angle !== "?")
    return parseFloat((arc / angle).toFixed(3));
  if (radius !== "?" && arc !== "?" && angle !== "?")
    return radius === arc / angle;
  return null;
}
