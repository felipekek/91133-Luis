<?php
// Verifica se a requisição é POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    // Redireciona para a página inicial se não for acesso via POST
    header("Location: http://localhost:8081/APP/index.html");
    exit;
}
//Recebe os dados do formulário
$produto = $_POST['produto'];
$tipo = $_POST['tipo'];
$quantidade = $_POST['quantidade'];

//Prepara a query SQL
$sql = "INSERT INTO produtos(produto, tipo, quantidade) VALUE(?, ?, ?)";

//Prepara o statement
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssi", $produto, $tipo, $quantidade);

//Executa o insert
$stmt->execute();
$stmt->close();
?>