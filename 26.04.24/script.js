

let inputImage  = document.getElementById('input-field');
let  inputName = document.getElementById('input-name');

let outputImage = document.getElementById('output-image');
let  outputName = document.getElementById('output-name');

let outputDescription = document.getElementById('Output-decsription');

inputImage.onchange = (event) => {

    let imagePath = event.target.files[0];
    let path = URL.createObjectURL(imagePath);

    
    outputName.innerHTML = inputName.value; 
    outputImage.src = path
    inputName.value = ''

    outputDescription.innerHTML = inputDescription.value;
    outputDescription.src = path
    inputDescription.value = ''
};