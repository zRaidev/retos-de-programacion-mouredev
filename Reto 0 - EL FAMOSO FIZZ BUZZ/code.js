for (let i = 1; i <= 100; i++) {
  if (i%3/100 == 0 && i%5/100 == 0) console.log('FIZZBUZZ');
  else if (i%3/100 == 0) console.log('FIZZ');
  else if (i%5/100 == 0) console.log('BUZZ');
  else console.log(i);
}