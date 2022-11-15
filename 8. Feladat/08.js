// 8. Feladat:
// 	A program horgászverseny eredményeinek nyilvántartásához készül.
const fisherman = ["József", "János", "Géza", "Béla", "András", "Tamás"];
const catching = [8, 4, 6, 7, 5, 0];
// f1.) Függvény, "*" végjelig kérje be a horgászok nevét és a kifogott halak db számát, a két tömböt és a versenyzők számát adja vissza a hívóprogramnak!
console.log("1.FELADAT");
let totalFisherman = 0;

for (let i = 0; i < fisherman.length; i++) {
  totalFisherman++;
}
console.log(`${totalFisherman} horgász indult a horgászversenyen.`);

// f2.) Függvény, vegye át a két tömböt és az elemek számát, készítsen teljes listát képernyőre (versenyzők neve és db szám)!
console.log("2.FELADAT");
for (let i = 0; i < fisherman.length; i++) {
  for (let j = 0; j < catching.length; j++) {}
  console.log(`${fisherman[i]} ${catching[i]} halat fogott`);
}
// f3.) Függvény, vegye át a db szám tömböt és az elemek számát, írja ki, hogy a horgászok összesen hány db halat fogtak!
console.log("3.FELADAT");
let totalFish = 0;
for (let j = 0; j < catching.length; j++) {
  totalFish += catching[j];
}
console.log(`${totalFisherman} horgász összesen ${totalFish} halat fogott`);
// f4.) Függvény, vegye át a két tömböt és az elemek számát, írja ki a győztes nevét és db számát (ha több van, valamennyit)!
console.log("4.FELADAT");
for (let i = 0; i < fisherman.length; i++) {
  let sum = 0;
  let maxCatch = 0;
  let bestFisherman = 0;
  for (let j = 0; j < catching.length; j++) {
    sum += parseInt(catching[j]);

    if (catching[j] > maxCatch) {
      maxCatch = catching[j];
      bestFisherman = j;
    }
  }
  console.log(`A horgászverseny győztese ${fisherman[bestFisherman]} ${[maxCatch]} hallal`);
}
// f5.) Függvény, vegye át a két tömböt és az elemek számát, listázza ki az átlag felett teljesítők nevét db számát!
console.log("5.FELADAT");
let average = totalFish / totalFisherman;
console.log(average);
for (let j = 0; j < catching.length; j++) {
  let aboveAverage = 0;
  if (catching[j] > average) {
    aboveAverage = j;
  }
  console.log(`Átlag felett teljesített ${fisherman[aboveAverage]} ${catching[aboveAverage]} hallal`);
}
// f6.) Függvény, vegye át a db szám tömböt és az elemek számát, írja ki, volt-e olyan horgász, aki nem fogott halat?
console.log("6.FELADAT");

let effectiveFisherman = [];
for (let i = 0; i < fisherman.length; i++) {
  for (let i = 0; i < catching.length; i++) {
    if (catching[i] === 0) {
      if (!effectiveFisherman.includes(fisherman[i])) {
        effectiveFisherman.push(fisherman[i]);
      }
    }
  }
}
console.log(effectiveFisherman);
for (let i = 0; i < effectiveFisherman.length; i++) {
  console.log(`${effectiveFisherman[i]} nem fogott halat.`);
}
// 	A projekt menüvezérelt legyen!  A függvények meghívása az adott menüpont kiválasztásával történjen!
// 		Menüpontok (a felsorolt függvényeknek megfelelően):
// 			1. Adatbevitel
// 			2. Teljes lista
// 			3. Összes fogás
// 			4. Győztes(ek)
// 			5. Átlag felett teljesítők
// 			6. Nincs fogás
// 			7. Kilépés
