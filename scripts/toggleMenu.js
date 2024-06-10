function pegarLarguraBotao() {
    larguraBotaoMenu = botaoMenu.getBoundingClientRect().width;
    // A altura do botão vai ser sempre igual a largura dele
    alturaBotaoMenu = parseInt(larguraBotaoMenu);
    botaoMenu.style.height = `${alturaBotaoMenu}px`;
}

function animar() {
    // Se for a 1ª vez que o botão está sendo clicado, acontece a animação
    if(!clicouBotaoMenu) {
        // Tempo de animação para o primeiro botão
        botaoMenu.style.transition = animationTime;

        // A linha do meio some instantaneamente (remove o tempo de animação da linha do meio)
        linhas[1].style.transition = '';
        linhas[1].style.width = '0';

        // A translação vertical das linhas é calculada de forma a centralizar o centro do X com o centro do botão
        var y = parseInt(alturaBotaoMenu * 0.1333);

        // Tempo de animação da primeira linha
        linhas[0].style.transition = animationTime;
        // Teletransporta a primeira linha para a coordenada 36px no eixo y e rotaciona ela -45° em relação ao seu centro
        linhas[0].style.transform = `translateY(${y}px) rotate(-45deg)`;

        // Tempo de animação da terceira linha
        linhas[2].style.transition = animationTime;
        // Teletransporta a terceira linha para a coordenada -36px no eixo y e rotaciona ela 45° em relação ao seu centro
        linhas[2].style.transform = `translateY(${-y}px) rotate(45deg)`;

        // Adiciona a classe
        nav.classList.add('nav');
        nav_ul.classList.add('nav-ul');
        for(i = 0; i < nav_ul_li.length; i++) {
            nav_ul_li[i].classList.add('nav-ul-li');
        }


        // Muda o estado da variável de controle de clique no botão
        clicouBotaoMenu = !clicouBotaoMenu;
    }
    // Mas se já tiver sido clicado, desfaz a animação
    else {
        // A linha do meio aparece de forma animada crescendo a sua largura
        linhas[1].style.transition = animationTime;
        linhas[1].style.width = '66.66%';

        // Reseta a translação do eixo y da primeira linha e reseta a rotação dela
        linhas[0].style.transform = 'translateY(0px) rotate(0deg)';

        // Reseta a translação do eixo y da terceira linha e reseta a rotação dela
        linhas[2].style.transform = 'translateY(0px) rotate(0deg)';


        // Remove a classe
        nav.classList.remove('nav');
        nav_ul.classList.remove('nav-ul');
        for(i = 0; i < nav_ul_li.length; i++) {
            nav_ul_li[i].classList.remove('nav-ul-li');
        }


        // Muda o estado da variável de controle de clique no botão
        clicouBotaoMenu = !clicouBotaoMenu;
    }   
}

// Constante que controla o tempo da animação
const animationTime = '0.2s';

// Adiciona um escutador de envento na janela para escutar se a janela foi redimensionada
window.addEventListener('resize', pegarLarguraBotao);

var botaoMenu = document.querySelector('button#btn-menu');
larguraBotaoMenu = botaoMenu.getBoundingClientRect().width;
// A altura do botão vai ser sempre igual a largura dele
alturaBotaoMenu = parseInt(larguraBotaoMenu);
botaoMenu.style.height = `${alturaBotaoMenu}px`;
//alturaBotaoMenu = botaoMenu.getBoundingClientRect().height;

var linhas = document.querySelectorAll('span.linha');

var nav = document.querySelector('header nav')
var nav_ul = document.querySelector('header nav > ul')
var nav_ul_li = document.querySelectorAll('header nav > ul > li')

// Inicializa a variável que controla o estado de clique no botão como false (o botão começa não clicado)
clicouBotaoMenu = false;