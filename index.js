//!Questão 1
const arr1 = [1, 2, 3];

function multiplyArray(array) {
  var multiplicar = 1;
  for (var i = 0; i < array.length; i++) {
    multiplicar = multiplicar * array[i];
  }
  return multiplicar;
}
console.log(multiplyArray(arr1));

//!Questão 2
function turnUpperCase(str, char) {
  let newStr = "";

  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      newStr += char.toUpperCase();
    } else {
      newStr += str[i];
    }
  }

  return newStr;
}
console.log(turnUpperCase("paralelepipedo", "p"));

//!Questão 3
const alunos = ["Giuliana", "Guilherme", "Beatriz"];
const notas = [
  [0, 50, 0],
  [100, 90, 80],
  [100, 95, 80],
];

function calcMediaAlunos(alunos, notas) {
  let somaNotas = [0, 0, 0];
  let mediaAlunos = [0, 0, 0];
  let media = 0; //soma = [somaDoPrimeiroArrayScore, somaDoSegundoArrayScore]

  for (let i = 0; i < alunos.length; i++) {
    for (let j = 0; j < notas[i].length; j++) {
      somaNotas[i] = somaNotas[i] + notas[i][j];

      for (let k = 0; k < notas[i].length; k++) {
        mediaAlunos[i] = somaNotas[i] / notas[i].length;
      }
    }

    media += somaNotas[i];

    console.log(`Soma das notas do aluno ${alunos[i]}: ${somaNotas[i]}`);
    console.log(`Média das notas do aluno ${alunos[i]}: ${mediaAlunos[i]}`);
    if (mediaAlunos[i] >= 70) {
      console.log(`O(a) aluno(a) ${alunos[i]} passou por média!'`);
    } else {
      console.log(`O(a) aluno(a) ${alunos[i]} não passou por média!'`);
    }
  }

  const mediaGeral = media / alunos.length;

  console.log(`A média geral da turma foi: ${mediaGeral}`);
}
calcMediaAlunos(alunos, notas);

//!Questão 4
function trianguloQuadrilatero(n) {
  if (n != null && n > 0 && n < 20) {
    for (let i = 1; i < n; i++) {
      let output = "";
      for (let j = 1; j < n - i; j++) {
        output += " ";
      }
      for (let k = 0; k < 2 * i - 1; k++) {
        output += "*";
      }
      console.log(output);
    }
  } else {
    console.log("O número informado não é válido para essa operação!");
  }
}
trianguloQuadrilatero(6);

//!Questão 5
//criação da funcção
function pascalTriangulo(linhas) {
  //criação do array a ser preenchidp
  let triangulo = [];

  for (let i = 0; i < linhas; i++) {
    //criada primeira linha do triangulo
    triangulo[i] = [];

    triangulo[i][0] = 1;
    //Alocado "1" pois o primeiro elemento, na posição "0" do index, do triangulo pascal é sempre 1
    for (let j = 1; j < i; j++) {
      triangulo[i][j] = triangulo[i - 1][j - 1] + triangulo[i - 1][j];
      // triangulo[0][1] = triangulo[0-1][1-1]  + triangulo[0-1][1]
      //triangulo[0][1] = [1][0] + [0][1] = 1
      //soma do elemento das linhas anteriores, da esquerda e da direita
      //É retirado 1 pra que os valores corretos sejam somados, mantendo 1 na primeira e ultima posição da linha
      //Somando os valores da linha acima
    }

    triangulo[i][i] = 1;
    // Foi alocado"1" no último elemento, pois o último elemento da linha é sempre 1 no pascal
  }

  //retornando o array triangulo
  return triangulo;
}

//chamada da função e print do resultado na tela
console.log(pascalTriangulo(6));
