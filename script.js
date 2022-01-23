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


//Botão que recarrega a página
document.getElementById("recarrega").addEventListener("click",()=>{
    window.location.reload();
});

//Função que carrega o script principal com a função média
function fazMedia(){
    //Ocultar botão e texto começar ao receber um clique
    var comecar = document.querySelector('input');
    var texto = document.querySelector('p');
    if(comecar && texto){
        comecar.style.display='none';
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