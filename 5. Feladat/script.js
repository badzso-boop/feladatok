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

  console.log(cars.length)
  
  // 		f2.) a leggyorsabb autó rendszámát sebességét!
  
  let maxSpeed = 0;
  
  for (let i = 0; i < speed.length; i++) {
    if (speed[i] > speed[maxSpeed]) {
        //A sebesseg indexet rakod be a maxSpeed változóba és ezzel tudsz hivatkozni mind a ketto tombre
      maxSpeed = i;
    }
  }

  console.log("Rendszám: " + cars[maxSpeed] + ", Leggyorsabb: " + speed[maxSpeed]);
  
  // 		f3.) azon autók rendszámát és a büntetési tételét, amelyek a megengedett sebességhatárt 
  //        ( 90 km/h ) túllépték az alábbiak szerint (91-100 km/h 10000 Ft; 101-110 km/h 30000 Ft; 110 km/h felett 50000 Ft)!

  // 		f4.) az összes bírságot!
  
  let total = 0;

  for (let i = 0; i < speed.length; i++) {
    if (91 < speed[i]  && speed[i] < 100) {
      console.log(`${cars[i]} sebessége ${speed[i]}, büntetési tétele 10.000Ft`);
      total += 10000;
    } else if (101 < speed[i] && speed[i] < 110) {
      console.log(`${cars[i]} sebessége ${speed[i]}, büntetési tétele 30.000Ft`);
      total += 30000;
    } else if (110 < speed[i]) {
      console.log(`${cars[i]} sebessége ${speed[i]}, büntetési tétele 50.000Ft`);
      total += 50000;
    }
  }

  console.log(total); 
  
  // 		f5.) az autók hány %-a közlekedett szabályosan?
  
let szabalyos = 0;

for (let i = 0; i < speed.length; i++) {
    if (speed[i] < 90) {
        szabalyos++;
    }
}

console.log((szabalyos / speed.length) *100 + "%");