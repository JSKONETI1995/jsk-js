let value = document.getElementById('value');
let incrementBtn = document.getElementById('increment');
let decrementBtn= document.getElementById('decrement');
let resetBtn = document.getElementById('reset');
let userInput= document.getElementById('input-feild');
let incrementByUserInput = document.getElementById('incup');
let decrementByUserInput = document.getElementById('decup');


incrementByUserInput.addEventListener ('click',()=>{ 
  let userValue= userInput.value;
  let convertToNumber = Number(userValue);

  let resultValue = value.textContent;
  let convertValueToNumber = Number(resultValue);
  let total =  convertToNumber + convertValueToNumber ;
  value.innerHTML = total;


});
decrementByUserInput.onclick = () =>{
  let userValue = userInput.value;
  let convertToNumber1 = Number(userValue);

  let resultValue = value.textContent;
  let convertValueToNumber2 = Number(resultValue);
  let total = convertValueToNumber2 -  convertToNumber1 ;
  value.innerHTML = total;

}


console.log(incrementByUserInput);

incrementBtn.onclick = () => {
    let convertNumberValue = Number(value.textContent);
    let addPlusOne = convertNumberValue + 1;
    value.innerHTML = addPlusOne;
}

decrementBtn.onclick = () => {
    let convertNumberValue = Number(value.textContent);
    let removeOneValue = convertNumberValue - 1;
    value.innerHTML = removeOneValue ;
}


resetBtn.onclick = () => value.innerHTML = 0;




