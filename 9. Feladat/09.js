// 9. Feladat:

const players = [
  "Tomas Berdych",
  "Novak Djokovic",
  "Andy Murray",
  "Stanislas Wawrinka",
  "Juan Martin Del Potro",
  "Roger Federer",
  "Richard Gasquet",
  "Jo-Wilfried Tsonga",
  "Rafael Nadal",
  "David Ferrer"
];

const points = [4890, 10260, 4885, 5650, 4870, 4625, 2950, 2785, 14085, 5160];

// A mellékelt "tenisz.txt" állományban a világranglistán legjobb helyen szereplő teniszezők adatait tároljuk, egymást követő sorokban a teniszező neve majd a szerzett pontjainak száma.

const list = document.createElement("ul");
const listItem = document.createElement("li");
list.appendChild(listItem);

for (let i = 0; i < players.length; i++) {
  for (let j = 0; j < points.length; j++) {
    document.getElementsByTagName("li").innerText = "teniszezők neve és pontszáma";
  }
}

// 	f1.) Olvassa be a fájlban tárolt adatokat, és listázza képernyőre a versenyzők adatait, majd írja ki a versenyzők számát és a versenyzők által szerzett összpontszámot!

console.log("1. Feladat");
let sum = 0;

for (let j = 0; j < points.length; j++) {
  sum += points[j];
}

for (let i = 0; i < players.length; i++) {
  console.log(`${players[i]} - ${points[i]} pont`);
}

console.log(`${players.length} versenyzó`);
console.log(`Összpontszám: ${sum}`);

// 	f2.) Írja ki, a leghosszabb nevü teniszező adatait!
console.log("2. Feladat");
let longName = "";

for (let i = 0; i < players.length; i++) {
  if (players[i].length > longName.length) {
    longName = players[i];
  }
  console.log(players[i].length);
}
console.log(longName);

// 	f3.) Készítsen eredmény sorrendet, írja ki a szerzett pontok száma szerint csökkenő sorrendben a teniszezők adatait az "eredmeny.txt" állományba! (Egy sorban tároljuk a nevet majd szóközzel elválasztva a pontszámot!)
console.log("3. Feladat");

// for (let i = 0; i < players.length; i++) {
//   for (let i = 0; i < points.length; i++) {
//     for (let j = i; j < points.length; j++) {
//       let swapPlayer = "";
//       let swapPoint = 0;

//       if (points[i] < points[j]) {
//         swapPoint = points[j];
//         swapPlayer = players[j];

//         points[j] = points[i];
//         players[j] = players[i];

//         points[i] = swapPoint;
//         players[i] = swapPlayer;
//       }
//     }
//   }
// }
