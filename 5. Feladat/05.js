// Egy forgalom ellenőrző ponton n számú autó haladt keresztül. Írjon programot, amely "*" végjelig bekéri az autók rendszámát, sebességét, kiírja
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

let speed = [65, 78, 70, 85, 94, 82, 95, 103, 100, 73, 93, 112];

//      	f1.) az áthaladó autók számát!

// 		f2.) a leggyorsabb autó rendszámát sebességét!

let maxSpeed = speed[0];

for (let i = 0; i < speed.length - 1; i++) {
  if (speed[i] > maxSpeed) {
    maxSpeed = speed[i];
    console.log(maxSpeed);
  }
}

// 		f3.) azon autók rendszámát és a büntetési tételét, amelyek a megengedett sebességhatárt ( 90 km/h ) túllépték az alábbiak szerint (91-100 km/h 10000 Ft; 101-110 km/h 30000 Ft; 110 km/h felett 50000 Ft)!

for (let i = 0; i < speed.length - 1; i++) {
  if (91 < speed[i] < 100) {
    console.log(`${cars[i]} sebessége ${speed[i]}, büntetési tétele 10.000Ft`);
  } else if (101 < speed[i] < 110) {
    console.log(`${cars[i]} sebessége ${speed[i]}, büntetési tétele 30.000Ft`);
  } else if (110 < speed[i]) {
    console.log(`${cars[i]} sebessége ${speed[i]}, büntetési tétele 50.000Ft`);
  }
}

// 		f4.) az összes bírságot!

let total = 0;

for (let i = 0; i < speed.length - 1; i++) {
  if (91 < speed[i] < 100) {
    total += 10000;
  } else if (101 < speed[i] < 110) {
    total += 30000;
  } else if (110 < speed[i]) {
    total += 50000;
  }
}
console.log(total);

// 		f5.) az autók hány %-a közlekedett szabályosan?

for (let i = 0; i < speed.length - 1; i++) {
  const normaly = () => {
    let n = 0;
    if (speed[i] < 90) {
      n++;
    }
    console.log(n / speed.length);
  };
}
