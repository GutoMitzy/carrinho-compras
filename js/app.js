let totalGeral = 0;

function adicionar() {
    let produtoAlterado = document.getElementById('produto').value;
    let nomeProduto = produtoAlterado.split('-')[0];
    let valorUnitario = produtoAlterado.split('$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let subTotal = valorUnitario * quantidade;

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
  </section>`;

    totalGeral += subTotal;
    let valorTotal = document.getElementById('valor-total');
    valorTotal.textContent = 'R$' + totalGeral;
    document.getElementById('quantidade').value = '';
;}

function limpar() {
    let totalGeral = 0;
    document.getElementById('valor-total').textContent = 'R$ 0';
    document.getElementById('lista-produtos').innerHTML = '';
}