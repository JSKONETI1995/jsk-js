let SuryaDay = new Date();
let day = SuryaDay.getDay();
let year = SuryaDay.getFullYear();
let month = SuryaDay.getMonth();
let hours = SuryaDay.getHours();
let minutes = SuryaDay.getMinutes();
let seconds = SuryaDay.getSeconds()
console.log(SuryaDay);
console.log('Hours', hours);
console.log('Minutes', minutes);
console.log('seconds', seconds);
console.log('Month', month);
console.log(day);
console.log(year);

//Squareroot:

let number = 525;
let  squareRoot = Math.sqrt(number);
console.log('Root number' , squareRoot);


let pi=3.141;
let floorValue = Math.floor(pi);
console.log('pi ' , floorValue);
let circle=2*3.141
let ceilValue = Math.floor(pi);
console.log('pi ' , ceilValue);

let samSung= 145850.9866523623;
let appleIphone  = 145850.8526; 

let roundValue = Math.round(samSung);
console.log('Above Value ', roundValue);
let belowValue = Math.round(appleIphone);
console.log('Below value ', belowValue);
let king1 = 15;
let king2 = 20;

let myNumber = Math.min(king1, king2);
console.log('Min Number' , king1);

let maxNumber = Math.max(king1, king2);
console.log('Max Number ', king2);

let random = Math.random();
let generateRandom = (random*1000)+1
console.log('generateRandom' ,Math.floor(generateRandom));