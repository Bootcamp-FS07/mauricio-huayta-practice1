// CODE WARS EXCERCISE LINK -> https://www.codewars.com/kata/550554fd08b86f84fe000a58
function substrings(a1, a2) {
  let result = [];
  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      if (a2[j].includes(a1[i])) {
        result.push(a1[i]);
        break;
      }
    }
  }
  return result.sort();
}

console.log(
  substrings(
    ["arp", "live", "strong"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  )
); // ["arp", "live", "strong"]
console.log(
  substrings(
    ["tarp", "mice", "bull"],
    ["lively", "alive", "harp", "sharp", "armstrong"] //, "bullying"
  )
); // []
