// CODE WARS EXCERCISE LINK -> https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript
function isValidWalk(walk) {
  let result = false;
  let x, y;
  if (walk.length === 10) {
    x = 0;
    y = 0;
    walk.forEach((direction) => {
      switch (direction) {
        case "n":
          y++;
          break;
        case "s":
          y--;
          break;
        case "e":
          x++;
          break;
        case "w":
          x--;
          break;
      }
    });
    if (x === 0 && y === 0) {
      result = true;
    }
  }
  return result;
}
