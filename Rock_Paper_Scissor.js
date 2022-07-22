let start = true;
const RPA = ["rock", "paper", "scissor"];
let score_member = 0;
let score_system = 0;

function RPS_Rndom() {
  let Random = Math.random() * 3;
  Random = Math.floor(Random);
  return Random;
}

while (start) {
  let system = RPS_Rndom();
  let str_system = RPA[system];
  let hand = prompt("Rock  Paper Scissor ?");
  alert(str_system);
  alert(hand);
  if (hand === RPA[0] && str_system !== RPA[0] && str_system === RPA[1]) {
    score_system++;
    alert("system wins" + "  score: " + score_system);
  } else if (
    hand === RPA[0] &&
    str_system !== RPA[0] &&
    str_system === RPA[2]
  ) {
    score_member++;
    alert("you win" + "  score: " + score_member);
  } else if (
    hand === RPA[1] &&
    str_system !== RPA[1] &&
    str_system === RPA[0]
  ) {
    score_member++;
    alert("you win" + "  score: " + score_member);
  } else if (
    hand === RPA[1] &&
    str_system !== RPA[1] &&
    str_system === RPA[2]
  ) {
    score_system++;
    alert("system wins" + "  score: " + score_system);
  } else if (
    hand === RPA[2] &&
    str_system !== RPA[2] &&
    str_system === RPA[0]
  ) {
    score_system++;
    alert("system wins" + "  score: " + score_system);
  } else if (
    hand === RPA[2] &&
    str_system !== RPA[2] &&
    str_system === RPA[1]
  ) {
    score_member++;
    alert("you win " + "  score: " + score_member);
  } else {
    alert("equel");
  }

  if (confirm("wanna continue ?") == true) {
    start = true;
  } else {
    start = false;
  }
}
if (score_member > score_system) {
  alert(`You won with ${score_member} scores`);
} else if (score_member < score_system) {
  alert(`system won with ${score_system} scores`);
}
