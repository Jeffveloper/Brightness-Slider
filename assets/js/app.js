const input=document.getElementById("bright-progress"),progressBar=document.getElementById("progressBar"),fondo=document.getElementById("main"),img=document.getElementById("bright_img"),thumb=document.getElementById("thumb");input.oninput=function(){let t=this.value;t<=100&&t>60?progressBar.style.width=.95*t+"%":t<=60&&t>45?progressBar.style.width=.9*t+"%":t<=45&&t>20?progressBar.style.width=.85*t+"%":t<=20&&(progressBar.style.width=t-5+"%"),fondo.style.backgroundColor="rgb(68, 63, 114, "+t/100+")",img.style.transform="rotate("+2*t+"deg)"},input.addEventListener("mousedown",(function(){input.classList.add("borde-click")})),input.addEventListener("mouseup",(function(){input.classList.remove("borde-click")}));
//# sourceMappingURL=app.js.map