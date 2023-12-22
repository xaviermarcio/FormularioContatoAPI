function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const successMessage = document.getElementById('successMessage');

    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameInput.classList.add('error');
        nameInput.classList.remove('success');
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameInput.classList.remove('error');
        nameInput.classList.add('success');
        nameError.style.display = 'none';
    }

    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (emailInput.value.trim() === '' || !emailRegex.test(emailInput.value)) {
        emailInput.classList.add('error');
        emailInput.classList.remove('success');
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailInput.classList.remove('error');
        emailInput.classList.add('success');
        emailError.style.display = 'none';
    }

    if (messageInput.value.trim() === '') {
        messageInput.classList.add('error');
        messageInput.classList.remove('success');
        messageError.style.display = 'block';
        isValid = false;
    } else {
        messageInput.classList.remove('error');
        messageInput.classList.add('success');
        messageError.style.display = 'none';
    }

    if (isValid) {
        // Exibir mensagem de sucesso se o formulário for válido
        successMessage.style.display = 'block';
    } else {
        successMessage.style.display = 'none';
    }

    return isValid;
}