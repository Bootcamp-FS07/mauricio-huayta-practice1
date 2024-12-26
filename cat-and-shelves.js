// CODE WARS EXCERCISE LINK -> https://www.codewars.com/kata/62c93765cef6f10030dfa92b/train/javascript

function solution(start, finish) {
  const MAX_STEP = 3;
  const MIN_STEP = 1;
  let actual = start;
  let cont = 0;
  while (actual < finish) {
    if (actual + MAX_STEP <= finish) {
      actual += MAX_STEP;
    } else {
      actual += MIN_STEP;
    }
    cont++;
  }
  return cont;
}

console.log(solution(1, 9));
