// Egy üzemanyag kútnál n számú autó tankolt. Program kérje be "*" végjelig az autók rendszámát és a tankolt mennyiséget, írja ki

// const fs = require("fs");
// async function asyncReadFile(petrol2) {
//   try {
//     const contents = await fsPromises.readFile(petrol2, "utf-8");
//     console.log(contents);
//     return arr;
//   } catch (err) {
//     console.log(err);
//   }
// }
// asyncReadFile("./petrol2.txt");

// const list = document.createElement("ul");
// document.body.appendChild(list);

// for (let i = 0; i < tomb.length; i++) {
//   var li = document.createElement("li");

//   list.appendChild(li);
//   li.innerHTML = li.innerHTML + tomb[i];
// }

// 		f1.) hány autó tankolt?

let cars = [
  "abc-123",
  "adv-234",
  "kjf-584",
  "ekr-456",
  "ker-456",
  "ked-623",
  "akc-123",
  "alv-264",
  "kjl-534",
  "kkr-457",
  "ner-452",
  "oed-627"
];
let petrol = [15, 18, 20, 25, 14, 22, 25, 13, 10, 35, 24, 12];

console.log(cars.length);
console.log(petrol.length);

// 		f2.) az autók összesen hány l üzemanyagot tankoltak?

{
  let sum = 0;
  for (i = 0; i < petrol.length - 1; i++) sum += petrol[i];
  console.log(sum);
}

// 		f3.) hány autó tankolt 21 l alatt, 21-30 l-ig és 30 liter felett?

{
  let sum = 0;
  for (i = 0; i < petrol.length - 1; i++) {
    if (petrol[i] < 21) {
      sum++;
      console.log(`${sum} autó tankolt 21l alatt.`);
    } else if (21 < petrol[i] < 30) {
      sum++;
      console.log(`${sum} autó tankolt 21l és 30l között.`);
    } else if (30 < petrol[i]) {
      sum++;
      console.log(`${sum} autó tankolt 30l fölött.`);
    }
  }
}

// 		f4.) volt-e 10 l alatti tankolás?

let under10L = false;
if (petrol[i] < 10) {
  under10L = true;
}
console.log(under10L);

// 		f5.) átlag felett tankoló autók rendszámát és a tankolt mennyiséget!
{
  let sum = 0;
  for (i = 0; i < petrol.length - 1; i++) sum += petrol[i];

  let avg = sum / petrol.length;
  let aboveAvg = [];
  if (petrol[i] > avg) {
    aboveAvg.push(petrol[i]);
    console.log(`${cars[i]} ${petrol[i]} az átlag felett tankolt.`);
  }
}
