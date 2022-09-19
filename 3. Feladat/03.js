// f1.) Adjunk  meg  egy  kiinduló  szót  konstansként,  majd  olvassunk  be  szavakat,  amíg  a felhasználó el nem rontja a szóláncot, írjuk "szavak.txt" állományba! Addig jó a szólánc, amíg az előző szó utolsó betűje megegyezik a következő szó első betűjével! Pl. alak,kati, ital, ló, ókor, ...

const data = document.createElement("input");
document.body.appendChild(data);

const next = document.createElement("button");
next.innerHTML = "Next";
document.body.appendChild(next);
document.addEventListener("click", showData());

const display = document.createElement("div");
display.id = "display";
document.body.appendChild(display);

function showData() {
  console.log(data.value);
  //   document.getElementById("display").innerHTML = data;
}

// function showData() {
//   //   let content = "";
//   //   let a = [];
//   console.log(input.value);
//   for (let i = 0; i < input.length; i++) {
//     console.log(input.value);
//   }

//   //document.getElementById("display").innerHTML = content + "</b>";
// }

// function addText() {
//   let tomb = [];
//   tomb.push(input.value);
//   console.log(tomb);
//   return tomb;
//   const textbox = document.createElement("p");
//   document.body.appendChild(textbox);
//   document.getElementsByName("textbox").innerHTML = input.value;

// do {
//  addText()
// }
// while (input.value!==alma)

// f2.) Listázzuk képernyőre a fájlban tárolt szavakat, írjuk ki a szólánc hosszát!
// f3.) Van-e két azonos szó az állományban?
// f4.) Rendezzük az 1. feladatban tárolt szavakat a szavak hossza alapján csökkenő sorrendbe, majd írjuk a "rendez.txt" állományba!
// f5.) Rendezzük az 1. feladatban tárolt szavakat abc sorrendbe, majd írjuk az "abc.txt" állományba!
