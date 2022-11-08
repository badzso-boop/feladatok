// 7. Feladat:
// 	Készítsünk projektet, amelyben bemutatjuk egy kosárlabda bajnokság végén a csapat teljesítményét!
// 		f0.) Olvassa be a fájlból a játékosok nevét.


let players = [];


function Beolvas() {
  let file = document.getElementById("bemenet").files[0]

  if (file) {
      var reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = function (item) {
          players = item.target.result.split(',');
      }
      reader.onerror = function (evt) {
          console.log("error reading file");
      }
  }
}

let jatekosok = [
  "Hakeem Olajuwon",
  "Kobe Bryant",
  "Shaquille O’Neal",
  "Larry Bird",
  "Oscar Robertson",
  "Bill Russell",
  "Julius Erving",
  "Wilt Chamberlin",
  "Magic Johnson",
  "Kareem Abdul-Jabbar"
];

let kosarak = [
  [100, 100, 100],
  [12, 22, 26],
  [18, 16, 0],
  [12, 22, 0],
  [27, 26, 22],
  [15, 12, 18],
  [110, 110, 110],
  [15, 28, 26],
  [6, 34, 35],
  [15, 30, 19],
  [18, 28, 16],
  [24, 34, 28]
];

// f1.) Kérje be játékosonként külön az 1, 2, 3 pontos kosarak számát 10 * 3 -as mátrixba, adja vissza a hívóprogramnak!
// let kosarak = [];
// let n = 0;

// function f1() {
//   let egyPontos = document.getElementById("elso").value;
//   let kettoPontos = document.getElementById("masodik").value;
//   let haromPontos = document.getElementById("harmadik").value;

//   if (n < players.length) {
//     console.log("1. FELADAT");
//     kosarak.push(Array(egyPontos, kettoPontos, haromPontos));
//     n++;
//   } else {
//     alert("Minden jatekos kapott pontot!")
//   }

//   console.log(kosarak)
// }

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

// f2.) Vegye át a mátrixot, írja ki versenyzőnként a szerzett pontok számát!

function f2() {
  console.log("2. FELADAT");

  console.log(players)
  console.log(kosarak)
  
  for (let i = 0; i < players.length; i++) {
    let összPont = 0;
    for (let j = 0; j < kosarak[i].length; j++) {
      összPont += parseInt(kosarak[i][j]) * (j+1);
    }
    console.log(`${players[i]} összesen ${összPont} pontot szerzett.`);
  }
}

// f3.) Vegye át a mátrixot, írja ki az 1,2,3 pontos kosarak számát!
function f3() {
  console.log("3. FELADAT");

  let pontok = [0, 0, 0];

  for (let i = 0; i < kosarak.length; i++) {    
    for (let j = 0; j < kosarak[i].length; j++) {
      pontok[j] += parseInt(kosarak[i][j]);
    }
  }

  for (let i = 0; i < pontok.length; i++) {
    console.log((i+1) + " pontos dobások száma: " + pontok[i])
  }
}

// f4.) Vegye át a mátrixot, írja ki, hogy ki dobta a legtöbb kosarat és mennyit(ha több van valamennyit ki kell írni)!

function f4() {
  console.log("4. FELADAT");
  
  let max = 0;
  for (let i = 0; i < jatekosok.length; i++) {
    let totalScoreOfPlayer = 0;
    let BeforeTotalScoreOfPlayers = 0;

    for (let j = 0; j < kosarak[i].length; j++) {
      totalScoreOfPlayer += parseInt(kosarak[i][j]);
      BeforeTotalScoreOfPlayers += parseInt(kosarak[max][j]);
    }

    if (BeforeTotalScoreOfPlayers < totalScoreOfPlayer) {
      max = i;
    }
  }

  for (let i = 0; i < jatekosok.length; i++) {
    let totalScoreOfPlayer = 0;
    let maxTotalScoreOfPlayer = 0;

    for (let j = 0; j < kosarak[i].length; j++) {
      totalScoreOfPlayer += parseInt(kosarak[i][j]);
      maxTotalScoreOfPlayer += parseInt(kosarak[max][j]);
    }

    if (totalScoreOfPlayer == maxTotalScoreOfPlayer) {
      console.log(jatekosok[max] + " szerezte a legtöbb kosarat!");
    }
  }
  //console.log(`${players[i]} összesen ${totalScoreOfPlayer} pontot szerzett.`);
}

// f5.) Vegye át a mátrixot, írja ki pontszám szerint csökkenő sorrendben a 3 legjobb játékos nevét és a szerzett pontok számát!
function f5() {
  console.log("5. FELADAT");
  
  let jatekosNevek = [];
  let összPontszamok = [];
  
  for (let i = 0; i < jatekosok.length; i++) {
    let jatekosPontszam = 0;
    for (let j = 0; j < kosarak[i].length; j++) {
      jatekosPontszam += kosarak[i][j];
    }
    összPontszamok.push(jatekosPontszam);
    jatekosNevek.push(jatekosok[i]);
  }

  console.log(jatekosNevek)
  console.log(összPontszamok)
  
  for (let i = 0; i < (összPontszamok.length-1); i++) {
    for (let j = összPontszamok.length; j > 0; j--) {

      let segedJatekosPontszam = 0;
      let segedJatekosNev = "";
  
      if (összPontszamok[i] < összPontszamok[j]) {
        segedJatekosPontszam = összPontszamok[j];
        segedJatekosNev = jatekosNevek[j];
  
        összPontszamok[j] = összPontszamok[i];
        jatekosNevek[j] = jatekosNevek[i];
  
        összPontszamok[i] = segedJatekosPontszam;
        jatekosNevek[i] = segedJatekosNev;
      }
    }
  }

  console.log("---------------------------")
  for (let i = 0; i < jatekosNevek.length; i++) {
    //console.log(jatekosNevek[i] + ": " + összPontszamok[i]);
  }


  console.log(jatekosNevek)
  console.log(összPontszamok)
}

//           f6.) Vegye át a mátrixot, írja ki, volt - e olyan játékos aki nem dobott 3 pontos kosarat?
function f6() {
  console.log("6. FELADAT");
  
  let player = [];
  for (let i = 0; i < jatekosok.length; i++) {
      if (kosarak[i][2] === 0) {
        if (!player.includes(jatekosok[i])) {
          player.push(jatekosok[i]);
        }
      }
  }

  for (let i = 0; i < player.length; i++) {
    console.log(`${player[i]} nem dobott hárompontost.`);
  }

  "megint szakadozol"
}
