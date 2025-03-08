document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário enquanto validamos

    // Obtendo os valores dos campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validando os campos
    if (!name || !email || !phone || !service || !message) {
        alert('Todos os campos são obrigatórios!');
        return;
    }

    // Validando o formato do email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    // Validando o número de telefone (opcional, mas pode ser um formato simples)
    const phonePattern = /^[0-9]{10,15}$/; // Permite 10 a 15 números
    if (phone && !phonePattern.test(phone)) {
        alert('Por favor, insira um número de telefone válido.');
        return;
    }

    // Se todos os campos estiverem válidos, você pode enviar o formulário
    alert('Formulário enviado com sucesso!');
    // Aqui você pode enviar os dados do formulário via AJAX ou qualquer outro método
});