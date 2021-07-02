let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

//Triângulo
// ctx.beginPath();
// ctx.moveTo(0,250);
// ctx.strokeStyle = "blue";
// ctx.fillStyle = "green";
// ctx.lineTo(500,250);
// ctx.lineTo(0,0);
// ctx.lineTo(0,250);
// ctx.lineTo(250,125);
// ctx.closePath();
// ctx.stroke();
// ctx.fill();

//Círculo
ctx.beginPath();
ctx.strokeStyle = "red";
//distanciamento eixo x, //eixo y, raio, angulo começo, angulo término
ctx.arc(250,250,50,0,2*Math.PI);
ctx.stroke();
