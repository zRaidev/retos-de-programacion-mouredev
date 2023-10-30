const characters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#',
  '$', '%', '&', '*', '(', ')', '_', '-', '=', ',', '.'
];

let amountCharacter = Math.floor(Math.random() * 9) + 8;
let password = '';

for (let i = 0; i <= amountCharacter; i++) {
  let randomCharacters = Math.floor(Math.random() * 76);
  arrayToString = characters[randomCharacters];
  password = password.concat(arrayToString);
}
console.log(password);