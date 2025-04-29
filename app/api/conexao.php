<?php
// Verifica se a requisição é POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    // Redireciona para a página inicial se não for acesso via POST
    header("Location: http://localhost:8081/APP/index.html");
    exit;
}

$host = "localhost";
$usuario = "root";
$senha = "";
$banco = "estoque";

//cria a conexção
$conn = new mysqli($host, $usuario, $senha, $banco);

//verifica se ocorreu erro
if ($conn->connect_error){
    die("Erro na conexão: " . $conn->connect_error);
}
?>


