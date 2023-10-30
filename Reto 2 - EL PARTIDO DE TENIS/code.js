let j1Points = 0;
let j2Points = 0;
let scoreJ1;
let scoreJ2;

function output(j1Points, j2Points, scoreJ1, scoreJ2) {
  if (j1Points == 0) scoreJ1 = "love";
  else if (j1Points == 1) scoreJ1 = "15";
  else if (j1Points == 2) scoreJ1 = "30";
  else if (j1Points == 3) scoreJ1 = "40";

  if (j2Points == 0) scoreJ2 = "love";
  else if (j2Points == 1) scoreJ2 = "15";
  else if (j2Points == 2) scoreJ2 = "30";
  else if (j2Points == 3) scoreJ2 = "40";

  if (j1Points == j2Points && j1Points >= 3 && j2Points >= 3) console.log('Deuce');
  else if (j2Points == j1Points + 2 && j1Points >= 3 && j2Points >= 3) console.log('Ha ganado el J2');
  else if (j1Points == j2Points + 2 && j1Points >= 3 && j2Points >= 3) console.log('Ha ganado el J1');
  else if (j1Points > j2Points && j1Points >= 3 && j2Points >= 3) console.log('Ventaja J1');
  else if (j1Points < j2Points && j1Points >= 3 && j2Points >= 3) console.log('Ventaja J2');
  else console.log(`${scoreJ1} - ${scoreJ2}`);
}

for (let i = 0; i < 8; i++) {
  if (i == 0) j1Points++;
  if (i == 1) j1Points++;
  if (i == 2) j2Points++;
  if (i == 3) j2Points++;
  if (i == 4) j1Points++;
  if (i == 5) j2Points++;
  if (i == 6) j1Points++;
  if (i == 7) j1Points++;
  output(j1Points, j2Points, scoreJ1, scoreJ2);
}