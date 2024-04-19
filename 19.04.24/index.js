let surya=[100,250,300,600,150,700];
let totalSum=surya.reduce((accumulator,num,index,arr) => accumulator+num,0);
console.log(totalSum);



console.log("*********************");
let changeNameBtn = document.getElementById('btn');



changeNameBtn.onclick =  () => 
{
    heading.textContent = "surya";
    heading.style.backgroundColor="red"

    btn.style.color = "red";
    btn.style.backgroundColor = "purple";btn.style.padding = '10px';
    javascriptheading.style.backgroundColor = "green";
}