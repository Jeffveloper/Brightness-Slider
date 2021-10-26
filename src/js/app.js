const input = document.getElementById('bright-progress');
const progressBar = document.getElementById('progressBar');
const fondo = document.getElementById('main');
const img = document.getElementById('bright_img');
const thumb = document.getElementById('thumb');


input.oninput = function () {
    let valor = this.value;
    if (valor <= 100 && valor>60){
        progressBar.style.width = valor*.95 + '%';
    }
    else if (valor <= 60 && valor>45){
        progressBar.style.width = valor * .9 + '%';
    }
    else if (valor <= 45 && valor>20){
        progressBar.style.width = valor * .85 + '%';
    }
    else if (valor <= 20){
        progressBar.style.width = valor-5 + '%';
    }

    fondo.style.backgroundColor = "rgb(68, 63, 114, " + valor/100 + ")";

    img.style.transform = "rotate("+valor*2+"deg)";
}

input.addEventListener("mousedown", function() {
    input.classList.add("borde-click");
})

input.addEventListener("mouseup", function() {
    input.classList.remove("borde-click");
})
