let parNum = "es par";
let imparNum = "es impar";

let esFib = "es fibonacci";
let noEsFib = "no es fibonacci";

let esPrimo = "es primo";
let noEsPrimo = "no es primo";

function probarPar(num) {
  let resto = num % 2;
  if (resto === 1) return imparNum;
  else return parNum;
}

function probarFibonacci(num) {
  let index = [0,1];
  for(let i = index.length;i <= num + 5;i++){
    index.push(index[i-1] + index[i-2]);
    //console.log(index[i])
    if (index[i] === num) return esFib;
    else if (index[i] > num) return noEsFib;
  }
  return index;
}

function probarNumeroPrimo(num) {
  if (num == 0 || num == 1 || num == 4) return noEsPrimo;
  for (let i = 2; i < num / 2; i++) {
    if (num % i == 0) return noEsPrimo
  }
  return esPrimo
}


function numberPrompt(num) { //PROMPT FUNCTION
  let par = probarPar(num);
  let fib = probarFibonacci(num);
  let primo = probarNumeroPrimo(num);

  return `El número ${num} ${par}, ${fib} y ${primo}`
}