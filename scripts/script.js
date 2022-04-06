let InputCampoUm = document.getElementById("PrimeiroCampo");
let InputCampoDois = document.getElementById("SegundoCampo");

let resultado = document.getElementById("resultado");

function calcular() {
  console.log("Calculando...");

  let larguraDaParede = inputPrimeiroNumber.value;
  let alturaDaParede = inputSegundoNumber.value;

  let area = larguraDaParede * alturaDaParede;
  let tinta = area / 2;

  console.log(area, tinta);

  resultado.innerHTML = `<p>Sua parede tem a dimensão de ${larguraDaParede}x${alturaDaParede} e sua área é de ${area}m²</p>`                      
  resultado.innerHTML += `<p>Para pintar essa parede, você presisará de ${tinta}L de tinta</p>` 
}
