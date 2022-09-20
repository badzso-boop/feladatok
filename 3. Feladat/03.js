// f1.) Adjunk  meg  egy  kiinduló  szót  konstansként,  majd  olvassunk  be  szavakat,  amíg  a felhasználó el nem rontja a szóláncot, írjuk "szavak.txt" állományba! Addig jó a szólánc, amíg az előző szó utolsó betűje megegyezik a következő szó első betűjével! Pl. alak,kati, ital, ló, ókor, ...

let tomb = [];
const start = "alma";
tomb.push(start);

const data = document.createElement("input");
document.body.appendChild(data);
data.value = start;

const addBtn = document.createElement("button");
addBtn.innerHTML = "Add";
document.body.appendChild(addBtn);

addBtn.addEventListener("click", () => {
  while (true) {
    let str = data.value;
    if (start.charAt(start.length - 1) === str.charAt(0)) {
      tomb.push(str);
      str = "";
    } else {
      alert("Game over!");
    }
  }
});

const fs = require("fs");

let content = tomb;

fs.writeFile("./szavak.txt", content, err => {
  if (err) {
    console.error(err);
    return;
  }
});

// f2.) Listázzuk képernyőre a fájlban tárolt szavakat, írjuk ki a szólánc hosszát!

async function asyncReadFile(szavak) {
  try {
    const contents = await fsPromises.readFile(szavak, "utf-8");
    const arr = contents;
    console.log(arr);
    return arr;
  } catch (err) {
    console.log(err);
  }
}
asyncReadFile("./szavak.txt");

const list = document.createElement("ul");
document.body.appendChild(list);

for (let i = 0; i < tomb.length; i++) {
  var li = document.createElement("li");

  list.appendChild(li);
  li.innerHTML = li.innerHTML + tomb[i];
}

// f3.) Van-e két azonos szó az állományban?

const hasDuplicates = tomb => {
  let valuesSoFar = [];
  for (let i = 0; i < tomb.length; ++i) {
    let value = tomb[i];
    if (valuesSoFar in valuesSoFar) {
      return true;
    }
    valuesSoFar.push(value);
  }
  return false;
};
hasDuplicates();

// f4.) Rendezzük az 1. feladatban tárolt szavakat a szavak hossza alapján csökkenő sorrendbe, majd írjuk a "rendez.txt" állományba!

const sortByLengtgh = tomb.sort((a, b) => a.length - b.length);

content = sortByLengtgh;

fs.writeFile("./rendez.txt", content, err => {
  if (err) {
    console.error(err);
    return;
  }
});

// f5.) Rendezzük az 1. feladatban tárolt szavakat abc sorrendbe, majd írjuk az "abc.txt" állományba!

const sortByABC = tomb.sort();

content = sortByABC;

fs.writeFile("./abc.txt", content, err => {
  if (err) {
    console.error(err);
    return;
  }
});
