document.getElementById('verificationForm').addEventListener('submit', verificarFormulario);

document.getElementById('fullName').addEventListener('input', function(event) {
    this.value = this.value.replace(/\d/g, '');
});

document.getElementById('age').addEventListener('input', function(event) {
    this.value = this.value.replace(/\D/g, '');
});

document.getElementById('phone').addEventListener('input', function(event) {
    this.value = this.value.replace(/\D/g, '');
});

function openPopup() {
    document.getElementById("popupForm").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closePopup() {
    document.getElementById("popupForm").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function validaCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    return resto === parseInt(cpf.charAt(10));
}

function verificarFormulario(event) {
    event.preventDefault();  
    
    const cpf = document.getElementById('cpf').value;
    const fullName = document.getElementById('fullName').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;

    if (!cpf || !fullName || !age || !phone) {
        alert('Por favor, preencha todos os campos necessários.');
        return;
    }

    // Verifica se a idade contém apenas números
    if (!/^\d+$/.test(age)) {
        alert('Idade inválida! Por favor, insira uma idade válida.');
        return;
    }

    // Converte a idade para inteiro e valida
    const ageInt = parseInt(age, 10);
    if (isNaN(ageInt) || ageInt < 0 || ageInt > 99) {
        alert('Idade inválida! Por favor, insira uma idade válida.');
        return;
    }

    // Verifica se o telefone contém apenas números
    if (!/^\d+$/.test(phone)) {
        alert('Telefone inválido! Por favor, insira um telefone válido.');
        return;
    }

    // Valida o CPF
    if (!validaCPF(cpf)) {
        alert('CPF inválido!');
        return;
    }

    // Se tudo estiver correto, abre o popup
    openPopup();
}