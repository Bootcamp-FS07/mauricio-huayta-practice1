function decompose(num) {
  let result = [];
  let k = 2;
  let ks = [];
  let number = num;
  let base = 2;
  while (base ** k <= number) {
    let value = base ** (k + 1);
    //checks value for next K
    while (value < number) {
      k++;
      value = base ** (k + 1);
    }
    ks.push(k);
    number -= base ** k;
    // Try new base and resets k
    k = 2;
    base++;
  }
  result.push(ks);
  result.push(number);

  return result;
}
