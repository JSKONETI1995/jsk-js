const arr = [1, 2, 3, 4, 5];
const str = arr.toString();
console.log(str); 



const str1 = arr.join(", ");
console.log(str1); 

const arr1 = ['s','u','r', 'y','a'];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3); 


const arr4 = [1, 2, 3, 4, 5];
arr.splice(2, 0, 6, 7);
console.log(arr4);

const arr5 = [1, 2, 3, 4, 5,2];
const newArr = arr5.slice(2, 4);
console.log(newArr); 


const index = arr5.lastIndexOf(2);
console.log(index);

const newArr2 = arr.map(element => element + 2);
console.log(newArr2); 


const newArr3 = arr.filter(element => element < 5);
console.log(newArr3); // 