// Készítsünk projektek, amelyben a bináris és hexadecimális átváltásokat fogjuk gyakorolni.
// 	A feladat során nem szabad beépített függvényeket használni!
// 		f1.) Generáljon véletlenszerűen 10db számot majd írja ki egy "szamok.txt" fájlba, majd listázza ki ezeket a számokat a képernyőre.

let rndNum = [];

let counter = 1;
let prevRand = 1;

const rand = (max = 1000) => {
  for (let i = 0; i < 10; i++) {
    let time = new Date().getTime();
    let randValue = (time / counter / (prevRand + 1)) % max;
    counter++;
    prevRand = parseInt(Math.floor(randValue));
    randValue;
    return randValue;
  }
};

console.log(rand());

const fs = require("fs");

const content = rndNum;

fs.writeFile("./szamok.txt", content, err => {
  if (err) {
    console.error(err);
    return;
  }
});

// 		f2.) Olvassa be a generált számokat és mindegyiket váltsa át binárisba, majd listázza ki a képernyőre és mentse el a "binaris.txt"-be.

async function asyncReadFile(szamok) {
  try {
    const contents = await fsPromises.readFile(szamok, "utf-8");
    const arr = contents;
    console.log(arr);
    return arr;
  } catch (err) {
    console.log(err);
  }
}
asyncReadFile("./szamok.txt");

const binarisArr = arr => {
  let num = arr[i];
  let binary = (num % 2).toString();
  for (; num > 1; ) {
    num = parseInt(num / 2);
    binary = (num % 2) + binary;
  }
  return binary;
};

console.log(binarisArr());

const contentBinary = binary;

fs.writeFile("./binaris.txt", contentBinary, err => {
  if (err) {
    console.error(err);
    return;
  }
});

// 		f3.) Olvassa be az eredetileg generált számokat és mindegyiket váltsa át hexadecimálisba, majd listázza ki a képernyőre és mentse el
//      a "hexa.txt"-be.

let hexStr = arr[i].toString(16);
console.log(hexStr);

const contentHexa = binary;

fs.writeFile("./hexa.txt", contentHexa, err => {
  if (err) {
    console.error(err);
    return;
  }
});
