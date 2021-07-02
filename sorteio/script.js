function printarVencedor(){
    let nmax = document.getElementById("entrada").value;
    let numero_sorteado = Math.round(Math.random() * nmax);

    document.getElementById("ns").innerText = numero_sorteado; 
}