

function logar(){
    let txtUser = document.getElementById("txtUser")
    let txtsenha = document.getElementById("txtsenha")
    let saida = document.getElementById("Resultado")

    let V_usuario = txtUser.value;
    let V_password = txtsenha.value;
    
    // alert("Username: " +V_usuario)
    // alert("Password: " +V_password)
    
    if(V_usuario == ""){
        saida.textContent = "Preencha o campo Usuário!"
        // alert("Preencha o campo!")
        return
    }
    if(V_password == ""){
        saida.textContent = "Preencha o campo senha!"
        // alert("Preencha o campo!")
        return;
    }
    if(V_usuario == "DanielVbrn"){
        alert("Login realizado com sucesso!")
        window.location.href ="https://github.com/DanielVbrn?tab=repositories"
        return
    }
}


document.getElementById("Logar").addEventListener("click",logar);
