//terinary operator
let c = 25;
let d = 29;

let sum = c+d;
console.log(sum);
let compare = sum<50 ? true:false;
console.log(compare);


//spread & rest Operators

let favourite = ['Goa', 'Pondicherry', 'Gokarna'];
let favourites = ['Australia','Bnagkok','Canada'];

let spre = [...favourite,...favourites ]
console.log(spre);



let [a,b,...rest] = favourites
console.log([a,b]);
console.log(a,b);
console.log(rest);
console.log([rest]);

//object destructruring:

const myDetails={
    name: 'surya',
    age: 28,
    job: 'Full stack Web developer',
    mobile: '9886921335',
    names: function(){
        console.log(this.mobile);
    }
}
myDetails.names();

let {name,mobile,age} = myDetails;
console.log(name);
console.log(mobile);
console.log(age);


//STRINGIFY & PARSE


let  objectData =JSON.stringify(myDetails);
let  objectDate =JSON.parse(objectData);

console.log(objectData);
console.log(objectDate);

//this
let names = {
    person : 'surya',
    height : 5.8,
    dob:'14/12/1996',
    hobbies:['Reading','Watching movies','playing online games'],
     name: function(){
     console.log(this.hobbies);
}
};
names.name()