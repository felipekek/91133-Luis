function adicionarProduto() {
    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preco').value;

    if (nome === '' || preco === '') return;

    fetch('/api/adicionar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome: nome, preco: preco })
    })
    .then(res => res.json())
    .then(() => {
        document.getElementById('nome').value = '';
        document.getElementById('preco').value = '';
        carregarLista();
    });
}

function carregarLista() {
    fetch('/api/listar')
    .then(res => res.json())
    .then(produtos => {
        const lista = document.getElementById('lista-produtos');
        lista.innerHTML = '';
        produtos.forEach(produto => {
            const item = document.createElement('li');
            item.textContent = `${produto.nome} - R$ ${produto.preco}`;
            lista.appendChild(item);
        });
    });
}

// Carrega a lista quando a página abrir
window.onload = carregarLista();