const BtnOn = document.getElementById("on");
const BtnOff = document.getElementById("off");
const img = document.getElementById("imagem");


function LampON() {
    img.src = "./images/acesa.gif"
}

BtnOn.addEventListener("click", LampON);


function LampOff() {
    img.src = "./images/apagada.gif"
}


BtnOff.addEventListener("click", LampOff);


function dbClica() {
    img.src = "./images/quebrada.jpg"
}

BtnOn.addEventListener("dblclick", dbClica)