var h3 = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('body');
var randomBtn = document.querySelector('.randomBtn');

h3.innerHTML = body.style.background;

function setGradient(){
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
    h3.textContent= body.style.background + ';';
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

randomBtn.addEventListener('click', function(e){

    var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    color1.value =  "#"+randomColor1;
    console.log(color1.value);

    var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    color2.value = "#"+randomColor2;
    console.log(color2.value);

    setGradient();
});