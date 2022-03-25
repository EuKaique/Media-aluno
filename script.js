//Declaração das variáveis
var contador = 0;
var notas = [];
var resultado;

//Soma das notas do aluno com seu retorno
function media(){   
    let soma = 0;

    for(let i in notas){
        soma += notas[i];
    }
    return soma;
}

//Oculta o H2 e o botão voltar
var h2 = document.querySelector('h2');
h2.style.display="none";
var voltar = document.querySelector('button');
voltar.style.display="none";

//Botão que recarrega a página
document.getElementById("recarrega").addEventListener("click",()=>{
    window.location.reload();
});

//Função que carrega o script principal com a função média
function fazMedia(){
    //Ocultar h1, imagem, botão e texto começar ao receber um clique
    var h1 = document.querySelector('h1');
    var comecar = document.querySelector('input');
    var imagem = document.querySelector('.nota-img');
    var texto = document.querySelector('p');
    if(h1 && comecar && imagem && texto){
        h1.style.display='none';
        comecar.style.display='none';
        imagem.style.display='none';
        texto.style.display='none';
    }
    //Alerta explicando ao usuário o que ele deve fazer
    alert("Digite as 4 notas do aluno");


    //Contador para o usuário digitar a nota
    while(contador <= 3){
        notas.push(prompt("Digite uma nota"));
        notas = notas.map(Number);
        contador++
    }

    //Exibir H2 e o botão voltar
    var h2 = document.querySelector('h2');
    h2.style.display="block";
    var voltar = document.querySelector('button');
    voltar.style.display="block";

    resultado = document.getElementById("resposta");

    media();

    //Dados que serão inseridos na Div resultado
    resultado.style.textAlign = "center"
    resultado.innerHTML = `<h2> Soma das notas: ${media()}</h2>`
    resultado.innerHTML += `<h2> Média do aluno: ${media()/notas.length}</h2>`
    resultado.innerHTML += `<h2> Maior nota do aluno: ${Math.max(...notas)} </h2>`

    //Condição que retorna uma mensagem de aprovado ou reprovado na Div resultado
    if((media()/notas.length) >= 7){
        resultado.innerHTML += "<h3 style='color:#0E0'> Uhuuu! fui aprovado :D</h3>"
        resultado.innerHTML += "<img style='width: 100px' src='aprovado.png' alt='aprovado'>"
    }else{
        resultado.innerHTML += "<h3 style='color:#E00'>Poxa fui reprovado :( </h3>"
        resultado.innerHTML += "<img style='width: 100px' src='reprovado.png' alt='reprovado'>"
    }
}