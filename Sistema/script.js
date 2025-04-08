document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // Impede o envio do formulário

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validação dos campos 
    if (!username || !password) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (password.length < 8) {
        alert("Insira uma senha com pelo menos 8 caracteres.");
        return;
    }

    // Salva o nome de usuário no localStorage
    localStorage.setItem("username", username);

    // Redireciona para a próxima página
    alert("Login bem sucedido!");
    window.location.href = "calcular.html";
});
