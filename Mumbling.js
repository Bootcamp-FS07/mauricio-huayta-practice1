// CODE WARS EXCERCISE LINK -> https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
function accum(s) {
  let chars = s.split("");
  let groups = chars.map(
    (char, index) => char.toUpperCase() + char.toLowerCase().repeat(index)
  );
  return groups.join("-");
}
