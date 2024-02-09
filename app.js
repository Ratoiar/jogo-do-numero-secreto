let listaDeNumerosSorteados = []
let numeroLimiteDaLista = 10
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1
function exibirTextoNaTela (tag,texto) {
     let campo = document.querySelector(tag)
     campo.innerHTML = texto
     responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2})
}

mensagemInicial()
function verificarChute() {
     let chute = document.querySelector('input').value
     
     if (chute == numeroSecreto) {     
     
          exibirTextoNaTela('h1',`acertou`)
          let PalavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa'
          let mensagemTentativas =  `Você acertou com ${tentativas} ${PalavraTentativa}`
          exibirTextoNaTela('p', mensagemTentativas)
          document.getElementById('reiniciar').removeAttribute('disabled')
       } else {
          if (chute > numeroSecreto) {
           exibirTextoNaTela('h1','Tente novamente')
           exibirTextoNaTela('p','O numero secreto é menor')
          } else {
               exibirTextoNaTela('h1','Tente novamente')
               exibirTextoNaTela('p','o numero secreto é maior') 
          }
       }
       tentativas++
       limparCampo()
}

/* na função gerar numero aleatorio primeiro criamos a variável numeroEscolhido,
 depois a variavel quantidadeDeElementosNaLista,
  por fim a condicional da função que é basicamente se a lista de numeros sorteados incluir o numero escolhido
  ele deve sortear um  outro numerp, que no caso do codigo,
  usamos a função return para que ele execute a função novamente
  E caso o numero escolhido não esteja na lista de numeros sorteados,
  usamos a função push, que vai adionar ele na lista 
  
  */
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimiteDaLista + 1)
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length
    if (quantidadeDeElementosNaLista == numeroLimiteDaLista){
         listaDeNumerosSorteados = []
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
     return gerarNumeroAleatorio()
    } else {
          listaDeNumerosSorteados.push(numeroEscolhido)
          console.log(listaDeNumerosSorteados)
          return(numeroEscolhido)
    }
}

function limparCampo() {
     chute = document.querySelector('input')
     chute.value = ''
}
function reiniciarJogo() {
 
     numeroSecreto = gerarNumeroAleatorio()   
     limparCampo() 
     tentativas = 1
     mensagemInicial()
     DesabilitarBotaoNovoJogo()


}
function mensagemInicial() {
     exibirTextoNaTela('h1', 'jogo do numero secreto')
     exibirTextoNaTela('p','Escolha um numero de 1 a 10')
}
function DesabilitarBotaoNovoJogo () {
     document.getElementById('reiniciar').setAttribute('disabled', true)
}