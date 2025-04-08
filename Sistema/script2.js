function calcularTotal() {
    const produto = document.getElementById("produto").value;
    const quantidade = parseFloat(document.getElementById("quantidade").value);
    const preco = parseFloat(document.getElementById("preco").value);
    const totalInput = document.getElementById("total");
    const erroQuantidade = document.getElementById("erroQuantidade");
    const erroPreco = document.getElementById("erropreco");

    // Limpa mensagens anteriores
    erroQuantidade.textContent = "";
    erroPreco.textContent = "";

    // Verifica se os campos estão preenchidos corretamente
    if (!produto || isNaN(quantidade) || isNaN(preco)) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    let erro = false;

    if (quantidade <= 0) {
        erroQuantidade.textContent = "Não pode ter valores negativos ou zero.";
        erro = true;
    }

    if (preco <= 0) {
        erroPreco.textContent = "Preço deve ser maior que zero.";
        erro = true;
    }

    if (erro) return;

    const total = quantidade * preco;
    totalInput.value = total.toFixed(2).replace('.', ',');
}
