function fact(n){
    let r = 1

    for ( let i = 1; i <= n; i++ ) {
        r = r * i
    } 

    return r
}

function switchSign(i){
  if (i % 2 === 0) return -1;
  else return 1;
};
function cosNEW(x){
  let sum = 1
  let top = 15

  for (let i = 2, c = 2; c <= top; i += 2, c++) {
    sum += switchSign(c) * (Math.pow(x, i) / fact(i));
  }
  return sum;
};

console.log(cosNEW(7));