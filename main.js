let pratoEscolhido = ''
let pratoEscolhidoValor = ''
let bebidaEscolhida = ''
let bebidaEscolhidaValor = ''
let sobremesaEscolhida = ''
let sobremesaEscolhidaValor = ''
let total = 0


function selecionarPrato(prato) {
  pratoEscolhido = prato.querySelector('h3').innerText
  pratoEscolhidoValor = prato.querySelector('span').innerText.replace(',', '.').substring(3)

  const pratoSelecionado = document.querySelector('.selecaoDePratos .selecionado')
  if (pratoSelecionado !== null) {
    pratoSelecionado.classList.remove('selecionado')
  }

  prato.classList.add('selecionado')
  verificarSelecao()
}

function selecionarBebida(bebida) {
  bebidaEscolhida = bebida.querySelector('h3').innerText
  bebidaEscolhidaValor = bebida.querySelector('span').innerText.replace(',', '.').substring(3)

  const bebidaSelecionada = document.querySelector('.selecaoDeBebidas .selecionado')
  if (bebidaSelecionada !== null) {
    bebidaSelecionada.classList.remove('selecionado')
  }

  bebida.classList.add('selecionado')
  verificarSelecao()
}

function selecionarSobremesa(sobremesa) {
  sobremesaEscolhida = sobremesa.querySelector('h3').innerText
  sobremesaEscolhidaValor = sobremesa.querySelector('span').innerText.replace(',', '.').substring(3)

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

    btnFecharPedidoCor.onclick = fecharPedido
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

  total = Number(pratoEscolhidoValor) + Number(bebidaEscolhidaValor) + Number(sobremesaEscolhidaValor)

  document.querySelector('.precoTotal').innerHTML = total.toFixed(2)

}

function fecharPedido() {
  const confirme = document.querySelector('.confirmacao')

  confirme.classList.toggle('abrir')
}

function enviarMsgWhats() {

  let msg = `Olá, gostaria de fazer o pedido:
  - Prato: ${pratoEscolhido}
  - Bebida: ${bebidaEscolhida}
  - Sobremesa: ${sobremesaEscolhida}
  Total: R$ ${total.toFixed(2)}`

  let msgCodificada = encodeURIComponent(msg)

  let numeroRestaurante = '5512999999999'

  let urlWhats = `https://wa.me/${numeroRestaurante}?text=${msgCodificada}`

  window.open(urlWhats)

}
