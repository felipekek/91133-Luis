document.getElementById("loginForm").addEventListener("submit", function(event){
        event.preventDefault //Impede o envio do formulário

const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

//Validação dos campos 
if(!username || !password){
    alert("Por favor, preencha todos os campos.");
return
}

if(password.length < 8){
    alert("Insira uma senha com pelo menos 8 caracteres.");
return
}

//Salva o nome de usuário no localStorage, abre o painel
localStorage.setItem("username", username)

//Se a validação passar, abre o painel
window.location.href = "painel.html" //Abre uma nova página chamada
alert("Login bem sucedido!") ;// Pop-up de sucesso
});
