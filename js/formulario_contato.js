document.getElementById('contactForm').addEventListener('submit', function(event){
    if(!validateForm()){
        //Impede o envio do formulário, caso a validação falhar
        event.preventDefault();
    }
})