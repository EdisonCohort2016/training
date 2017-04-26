console.log('character generator prototype');

/*
Dice rolling
Populate Character Stats
str
dex
con
wis
int
chr
Display stats on screen
Re-roll when button pressed
*/


// Math.random();
// parseInt();



for (var i = 0; i < 6; i++) {
  console.log(parseInt(Math.random() * 6) + 1);
}

function rollDice(nDice, nSides, modifier) {
  var count = 0;

  for (var i = 0; i < nDice; i++) {
    count += (parseInt(Math.random() * nSides + 1)) + modifier;
  }

  return count;
}

console.log(rollDice(3, 6, 1));

// rollDice(3, 6, 1);
// var conModifier = conToModifier(player.con);
// rollDice(1, 20, conModifier);
