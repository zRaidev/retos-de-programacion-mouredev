let parNum = true;
let imparNum = false;

let isFib = true;
let isNotFib = false;


function probarPar(num) {
  let resto = num % 2;
  if (resto === 1) return imparNum;
  else return parNum;
}

function probarFibonacci(num) {
  const sol = [0, 1];
  let newNum = num;
  if (num <= 5) newNum = newNum + 1 * 2
  else if (num >= 25) newNum = newNum / 3
  else if (num >= 45) newNum = newNum / 5
  for (let i = 2; i <= newNum; i++) {
    sol[i] = sol[i -1] + sol[i - 2];
  }
  console.log(sol);
  console.log(num);
  console.log("newNum: " + newNum);
  let fib = sol.includes(num);
  return fib;

}
