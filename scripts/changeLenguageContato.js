// Função que alterna entre a bandeira dos EUA e a bandeira do Brasil a cada clique
function trocar_idioma() {
    if (bandeira.src.includes("imagens/idioma-ingles.jpg")) {
        bandeira.src = "imagens/idioma-portugues-brasil.jpg";

        // Coloca todos os textos da página em inglês
        cardapio.innerText = 'Menu';
        horarios.innerText = 'Hours';
        contato.innerText = 'Contact';

        h1.innerText = 'Contact Us';

        todosh2[0].innerText = 'Contact Information';
        todosp[0].innerHTML = '<i class="fas fa-phone"></i>Phone Number: <strong>(81) 3326-8080</strong>';
        todosp[1].innerHTML = '<i class="fas fa-envelope"></i>Email: <strong>contato@cantinhogourmet.com</strong>';

        todosh2[1].innerText = 'Frequently Asked Questions';
        todosh3[0].innerText = '1. Is it necessary to make a reservation in advance?';
        todosp[2].innerText = 'While not required, we recommend making reservations, especially during peak hours, to ensure a seat in our restaurant. You can make a reservation by calling us or through our website.';

        todosh3[1].innerText = '2. Do you offer delivery or takeout services?';
        todosp[3].innerText = 'At the moment, we do not offer delivery services, but you can place an order for takeout at the restaurant. Check our online menu to place your order and indicate the desired pickup time.';

        todosh3[2].innerText = '3. Do you accept credit cards?';
        todosp[4].innerText = 'Yes, we accept all major credit cards, as well as cash payments.';

        todosh3[3].innerText = '4. Is there parking available nearby?';
        todosp[5].innerText = 'Yes, we offer on-site parking for customers. However, during peak hours, the parking lot may fill up. We recommend arriving early or considering other parking options nearby.';

        todosh3[4].innerText = '5. Do you offer a kids’ menu?';
        todosp[6].innerText = 'Yes, we have a special kids’ menu with options suitable for children. Please ask our staff about the kids’ menu when placing your order.';

        todosh2[2].innerText = 'Contact Form';

        todaslabel[0].innerText = "Please fill in your name";
        todosinput[0].placeholder = "Name";
        todaslabel[1].innerText = "Please fill in your email";
        todosinput[1].placeholder = "Email";
        todaslabel[2].innerText = "Please fill in the subject";
        todosinput[2].placeholder = "Subject";
        todaslabel[3].innerText = "Please fill in your message";
        textarea.placeholder = 'Message';
        buttonForm.innerText = 'Send';


        copyright.innerHTML = '&copy; 2024 Cantinho Gourmet. All rights reserved.';
    } 
    else if (bandeira.src.includes("imagens/idioma-portugues-brasil.jpg")) {
        bandeira.src = "imagens/idioma-ingles.jpg";

        // Coloca todos os textos da página em português do Brasil
        cardapio.innerText = 'Cardápio';
        horarios.innerText = 'Horários';
        contato.innerText = 'Contato';

        h1.innerText = 'Entre em Contato';

        todosh2[0].innerText = 'Informações de Contato';
        todosp[0].innerHTML = '<i class="fas fa-phone"></i>Número de Telefone: <strong>(81) 3326-8080</strong>';
        todosp[1].innerHTML = '<i class="fas fa-envelope"></i>E-mail: <strong>contato@cantinhogourmet.com</strong>';

        todosh2[1].innerText = 'Perguntas Frequentes (FAQs)';
        todosh3[0].innerText = '1. É necessário fazer reserva com antecedência?';
        todosp[2].innerText = 'Embora não seja obrigatório, recomendamos fazer reservas, especialmente durante os horários de pico, para garantir um assento em nosso restaurante. Você pode fazer uma reserva ligando para nós ou através do nosso site.';

        todosh3[1].innerText = '2. Vocês oferecem serviço de entrega ou retirada?';
        todosp[3].innerText = 'No momento, não oferecemos serviço de entrega, mas você pode fazer um pedido para retirada no restaurante. Consulte nosso menu online para fazer seu pedido e indicar o horário de retirada desejado.';

        todosh3[2].innerText = '3. Vocês aceitam cartões de crédito?';
        todosp[4].innerText = 'Sim, aceitamos todos os principais cartões de crédito, bem como pagamento em dinheiro.';
        
        todosh3[3].innerText = '4. Há estacionamento disponível nas proximidades?';
        todosp[5].innerText = 'Sim, oferecemos estacionamento para clientes no local. No entanto, durante os horários de pico, o estacionamento pode ficar cheio. Recomendamos chegar cedo ou considerar outras opções de estacionamento nas proximidades.';

        todosh3[4].innerText = '5. Vocês oferecem opções de menu infantil?';
        todosp[6].innerText = 'Sim, temos um menu infantil especial com opções adequadas para crianças. Por favor, pergunte ao nosso pessoal sobre o menu infantil ao fazer o seu pedido.';
        
        todosh2[2].innerText = 'Formulário de Contato';

        todaslabel[0].innerText = "Por favor, preencha seu nome";
        todosinput[0].placeholder = "Nome";
        todaslabel[1].innerText = "Por favor, preencha seu email";
        todosinput[1].placeholder = "E-mail";
        todaslabel[2].innerText = "Por favor, preencha o assunto";
        todosinput[2].placeholder = "Assunto";
        todaslabel[3].innerText = "Por favor, preencha sua mensagem";
        textarea.placeholder = 'Mensagem'
        buttonForm.innerText = 'Enviar';

        copyright.innerHTML = '&copy; 2024 Cantinho Gourmet. Todos os direitos reservados.';
    }
}

//======================================================================================================
//                                       Função Principal (main)
//======================================================================================================

// Seleciona a bandeira
var bandeira = document.querySelector('#idioma');

// adiciona um evento de clique na bandeira
bandeira.addEventListener('click', trocar_idioma);

// Seleciona os elementos
var cardapio = document.querySelector('#cardapio');
var horarios = document.querySelector('#horarios');
var contato = document.querySelector('#contato');

var h1 = document.querySelector('main > h1')
var todosh2 = document.querySelectorAll('main h2');
var todosh3 = document.querySelectorAll('main h3');
var todosp = document.querySelectorAll('main p');
var todaslabel = document.querySelectorAll('main label');
var todosinput = document.querySelectorAll('main input');
var textarea = document.querySelector('main textarea')
var buttonForm = document.querySelector('.btn-form')

var copyright = document.querySelector('footer > p')