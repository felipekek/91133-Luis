<?php
// Verifica se a requisição é POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    // Redireciona para a página inicial se não for acesso via POST
    header("Location: http://localhost:8081/APP/index.html");
    exit;
}

// Inclui o script que autentica
include 'autenticar.php';

// Inclui a conexão com o banco
include 'conexao.php';

// Inclui o script que insere os dados
include 'insere.php';

// Inclui o script que lista os dados ou conecta à view
include 'view/conecta.php';

// Mostra alerta e redireciona para o formulário
echo "<script>
    alert('Cadastro realizado com sucesso!');
    window.location.href = 'http://localhost:8081/APP/index.html';
</script>";
?>
