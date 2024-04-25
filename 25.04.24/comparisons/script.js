let letter = 'v';
let letter2 = 'A';
let number = 97;
let compare = letter >= number;
console.log(compare);


let name = "JAY";
let name2  = "Surya";
console.log(name > name2);






let arr = [ {name : "CSA", courses: ["React js", "Node js", "Full stack"] },  "Sai", "Bharath", "Surya", "Sreekanth", "Divya", "Priya", "Raju", "Sanjeeva", "Karthik", 15, 20, 5, { name : "CSA" }, [12, true, false], "Raju",  555];


let first = arr[0].courses[1];
console.log(first);



let arr2 = [1 , 2 , " ", "Surya", "jaya"];
let result  = arr2.every((ele) => ele);
let arr3 = [0,0,false, null, undefined, ''];
let res = arr3.some((ele) => ele);
console.log(res);


let friend = arr[1]
let newName = friend.slice(0, 5).toUpperCase(); // method chaining
console.log(newName);
let takingSomePart = arr.slice(3);
console.log(takingSomePart);

let index = arr.indexOf("surya");
console.log(index);
let lastIndex = arr.lastIndexOf("surya");
console.log(lastIndex);








// console.log(arr[0]);
// console.log(arr[1]);








