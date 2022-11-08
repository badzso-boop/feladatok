// 7. Feladat:
// 	Készítsünk projektet, amelyben bemutatjuk egy kosárlabda bajnokság végén a csapat teljesítményét!
// 		f0.) Olvassa be a fájlból a játékosok nevét.

// let players = [];
// fetch("kosarasok.txt")
//   .then(response => response.text())
//   .then(data => {
//     players.push(data);
//     console.log(players);
//   });

let players = [
  "Hakeem Olajuwon",
  "Kobe Bryant",
  "Shaquille O’Neal",
  "Larry Bird",
  "Oscar Robertson",
  "Bill Russell",
  "Julius Erving",
  "Wilt Chamberlin",
  "Magic Johnson",
  "Kareem Abdul-Jabbar",
  "LeBron James",
  "Michael Jordan"
];

let points = [
  [18, 16, 42],
  [12, 22, 26],
  [27, 26, 22],
  [15, 12, 18],
  [24, 10, 10],
  [15, 28, 26],
  [6, 34, 35],
  [15, 30, 19],
  [18, 28, 16],
  [24, 34, 28]
];

//      	f1.) Kérje be játékosonként külön az 1, 2, 3 pontos kosarak számát 10 * 3 -as mátrixba, adja vissza a hívóprogramnak!
console.log("1. FELADAT");

let kosarak = [];

// for (let i = 0; i < players.length; i++) {
//   for (let j = 0; j < points[i].length; j++) {
//     let haromPontos = parseInt(points[i][0] / 3);
//     let ketPontos = parseInt(points[i][1] / 2);
//     let egyPontos = parseInt(points[i][2]);

//     kosarak[i][0] = haromPontos;
//     kosarak[i][1] = ketPontos;
//     kosarak[i][2] = egyPontos;
//   }
//   console.log(kosarak);
// }

//           f2.) Vegye át a mátrixot, írja ki versenyzőnként a szerzett pontok számát!
console.log("2. FELADAT");

// for (let i = 0; i < players.length; i++) {
//   let összPont = 0;
//   for (let j = 0; j < points[i].length; j++) {
//     összPont += parseInt(points[i][j]);
//   }
//   console.log(`${players[i]} összesen ${összPont} pontot szerzett.`);
// }

//           f3.) Vegye át a mátrixot, írja ki az 1,2,3 pontos kosarak számát!
console.log("3. FELADAT");

// }

//           f4.) Vegye át a mátrixot, írja ki, hogy ki dobta a legtöbb kosarat és mennyit(ha több van valamennyit ki kell írni)!
console.log("4. FELADAT");

for (let i = 0; i < players.length; i++) {
  let totalScoreOfPlayer = 0;
  for (let j = 0; j < points[i].length; j++) {
    totalScoreOfPlayer += points[i][j];
  }

  console.log(`${players[i]} összesen ${totalScoreOfPlayer} pontot szerzett.`);
}

//           f5.) Vegye át a mátrixot, írja ki pontszám szerint csökkenő sorrendben a 3 legjobb játékos nevét és a szerzett pontok számát!
console.log("5. FELADAT");

let jatekosNevek = [];
let összPontszamok = [];

for (let i = 0; i < players.length; i++) {
  let jatekosPontszam = 0;
  for (let j = 0; j < points[i].length; j++) {
    jatekosPontszam += points[j][i];
  }
  összPontszamok.push(jatekosPontszam);
  jatekosNevek.push(players[i]);

  for (let i = 0; i < összPontszamok.length - 1; i++) {
    for (let j = összPontszamok.length; j > 0; j++) {
      let segedJatekosPontszam = 0;
      let segedJatekosNev = "";

      if (összPontszamok[i] > összPontszamok[j]) {
        segedJatekosPontszam = összPontszamok[j];
        segedJatekosNev = jatekosNevek[j];

        összPontszamok[j] = összPontszamok[i];
        jatekosNevek[j] = jatekosNevek[i];

        összPontszamok[i] = segedJatekosPontszam;
        jatekosNevek[i] = segedJatekosNev;
      }
    }
  }
}

//           f6.) Vegye át a mátrixot, írja ki, volt - e olyan játékos aki nem dobott 3 pontos kosarat?
console.log("6. FELADAT");

let player = [];
for (let i = 0; i < players.length; i++) {
  for (let j = 0; j < points[i].length; j++) {
    if (points[i][0] === 0) {
      if (points[i][j] === 0) {
        if (!player.includes(players[i])) {
          player.push(players[i]);
        }
      }
    }
  }
}
for (let i = 0; i < player.length; i++) {
  console.log(`${player[i]} nem dobott hárompontost.`);
}
