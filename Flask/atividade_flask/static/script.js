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
        if (document.getElementById('tabela-produtos')) {
            carregarLista();
        }
    });
}

function carregarLista() {
    fetch('/api/listar')
    .then(res => res.json())
    .then(produtos => {
        const tabela = document.getElementById('tabela-produtos');
        if (!tabela) return;
        const tbody = tabela.querySelector('tbody');
        tbody.innerHTML = '';
        produtos.forEach(produto => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${produto.nome}</td>
                <td>R$ ${parseFloat(produto.preco).toFixed(2)}</td>
            `;
            tbody.appendChild(row);
        });
    });
}

window.onload = function() {
    if (document.getElementById('tabela-produtos')) {
        carregarLista();
    }
};