// EXERCICIO 01 

let listaNumeros1 = [1, 3, 4, 9, 5, 7, 2, 6, 20, 11, 12, 17]

let resposta1 = listaNumeros1.sort(function (a, b) { return a - b })

let botao1 = document.getElementById("solucao1")

botao1.addEventListener("click", function () {
  document.getElementById("solucao1").innerHTML = resposta1;
});

// EXERCICIO 02

let listaNumeros2 = [1, 3, 4, 9, 5, 7, 2, 6, 15, 12]

let resposta2 = listaNumeros2.sort(function (a, b) { return b - a })

let botao2 = document.getElementById("solucao2")

botao2.addEventListener("click", function () {
  document.getElementById("solucao2").innerHTML = resposta2;
});

// EXERCICIO 03

let frase = "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

let resposta3 = frase.length

let botao3 = document.getElementById("solucao3")

botao3.addEventListener("click", function () {
  document.getElementById("solucao3").innerHTML = resposta3;
});

// EXERCICIO 04

let frasePrincipal = "O joão robou pão na casa do marcelo"

//  EXERCICIO 04.1

let resposta41 = frasePrincipal.replace("marcelo","joão")

let botao41 = document.getElementById("solucao41")

botao41.addEventListener("click", function () {
  document.getElementById("solucao41").innerHTML = resposta41;
});

//  EXERCICIO 04.2

let resposta42 = frasePrincipal.replace("pão","torta")

let botao42 = document.getElementById("solucao42")

botao42.addEventListener("click", function () {
  document.getElementById("solucao42").innerHTML = resposta42;
});

//  EXERCICIO 04.3

let resposta43 = frasePrincipal.split("joão")

let botao43 = document.getElementById("solucao43")

botao43.addEventListener("click", function () {
  document.getElementById("solucao43").innerHTML = resposta43;
});

//  EXERCICIO 04.4

let resposta44 = frasePrincipal.slice(5 ,frasePrincipal.length)

let botao44 = document.getElementById("solucao44")

botao44.addEventListener("click", function () {
  document.getElementById("solucao44").innerHTML = resposta44;
});

//  EXERCICIO 04.5

let resposta45 = frasePrincipal.concat(" da IBRS")

let botao45 = document.getElementById("solucao45")

botao45.addEventListener("click", function () {
  document.getElementById("solucao45").innerHTML = resposta45;
});

//  EXERCICIO 04.6

let resposta46 = resposta45.split("O joão robou pão na ")  // NAO CONSEGUI TIRAR O "MARCELO"

let botao46 = document.getElementById("solucao46")

botao46.addEventListener("click", function () {
  document.getElementById("solucao46").innerHTML = resposta46;
}); 

//  EXERCICIO 05

let listaNomes = ['João','Marcelo','Marcus','Lucas','Nelson']

//  EXERCICIO 05.1

let resposta51 = listaNomes.push("Azeite")

let botao51 = document.getElementById("solucao51")

botao51.addEventListener("click", function () {
  document.getElementById("solucao51").innerHTML = listaNomes;
}); 

//  EXERCICIO 05.2

let resposta52 = listaNomes.splice(1, 1)

let botao52 = document.getElementById("solucao52")

botao52.addEventListener("click", function () {
  document.getElementById("solucao52").innerHTML = listaNomes;
}); 

//  EXERCICIO 05.3

let resposta53 = listaNomes.sort() 

let botao53 = document.getElementById("solucao53")

botao53.addEventListener("click", function () {
  document.getElementById("solucao53").innerHTML = listaNomes;
}); 

//  EXERCICIO 05.4

let resposta54 = listaNomes.length 

let botao54 = document.getElementById("solucao54")

botao54.addEventListener("click", function () {
  document.getElementById("solucao54").innerHTML = resposta54;
}); 