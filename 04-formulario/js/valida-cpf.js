document.getElementById("validar-botao").addEventListener("click", function(){
    let cpf = document.getElementById("cpf").value;
    cpf = cpf.replace(/[^0-9]/g, '');
    if (validaCPF(cpf)) {
        document.getElementById("resultado").textContent = "CPF válido"
    }
    else {
        document.getElementById("resultado").textContent = "CPF inválido"
    }
})

function validaCPF (vrcpf) {
    let soma = 0;
    for (let posicao = 0, pesoX = 10; posicao < 9; posicao ++, pesoX --) {
        soma += parseInt(vrcpf.charAt(posicao)) * pesoX;
    }
    let digitoX = 11 - (soma % 11)

    if(digitoX > 9) {
        digitoX = 0;
    }

    if (digitoX !== parseInt(vrcpf.charAt(9))) {
        return false;
    }

    soma = 0;
    for (posicao = 0, pesoY = 11; posicao < 10; posicao ++, pesoY --) {
        soma += parseInt(vrcpf.charAt(posicao)) * pesoY;
    }

    let digitoY = 11 - (soma % 11)
    if(digitoY > 9) {
        digitoY = 0;
    }

    if (digitoY !== parseInt(vrcpf.charAt(10))) {
        return false;
    }

    // Se passou por todas as verificações, o CPF é válido
    return true;

    // return vrcpf.length === 11 & !isNaN(vrcpf);
}

document.addEventListener('DOMContentLoaded', function(){
    // Use a função de máscara da vanilla-masker
    VMasker(document.getElementById('cpf')).maskPattern('999.999.999-99');
});