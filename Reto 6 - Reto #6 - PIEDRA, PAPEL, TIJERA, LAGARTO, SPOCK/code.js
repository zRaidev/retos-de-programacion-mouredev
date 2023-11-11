// 🗿 📄 ✂️ 🦎 🖖
const rules = {
  '🗿' : ['✂️','🦎'],
  '📄' : ['🗿','🖖'],
  '✂️' : ['📄', '🦎'],
  '🦎' : ['🖖','📄'],
  '🖖' : ['✂️','🗿']
}


const gameSession = sequences => {
  let pointsP1 = 0;
  let pointsP2 = 0;

  for (game of sequences) {
    const [p1, p2] = game;
    if (rules[p1].includes(p2)){
      console.log('Player 1')
      pointsP1++
    }
    else if (rules[p2].includes(p1)) {
      console.log('Player 2')
      pointsP2++
    }
    else console.log('Tie')
  }
  let winner = pointsP1 === pointsP2 
  ? "Empate" 
  : pointsP1 > pointsP2 
    ? "Ha ganado P1" 
    : "Ha ganado P2"
  console.log(winner)
}

gameSequences = [
  ["🗿","✂️"],
  ["✂️","🗿"],
  ["📄","✂️"]
]

gameSession(gameSequences)