const myButton = document.querySelector('button');
const myBox = document.querySelector('.box');
const colors = ["url('/img/pik1.jpg')", "url('img/pik2.jpg')", "url('img/pik3.jpg')", "url('img/pik4.jpg')"];
myButton.addEventListener('click', changeColor);

function changeColor(){
    let randomIndex = Math.floor(Math.random() * colors.length);
    console.log(randomIndex);
    myBox.style.backgroundImage = colors[randomIndex];
}