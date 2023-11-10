document.getElementById("validar-botao").addEventListener("click", function(){
    const cpf = document.getElementById("cpf").value;

    if (validaCPF(cpf)) {
        document.getElementById("resultado").textContent = "CPF válido"
    }
    else {
        document.getElementById("resultado").textContent = "CPF inválido"
    }
})

function validaCPF(vrCPF) {
    return vrCPF.length === 11 && !isNaN(vrCPF);
}