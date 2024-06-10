// Função que alterna entre a bandeira dos EUA e a bandeira do Brasil a cada clique
function trocar_idioma() {
    if (bandeira.src.includes("imagens/idioma-ingles.jpg")) {
        bandeira.src = "imagens/idioma-portugues-brasil.jpg";

        // Coloca todos os textos da página em inglês
        cardapio.innerText = 'Menu';
        horarios.innerText = 'Hours';
        contato.innerText = 'Contact';

        h1.innerText = 'Opening Hours';
        todosp[0].innerText = 'Cantinho Gourmet Restaurant is open at the following times:';

        todosh2[0].innerText = 'Monday to Friday';
        todosli[0].innerHTML = '<i class="fas fa-sun"></i>Breakfast: 08:00 AM - 10:30 AM';
        todosli[1].innerHTML = '<i class="fas fa-utensils"></i>Lunch: 12:00 PM - 03:00 PM';
        todosli[2].innerHTML = '<i class="fas fa-moon"></i>Dinner: 06:30 PM - 10:00 PM';

        todosh2[1].innerText = 'Saturday';
        todosli[3].innerHTML = '<i class="fas fa-utensils"></i>Brunch: 10:00 AM - 02:00 PM';
        todosli[4].innerHTML = '<i class="fas fa-moon"></i>Dinner: 06:00 PM - 11:00 PM';

        todosh2[2].innerText = 'Sunday';
        todosli[5].innerHTML = '<i class="fas fa-utensils"></i>Brunch: 09:00 AM - 03:00 PM';
        todosli[6].innerHTML = '<i class="fas fa-moon"></i>Dinner: 06:00 PM - 10:00 PM';

        todosh2[3].innerText = 'Holidays';
        todosp[1].innerHTML = 'Cantinho Gourmet Restaurant will be <strong>closed</strong> on the following holidays:';
        todosli[7].innerHTML = '<i class="fas fa-square"></i>New Year\'s Day - 01/01/2024';
        todosli[8].innerHTML = '<i class="fas fa-square"></i>Labor Day - 05/01/2024';
        todosli[9].innerHTML = '<i class="fas fa-square"></i>Carnival - 03/06/2024';
        todosli[10].innerHTML = '<i class="fas fa-square"></i>Good Friday - 04/19/2024';
        todosli[11].innerHTML = '<i class="fas fa-square"></i>Corpus Christi - 05/30/2024';
        todosli[12].innerHTML = '<i class="fas fa-square"></i>Brazilian Independence Day - 09/07/2024';
        todosli[13].innerHTML = '<i class="fas fa-square"></i>All Souls\' Day - 11/02/2024';
        todosli[14].innerHTML = '<i class="fas fa-square"></i>Proclamation of the Republic - 11/15/2024';
        todosli[15].innerHTML = '<i class="fas fa-square"></i>Christmas - 12/25/2024';
        todosp[2].innerHTML = 'On certain holidays, the restaurant may operate on <strong>special hours</strong>. Check our <a href="#footer"><strong>social media</strong></a> or get in <a href="contact.html"><strong>contact</strong></a> for more information.';
        
        todosh2[4].innerText = 'Reservations';
        todosp[3].innerHTML = 'To <strong>cancel or modify a reservation</strong>, please contact us at least <strong>24 hours in advance</strong>.';
        todosp[4].innerHTML = 'Reservations that are not canceled and no-shows will be subject to a <strong>cancellation fee</strong>.';

        todosh2[5].innerText = 'Cancellation Policy';
        todosp[5].innerHTML = 'To <strong>cancel or modify a reservation</strong>, please contact us at least <strong>24 hours in advance</strong>.';
        todosp[6].innerHTML = 'Reservations that are not canceled and no-shows will be subject to a <strong>cancellation fee</strong>.';


        copyright.innerHTML = '&copy; 2024 Cantinho Gourmet. All rights reserved.';
    } 
    else if (bandeira.src.includes("imagens/idioma-portugues-brasil.jpg")) {
        bandeira.src = "imagens/idioma-ingles.jpg";

        // Coloca todos os textos da página em português do Brasil
        cardapio.innerText = 'Cardápio';
        horarios.innerText = 'Horários';
        contato.innerText = 'Contato';

        h1.innerText = 'Horário de Funcionamento';
        todosp[0].innerText = 'O Restaurante Cantinho Gourmet está aberto nos seguintes horários:';

        todosh2[0].innerText = 'Segunda a Sexta-feira';
        todosli[0].innerHTML = '<i class="fas fa-sun"></i>Café da Manhã: 08h00 - 10h30';
        todosli[1].innerHTML = '<i class="fas fa-utensils"></i>Almoço: 12h00 - 15h00';
        todosli[2].innerHTML = '<i class="fas fa-moon"></i>Jantar: 18h30 - 22h00';

        todosh2[1].innerText = 'Sábado';
        todosli[3].innerHTML = '<i class="fas fa-utensils"></i>Brunch: 10h00 - 14h00';
        todosli[4].innerHTML = '<i class="fas fa-moon"></i>Jantar: 18h00 - 23h00';
        
        todosh2[2].innerText = 'Domingo';
        todosli[5].innerHTML = '<i class="fas fa-utensils"></i>Brunch: 09h00 - 15h00';
        todosli[6].innerHTML = '<i class="fas fa-moon"></i>Jantar: 18h00 - 22h00';

        todosh2[3].innerText = 'Feriados';
        todosp[1].innerHTML = 'O Restaurante Cantinho Gourmet estará <strong>fechado</strong> nos seguintes feriados:';
        todosli[7].innerHTML = '<i class="fas fa-square"></i>Ano Novo - 01/01/2024';
        todosli[8].innerHTML = '<i class="fas fa-square"></i>Dia do Trabalho - 01/05/2024';
        todosli[9].innerHTML = '<i class="fas fa-square"></i>Carnaval e 06/03/2024';
        todosli[10].innerHTML = '<i class="fas fa-square"></i>Sexta-feira Santa - 19/04/2024';
        todosli[11].innerHTML = '<i class="fas fa-square"></i>Corpus Christi - 30/05/2024';
        todosli[12].innerHTML = '<i class="fas fa-square"></i>Independência do Brasil - 07/09/2024';
        todosli[13].innerHTML = '<i class="fas fa-square"></i>Dia de Finados - 02/11/2024';
        todosli[14].innerHTML = '<i class="fas fa-square"></i>Proclamação da República - 15/11/2024';
        todosli[15].innerHTML = '<i class="fas fa-square"></i>Natal - 25/12/2024';
        todosp[2].innerHTML = 'Em alguns feriados específicos, o restaurante pode operar em <strong>horários especiais</strong>. Consulte nossas <a href="#footer"><strong>redes sociais</strong></a> ou entre em <a href="contato.html"><strong>contato</strong></a> para mais informações.';
        
        todosh2[4].innerText = 'Reservas';
        todosp[3].innerHTML = 'Para <strong>cancelar ou alterar uma reserva</strong>, pedimos que entre em contato conosco com pelo menos <strong>24 horas de antecedência</strong>.';
        todosp[4].innerHTML = 'Reservas não canceladas e não comparecidas serão sujeitas a uma <strong>taxa de cancelamento</strong>.';

        todosh2[5].innerText = 'Política de Cancelamento';
        todosp[5].innerHTML = 'Para <strong>cancelar ou alterar uma reserva</strong>, pedimos que entre em contato conosco com pelo menos <strong>24 horas de antecedência</strong>.';
        todosp[6].innerHTML = 'Reservas não canceladas e não comparecidas serão sujeitas a uma <strong>taxa de cancelamento</strong>.';

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
var todosli = document.querySelectorAll('main li');
var todosp = document.querySelectorAll('main p');

var copyright = document.querySelector('footer > p')