console.log("sanity test");

/*
3d6
1d20

random()

*/


// Simulate 3d6
var rollValue = 0;
for (var i = 0; i < 3; i++) {
  rollValue += parseInt(Math.random() * 6) + 1;
}
console.log(rollValue);

// nDice D nSides   ie 3d6
function rollDice(nDice, nSides, modifier = 0) {
  var rollValue = 0;
  for (var i = 0; i < nDice; i++) {
    rollValue += parseInt(Math.random() * nSides) + 1;
  }

  return rollValue + modifier;
}

console.log(rollDice(3, 6));
console.log(rollDice(1, 20));
console.log(rollDice(1, 12, 100));

function rollDiceObject(nDice, nSides, modifier = 0) {
  var o = {
    nDice: nDice,
    nSides: nSides,
    modifier: modifier,
    rolls: []
  }

  var value = 0;
  for (var i = 0; i < nDice; i++) {
    var temp = parseInt(Math.random() * nSides) + 1;
    value += temp;
    o.rolls.push(temp);
  }

  o.valueNoMod = value;
  o.value = value + modifier;

  return o;
}

console.log(rollDiceObject(3, 6, 1));
