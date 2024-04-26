let pratoEscolhido = ''
let pratoEscolhidoValor = 0
let bebidaEscolhida = ''
let bebidaEscolhidaValor = 0
let sobremesaEscolhida = ''
let sobremesaEscolhidaValor = 0


function selecionarPrato(prato) {
  pratoEscolhido = prato.querySelector('h3').innerText
  pratoEscolhidoValor = Number((prato.querySelector('span').innerText.replace(',', '.')).substring(3)).toFixed(2)
  const pratoSelecionado = document.querySelector('.selecaoDePratos .selecionado')
  if (pratoSelecionado !== null) {
    pratoSelecionado.classList.remove('selecionado')
  }

  prato.classList.add('selecionado')
  verificarSelecao()
}

function selecionarBebida(bebida) {
  bebidaEscolhida = bebida.querySelector('h3').innerText
  bebidaEscolhidaValor = Number((bebida.querySelector('span').innerText.replace(',', '.')).substring(3)).toFixed(2)
  const bebidaSelecionada = document.querySelector('.selecaoDeBebidas .selecionado')

  if (bebidaSelecionada !== null) {
    bebidaSelecionada.classList.remove('selecionado')
  }

  bebida.classList.add('selecionado')
  verificarSelecao()
}

function selecionarSobremesa(sobremesa) {
  sobremesaEscolhida = sobremesa.querySelector('h3').innerText
  sobremesaEscolhidaValor = Number((sobremesa.querySelector('span').innerText.replace(',', '.')).substring(3)).toFixed(2)
  const sobremesaSelecionada = document.querySelector('.selecaoDeSobremesas .selecionado')

  if (sobremesaSelecionada !== null) {
    sobremesaSelecionada.classList.remove('selecionado')
  }

  sobremesa.classList.add('selecionado')
  verificarSelecao()
}

function verificarSelecao() {
  if (pratoEscolhido !== '' && bebidaEscolhida !== '' && sobremesaEscolhida !== '') {
    const btnFecharPedidoCor = document.querySelector('.btn')
    const btnFecharPedido = document.querySelector('.fecharPedido')

    btnFecharPedidoCor.classList.add('fecharPedidoCor')
    btnFecharPedido.innerHTML = 'Fechar Pedido';

    comanda()

  }
}

function comanda() {
  document.querySelector('.nomeDoPrato').innerHTML = pratoEscolhido
  document.querySelector('.precoDoPrato').innerHTML = pratoEscolhidoValor

  document.querySelector('.nomeDaBebida').innerHTML = bebidaEscolhida
  document.querySelector('.precoDaBebida').innerHTML = bebidaEscolhidaValor

  document.querySelector('.nomeDaSobremesa').innerHTML = sobremesaEscolhida
  document.querySelector('.precoDaSobremesa').innerHTML = sobremesaEscolhidaValor

  let resultado = Number(pratoEscolhidoValor) + Number(bebidaEscolhidaValor) + Number(sobremesaEscolhidaValor)

  document.querySelector('.precoTotal').innerHTML = resultado.toFixed(2)

}

function fecharPedido() {
  const confirme = document.querySelector('.confirmacao')

  confirme.classList.add('abrir')
}
