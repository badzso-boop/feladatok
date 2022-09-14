// f1.) függvény1 átveszi a kör sugarát visszaadja területét!

const terulet = (r) => {
    let res = Math.pow(r, 2) * Math.PI;
    return Math.round(res);
}

console.log(terulet(2))

// f2.) függvény2 átvesz egy egész számot, stringben visszaadja hogy "páros" vagy "páratlan"!

//let n = Number.parseFloat(n);

const oddOrEven = (n) => {
    if (n % 2 === 0) {
        return "páros";
    } else {
        return "páratlan";
    }
}

// f3.) függvény3 átveszi egy labdarúgó mérkőzés végeredményét (rúgott és kapott gólok számát), visszaadja stringben "hazai győzelem" "döntetlen" vagy "vendég győzelem"!

let getGoals;
let kickedGoals;
let result = getGoals - kickedGoals;

const final = (result) => {
    if (result > 0) {
        return "hazai győzelem";
    } else if (result = 0) {
        return "döntetlen"
    } else {
        return "vendég győzelem"
    }
}

// f4.) függvény4 átveszi a henger sugarát és magasságát, visszaadja a térfogatát!

let r = 4;
let m = 10;

const volume = (r, m) => {
    let res = parseInt(Math.pow(r, 2)) * Math.PI * m;
    return Math.round(res);
}

// f5.) függvény5 átveszi egy négyzetes hasáb alapélét és magasságát, visszaadja a felszínét!

let alapel = 3;
let m2 = 6;

let tNegyzet = Math.pow(alapel,2);
let tTeglalap = alapel * m;

console.log(tTeglalap)

const felszin = (tNegyzet, tTeglalap) => {
    let res = (2 * tNegyzet) + (4 * tTeglalap);
    return res;
}

// f6.) függvény6 átveszi egy tanuló félévi és évvégi átlageredményét, stringben visszaadja, hogy "rontott" "javított" vagy "azonos szinten teljesített".

let felev;
let evveg;

const teljesitmeny = (felev, evveg) => {
    if (felev > evveg) {
        return "rontott"
    } else if (felev < evveg) {
        return "javított"
    } else {
        return "azonos szinten teljesített"
    }
}
