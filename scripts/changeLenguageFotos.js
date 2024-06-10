// Função que alterna entre a bandeira dos EUA e a bandeira do Brasil a cada clique
function trocar_idioma() {
    if (bandeira.src.includes("imagens/idioma-ingles.jpg")) {
        bandeira.src = "imagens/idioma-portugues-brasil.jpg";

        // Coloca todos os textos da página em inglês
        cardapio.innerText = 'Menu';
        horarios.innerText = 'Hours';
        contato.innerText = 'Contact';

        h1.innerText = 'Photo Gallery';
        todosh2[0].innerText = 'Appetizers';
        todosh2[1].innerText = 'Main Courses';
        todosh2[2].innerText = 'Drinks';
        todosh2[3].innerText = 'Desserts';

        copyright.innerHTML = '&copy; 2024 Cantinho Gourmet. All rights reserved.';
    } 
    else if (bandeira.src.includes("imagens/idioma-portugues-brasil.jpg")) {
        bandeira.src = "imagens/idioma-ingles.jpg";

        // Coloca todos os textos da página em português do Brasil
        cardapio.innerText = 'Cardápio';
        horarios.innerText = 'Horários';
        contato.innerText = 'Contato';

        h1.innerText = 'Galeria de Fotos';
        todosh2[0].innerText = 'Entradas';
        todosh2[1].innerText = 'Pratos Principais';
        todosh2[2].innerText = 'Bebidas';
        todosh2[3].innerText = 'Sobremesas';
    
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

var copyright = document.querySelector('footer > p')