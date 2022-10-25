// Készítsünk projektet, amelyben bemutatjuk egy kézilabda bajnokság végén (9 forduló) a csapat teljesítményét!

let players = ["Hakeem Olajuwon", "Kobe Bryant", "Shaquille O’Neal"];

let goals = [[8, 12, 5], [18, 22, 16], [15, 0, 6]];

// 		f1.) Kérje be játékosonként azon belül fordulónként a szerzett gólok számát, adja vissza a hívóprogramnak!
console.log("1.FELADAT");
for (let i = 0; i < players.length; i++) {
  for (let j = 0; j < goals[i].length; j++) {
    console.log(`${players[i]} ${j + 1}.körben ${goals[j][i]} gólt lőtt.`);
  }
}

// 		f2.) Vegye át a mátrixot, írja ki versenyzőnként a szerzett gólok számát és a játékosok legjobb eredményét!
console.log("2.FELADAT");
for (let i = 0; i < players.length; i++) {
  let totalScoreOfPlayer = 0;
  for (let j = 0; j < goals[i].length; j++) {
    totalScoreOfPlayer += goals[j][i];
  }
  console.log(`${players[i]} összesen ${totalScoreOfPlayer} pontot szerzett.`);
}

for (let i = 0; i < players.length; i++) {
  let bestScoreIndex = 0;
  for (let j = 0; j < goals[i].length; j++) {
    if (goals[j][i] > bestScoreIndex) bestScoreIndex = goals[j][i];
  }
  console.log(`${players[i]} legjobb eredménye: ${[bestScoreIndex]} pont.`);
}

// 		f3.) Vegye át a mátrixot, írja ki fordulónként a szerzett gólok számát és a fordulók legjobb eredményét!
console.log("3.FELADAT");
for (let i = 0; i < players.length; i++) {
  let sum;
  let maxScoreOfTurn = 0;
  for (let j = 0; j < goals[i].length; j++) {
    for (let k = 0; k < goals[j].length; k++) {
      sum = goals[j].reduce((p, c) => {
        return p + c;
      }, 0);

      if (goals[j][i] > maxScoreOfTurn) maxScoreOfTurn = goals[j][i];
    }
  }
  console.log(
    `A ${[i + 1]}.fordulóban szerzett gólok száma ${sum}, a forduló legeredményesebb játékosa ${players[i]} ${[
      maxScoreOfTurn
    ]} ponttal`
  );
}

// 		f4.) Vegye át a mátrixot, írja ki szerzett gólok szerint csökkenő sorrendben a játékosok nevét és a szerzett gólok számát!
console.log("4.FELADAT");

let total = [];
for (let i = 0; i < players.length; i++) {
  let totalScoreOfPlayer = 0;
  for (let j = 0; j < goals[i].length; j++) {
    totalScoreOfPlayer += goals[j][i];
  }
  total.push(totalScoreOfPlayer);
  console.log(players[i][totalScoreOfPlayer]);
}
console.log(total);

// 		f5.) Vegye át a mátrixot, írja ki, minden játékos dobott-e gólt?
console.log("5.FELADAT");
for (let i = 0; i < players.length; i++) {
  for (let j = 0; j < goals[i].length; j++) {
    if (goals[j][i] === 0) {
      console.log(`${players[i]} nem dobott gólt a ${[j + 1]}.fordulóban.`);
    } else if (goals[j][i] !== 0) {
      console.log("Minden játékos dobott gólt");
    }
  }
}
// 		f6.) Vegye át a mátrixot, írja ki melyik fordulóban kinek sikerült a legtöbb gólt dobni? (ha több van, valamennyit ki kell írni!)

// let players = [
//   "Hakeem Olajuwon",
//   "Kobe Bryant",
//   "Shaquille O’Neal",
//   "Larry Bird",
//   "Oscar Robertson",
//   "Bill Russell",
//   "Julius Erving",
//   "Wilt Chamberlin",
//   "Magic Johnson",
//   "Kareem Abdul-Jabbar",
//   "LeBron James",
//   "Michael Jordan"
// ];

// let goals = [
//   [8, 12, 5, 0, 20, 14, 5, 26, 21, 32, 19, 28],
//   [18, 22, 16, 10, 32, 5, 28, 26, 32, 29, 31, 24],
//   [15, 32, 26, 0, 22, 15, 8, 30, 18, 31, 21, 14],
//   [20, 14, 5, 26, 8, 30, 18, 31, 21, 32, 19, 28],
//   [21, 32, 19, 28, 20, 14, 5, 26, 16, 10, 32, 5],
//   [10, 32, 5, 28, 21, 32, 19, 28, 20, 14, 5, 26],
//   [8, 30, 18, 31, 10, 32, 5, 26, 0, 22, 15, 14],
//   [16, 10, 32, 5, 22, 15, 8, 30, 10, 32, 5, 28],
//   [26, 0, 22, 15, 16, 10, 32, 5, 8, 30, 18, 31]
// ];
