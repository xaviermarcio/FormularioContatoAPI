## Formulário de contato 
Formulário de contato que manda direto para o email de destino sem BACKEND, usando apenas uma API para envio das informações.

## Funcionalidades
Formulário com os inputs nome, email e telefone e em seguida é enviado para o determinado email(deve ser cadastro no site da staticforms). consumindo a API staticforms.

## Tecnologias utilizadas
HTML5: linguagem de marcação para estruturar o conteúdo da aplicação.

CSS3: linguagem de estilo para estilizar a interface do usuário.

JavaScript: Linguagem de programação que permite adicionar comportamento interativo a uma página web. 
Pode ser incorporado em documentos HTML para responder a eventos do usuário, manipular elementos da página, realizar requisições assíncronas (AJAX).

API staticforms:  Abaixo exemplo de como consumir a API taticforms
* Ir no site static forms https://www.staticforms.xyz/
* Você precisará colocar o email que você quer receber os contatos
* Colocar no form a action="https://api.staticforms.xyz/submit"
* Após isso será criado uma chave de acesso no email que você informou acima
* Por fim, adicionar um campo de input com contendo o value com o a chave enviada por email
 Exemplo: "<input type="hidden" name="accessKey" value="52b118e3-9439-4c55-8891-70d072b3fa69">"

## Aprendizados
O Mais importante aprender a consumir uma API

## Feedback
Se você tiver algum feedback, por favor nos deixe saber por meio de xaviermarcio80@gmail.com
