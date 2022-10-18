// Készítsünk projektet, amelyben bemutatjuk egy kézilabda bajnokság végén (9 forduló) a csapat teljesítményét!
// 		f1.) Kérje be játékosonként azon belül fordulónként a szerzett gólok számát, adja vissza a hívóprogramnak!
// 		f2.) Vegye át a mátrixot, írja ki versenyzőnként a szerzett gólok számát és a játékosok legjobb eredményét!
// 		f3.) Vegye át a mátrixot, írja ki fordulónként a szerzett gólok számát és a fordulók legjobb eredményét!
// 		f4.) Vegye át a mátrixot, írja ki szerzett gólok szerint csökkenő sorrendben a játékosok nevét és a szerzett gólok számát!
// 		f5.) Vegye át a mátrixot, írja ki, minden játékos dobott-e gólt?
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

let players = ["Hakeem Olajuwon", "Kobe Bryant", "Shaquille O’Neal"];

let goals = [[8, 12, 5], [18, 22, 16], [15, 32, 26]];

for (let i = 0; i < players.length; i++) {
  for (let k = 0; k < goals.length; k++) {
    for (let j = 0; j < goals.length; j++) {
      console.log(`${players[i]} ${k + 1}.körben ${goals[k][i]}`);
    }
  }
}

let season = [
  ["Hakeem Olajuwon", "Kobe Bryant", "Shaquille O’Neal"],
  [[8, 12, 5], [18, 22, 16], [15, 32, 26]]
];

for (let i = 0; i < season.length; i++) {
  for(let )
  for (let j = 0; j < season[1].length; j++){
    console.log(`${season[0]}`)
  }
}
