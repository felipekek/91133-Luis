<?php
$conn = mysqli_connect("localhost", "root", "", "contatos");

$nome = $_POST["nome"];
$tel = $_POST["telefone"];
$email = $_POST["email"];

echo("conectado");


$sql = "INSERT INTO contatos (nome, telefone, email) VALUES ('$nome', '$tel', '$email')";

if (mysqli_query($conn, $sql)) {
    echo "<script>alert('Cadastro realizado!'); window. 
    location.href='cad_usuario.html';</script>";
}else{
    echo "Errom ao cadastrar.";
}

mysqli_close($conn);
?>