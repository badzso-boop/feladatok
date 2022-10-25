// Készítsünk projektet, amelyben bemutatjuk egy kézilabda bajnokság végén (9 forduló) a csapat teljesítményét!

//let players = ["Hakeem Olajuwon", "Kobe Bryant", "Shaquille O’Neal"];



//let goals = [[8, 10, 5], [18, 20, 16], [15, 20, 6]];


/*
1. fordulo hakeem: 8p
2. fordulo hakeem: 18p
3. fordulo hakeem: 15p
*/

let players = [
  "Hakeem Olajuwon",
  "Kobe Bryant",
  "Shaquille O’Neal",
  "Larry Bird",
  "Oscar Robertson",
  "Bill Russell",
  "Julius Erving",
  "Wilt Chamberlin",
  "Magic Johnson"
];

let goals = [
    [8, 12, 5, 0, 20, 14, 5, 26, 0],
    [18, 22, 16, 10, 32, 5, 28, 26, 0],
    [15, 32, 26, 0, 22, 15, 8, 30, 0],
    [20, 14, 5, 26, 8, 30, 28, 31, 0],
    [21, 32, 19, 28, 20, 14, 5, 26, 0],
    [18, 32, 5, 28, 21, 32, 19, 28, 0],
    [8, 30, 18, 31, 10, 32, 5, 26, 0],
    [16, 10, 32, 5, 22, 15, 8, 30, 0],
    [26, 0, 22, 15, 16, 10, 32, 5, 0]
];

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

//let players = ["Hakeem Olajuwon", "Kobe Bryant", "Shaquille O’Neal"]; -> 3
//let goals = [[8, 12, 5], [18, 22, 16], [15, 0, 6]];

//[8, 12, 5]

for (let i = 0; i < players.length; i++) {
  let sum = 0;
  let maxScoreOfTurn = 0;
  let maxScorePlayer = 0;
    for (let k = 0; k < goals[i].length; k++) {
      sum += parseInt(goals[i][k]);

      if (goals[i][k] > maxScoreOfTurn) {
        maxScoreOfTurn = goals[i][k];
        maxScorePlayer = k;
      }
    }

  console.log(
    `A ${[i + 1]}.fordulóban szerzett gólok száma ${sum}, a forduló legeredményesebb játékosa ${players[maxScorePlayer]} ${[
      maxScoreOfTurn
    ]} ponttal`
  );
}

//		f4.) Vegye át a mátrixot, írja ki szerzett gólok szerint csökkenő sorrendben a játékosok nevét és a szerzett gólok számát!

console.log("4.FELADAT");

let total = [];
let playersTotal = [];

for (let i = 0; i < players.length; i++) {
  let totalScoreOfPlayer = 0;

  for (let j = 0; j < goals[i].length; j++) {
    totalScoreOfPlayer += goals[j][i];
  }

  total.push(totalScoreOfPlayer);
  playersTotal.push(players[i]);
}



//2 for ciklussal a 2 vegebol elindulunk. AZ elsovel 0-rol indulunk (eleje) és a vege-1 -ig megyunk
for (let i = 0; i < playersTotal.length-1; i++) {
  //a belso for ciklussal a vegetol indulunk es egeszen 0-ig megyunk
  for (let j = playersTotal.length; j > 0; j--) {

    //letrehozunk a 2 tombnek 1-1 seged valtozot
    let segedTotal = 0;
    let segedPlayers = "";


    // leellenorizzuk hogy az elejetol indulo elem nagyobb-e a vegetol indulo elemnel es ha igen a seged valtozoval megcsereljuk oket 
    if (total[i] > total[j]) {
      segedTotal = total[i];
      segedPlayers = playersTotal[i];
  
      total[i] = total[j];
      playersTotal[i] = playersTotal[j];
      
      total[j] = segedTotal;
      playersTotal[j] = segedPlayers;
    }
  }
}




// 		f5.) Vegye át a mátrixot, írja ki, minden játékos dobott-e gólt?
console.log("5.FELADAT");

let dobottJatekos = [];

for (let i = 0; i < players.length; i++) {
  for (let j = 0; j < goals[i].length; j++) {
    if (goals[i][j] == 0) {
      if (!dobottJatekos.includes(players[i])) {
        dobottJatekos.push(players[i]); 
      }
    }
  }
}

for (let i = 0; i < dobottJatekos.length; i++) {
  console.log(dobottJatekos[i] + " volt hogy nem dobott gólt!")
}


// f6.) Vegye át a mátrixot, írja ki melyik fordulóban kinek sikerült a legtöbb gólt dobni? (ha több van, valamennyit ki kell írni!)

