var vitorias = 0;
var derrotas = 0;

function chamadaForm() {
  //APAGAR CONTEUDO
  document.getElementById("mostrar_valor").innerText = "";

  // PEGA O VALOR DE PARA INSERIR A QUANTIDADE
  var numero_escolhido = document.getElementById("quantidade").value;

  // SORTEIO DE NUMEROS ALEATORIOS
  var num = Math.floor(Math.random(0) * parseInt(numero_escolhido));
  console.log(num, numero_escolhido);

  var DIGITO_USUARIO = document.getElementById("userGuess").value == "";
  var DIGITO_USUARIO_2 = document.getElementById("userGuess").value;
  // VERIFICA SE RESULTADO ESTA SEM INDICESs
  if (DIGITO_USUARIO == true) {
    document.getElementById("mostrar_valor").innerHTML +=
      "SEM VALOR" + "<br />" + "VERIFIQUE SE HA LETRAS OU ESPACOS EM BRANCO";
  } else if (DIGITO_USUARIO_2 > numero_escolhido) {
    // LIMPAR
    document.getElementById("mostrar_valor").innerText = "";

    // SE VALOR FOR MAIOR QUE QUANTIDADE
    document.getElementById("mostrar_valor").innerHTML +=
      "OPS! PARECE QUE VOCE PASSOU DO LIMITE" + "<br />";
  } else if (num == DIGITO_USUARIO) {
    // MARCA PONTUACAO
    vitorias += 1;
    document.getElementById("mostrar_valor").innerHTML += "Ganhou!" + "<br />";
    document.getElementById("vitoria").innerHTML = vitorias;
  } else {
    document.getElementById("mostrar_valor").innerHTML += "Perdeu!" + "<br />";
    derrotas += 1;
    document.getElementById("derrotas").innerHTML = derrotas;
  }
}
