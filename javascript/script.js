let t1 = document.getElementById("t1");
let t2 = document.getElementById("t2");

t1.onclick = deixaMaiusculo;
t2.onclick = deixaMaiusculo;

function deixaMaiusculo(){
    this.innerHTML = this .innerHTML.toUpperCase();
}
