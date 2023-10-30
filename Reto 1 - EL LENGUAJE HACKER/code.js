let txt = prompt('Texto que desea transformar');
let txtUpper = txt.toUpperCase();
let finalText= '';

for (let letter of txtUpper) {
  if (letter == 'A') letter = '4';
  else if (letter == 'B') letter = 'I3';
  else if (letter == 'C') letter = '[';
  else if (letter == 'D') letter = '|)';
  else if (letter == 'E') letter = '3';
  else if (letter == 'F') letter = '|=';
  else if (letter == 'G') letter = '&';
  else if (letter == 'H') letter = '#';
  else if (letter == 'I') letter = '1';
  else if (letter == 'J') letter = ',_|';
  else if (letter == 'K') letter = '>|';
  else if (letter == 'L') letter = '|';
  else if (letter == 'M') letter = 'IVI';
  else if (letter == 'N') letter = '/V';
  else if (letter == 'O') letter = '0';
  else if (letter == 'P') letter = '|*';
  else if (letter == 'Q') letter = '(_,)';
  else if (letter == 'R') letter = 'I2';
  else if (letter == 'S') letter = '5';
  else if (letter == 'T') letter = '7';
  else if (letter == 'U') letter = '(_)';
  else if (letter == 'V') letter = '|/';
  else if (letter == 'W') letter = 'VV';
  else if (letter == 'X') letter = '><';
  else if (letter == 'Y') letter = '`/';
  else if (letter == 'Z') letter = '2';
  finalText = finalText.concat(letter);
}
console.log(finalText);