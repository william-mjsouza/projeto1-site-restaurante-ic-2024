// Função que alterna entre a bandeira dos EUA e a bandeira do Brasil a cada clique
function trocar_idioma() {
    if (bandeira.src.includes("imagens/idioma-ingles.jpg")) {
        bandeira.src = "imagens/idioma-portugues-brasil.jpg";

        // Coloca todos os textos da página em inglês
        cardapio.innerText = 'Menu';
        horarios.innerText = 'Hours';
        contato.innerText = 'Contact';

        todosh2[0].innerText = 'Welcome to Cantinho Gourmet';
        todosp[0].innerHTML = 'In the heart of our beloved city, we find a gastronomic haven that goes far beyond simply nourishing the body. At Cantinho Gourmet, we are more than just a restaurant - we are a <strong>culinary experience that awakens the senses and nourishes the soul</strong>.';
        
        todosh2[1].innerText = 'A Story of Passion and Dedication';
        todosp[1].innerHTML = 'Founded over a decade ago, Cantinho Gourmet was born from the shared dream of <strong>two friends passionate about the art of cooking</strong>. Since then, we have dedicated our lives to creating dishes that not only delight the palate but also <strong>tell a story of love for food</strong>.';

        todosh2[2].innerText = 'Our Commitment to Quality';
        todosp[2].innerHTML = 'At Cantinho Gourmet, quality is our top priority. We use only <strong>the freshest and finest ingredients</strong>, sourced from local suppliers who share our vision of excellence. Each dish is prepared with artisanal skill and meticulous care, ensuring <strong>a truly memorable gastronomic experience</strong> with every visit.';

        todosh2[3].innerText = 'A Welcoming and Charming Atmosphere';
        todosp[3].innerHTML = 'At Cantinho Gourmet, you will be greeted by a warm and charming atmosphere, where every detail has been carefully planned to create a unique experience. Our elegant and sophisticated decor provides the <strong>perfect setting to enjoy a meal with friends and loved ones</strong>, while our staff ensures that you always feel at home.';

        todosh2[4].innerText = 'Our Mission';
        todosp[4].innerHTML = 'At Cantinho Gourmet, our mission is simple: <strong>to enchant and surprise our customers at every moment</strong>. We want to be more than just a restaurant - we want to be your favorite gastronomic haven, where <strong>each visit is a celebration of good food, good company, and the good life</strong>.';

        todosp[5].innerText = 'Come visit us and discover for yourself what makes Cantinho Gourmet so special. We look forward to welcoming you to our home and sharing our passion for cuisine with you.';
    
        copyright.innerHTML = '&copy; 2024 Cantinho Gourmet. All rights reserved.';
    } 
    else if (bandeira.src.includes("imagens/idioma-portugues-brasil.jpg")) {
        bandeira.src = "imagens/idioma-ingles.jpg";

        // Coloca todos os textos da página em português do Brasil
        cardapio.innerText = 'Cardápio';
        horarios.innerText = 'Horários';
        contato.innerText = 'Contato';

        todosh2[0].innerText = 'Bem-vindo ao Cantinho Gourmet';
        todosp[0].innerHTML = 'No coração da nossa amada cidade, encontramos um refúgio gastronômico que vai muito além de simplesmente alimentar o corpo. No Cantinho Gourmet, somos mais do que um restaurante - somos uma <strong>experiência culinária que desperta os sentidos e nutre a alma</strong>.';

        todosh2[1].innerText = 'Uma História de Paixão e Dedicação';
        todosp[1].innerHTML = 'Fundado há mais de uma década, o Cantinho Gourmet nasceu do sonho compartilhado de <strong>dois amigos apaixonados pela arte da culinária</strong>. Desde então, dedicamos nossas vidas a criar pratos que não apenas deliciam o paladar, mas também <strong>contam uma história de amor pela comida</strong>.';

        todosh2[2].innerText = 'Nosso Compromisso com a Qualidade';
        todosp[2].innerHTML = 'No Cantinho Gourmet, a qualidade é a nossa maior prioridade. Utilizamos apenas os <strong>ingredientes mais frescos e selecionados</strong>, provenientes de fornecedores locais que compartilham nossa visão de excelência. Cada prato é preparado com habilidade artesanal e cuidado meticuloso, garantindo <strong>uma experiência gastronômica verdadeiramente memorável</strong> a cada visita.';

        todosh2[3].innerText = 'Um Ambiente Acolhedor e Encantador';
        todosp[3].innerHTML = 'No Cantinho Gourmet, você será recebido por uma atmosfera acolhedora e encantadora, onde cada detalhe foi cuidadosamente planejado para criar uma experiência única. Nossa decoração elegante e sofisticada proporciona o <strong>cenário perfeito para desfrutar de uma refeição com amigos e entes queridos</strong>, enquanto nossos funcionários garantem que você sempre se sinta em casa.';

        todosh2[4].innerText = 'Nossa Missão';
        todosp[4].innerHTML = 'No Cantinho Gourmet, nossa missão é simples: <strong>encantar e surpreender nossos clientes a cada momento</strong>. Queremos ser mais do que apenas um restaurante - queremos ser o seu refúgio gastronômico favorito, onde <strong>cada visita é uma celebração da boa comida, boa companhia e boa vida</strong>.';

        todosp[5].innerText = 'Venha nos visitar e descubra por si mesmo o que torna o Cantinho Gourmet tão especial. Estamos ansiosos para recebê-lo em nossa casa e compartilhar nossa paixão pela culinária com você.';
    
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

var todosh2 = document.querySelectorAll('main h2');
var todosp = document.querySelectorAll('main p');

var copyright = document.querySelector('footer > p')