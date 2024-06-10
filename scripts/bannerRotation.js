//======================================================================================================
//                                               Funções 
//======================================================================================================

// Função que determina o valor donúmero do número de imagens que devem ser exibidas no banner ao demensionar a janela
function definirNumImgs() {
    // Pega a largura atual da janela do navegador
    larguraJanela = window.innerWidth;
    if (larguraJanela <= 450) {
        numImgsExibidas = 1;
    } 
    else if (larguraJanela > 450 && larguraJanela <= 1100) {
        numImgsExibidas = 2;
    } 
    else {
        // Para larguras de janela maiores que 1100px, se necessário
        numImgsExibidas = 3;
    }

}

// Função para agrupar sequencialmente os elementos de um vetor
function agrupar(vetor, tam_grupo) {
    // Array grupos cujo tamanho depente da quantidade de elementos do array vetor 
    var grupos = [];

    // Array grupo cujo tamanho depende da quantidade de elementos sequenciais o que o usuário quer agrupar do array vetor
    var grupo = [];

    // Variável para atualizar o intervalo de agrupamento
    var j = 0;
    // Percorre o array vetor
    for (var i = 0; i < vetor.length; i++) {
        // Adiciona o elemento caso ele esteja no intervalo de agrupamento
        if ((i >= (tam_grupo * j)) && (i < (tam_grupo * (j + 1)))) {
            grupo.push(vetor[i]);
        }

        // Atualiza o intervalo após ser formado um grupo
        if (grupo.length == tam_grupo) {
            grupos.push(grupo);
            grupo = [];
            j++;
        }
    }

    return grupos;
}

function clicar(botao) {
    /* 
    Se o mesmo botão for clicado novamente sem que outro botão tenha sido clicado entre os cliques, o código 
    dentro da função clicar não será executado
    */
    if (!cliques[botao]) {
        // Criação do vetor gruposDeTres cujos elementos são vetores com 3 imagens sequenciais do banner em cada um deles
        //var grupoDeTres = agrupar(imagens, numImgsExibidas);

        // Controla a exibição do display das imagens ao apertar os botões
        // grupoDeTres = [[img1, img2, img3],
        //                [img4, img5, img6],
        //                [img7, img8, img9]]
        
        for (var i = 0; i < numGrupos; i++) {
            for (var j = 0; j < numImgsExibidas; j++) {
                // Percorre todo o vetor botoes
                for (k = 0; k < numGrupos; k++) {
                    // Condicional para evitar erros caso não exista o botão de índice i
                    if (botoes[i]) {
                        // Se a posição da vez do vetor coincidir com botão clicado
                        if (i == botao) {
                            // Muda a cor do botão pra cinza
                            botoes[botao].style.backgroundColor = 'gray';
                            // Exibe o grupo associado a ele
                            gruposFormados[i][j].style.display = 'inline-block';
                            //break;
                        }
                        // Mas caso seja outro botão
                        else {
                            // Muda a cor dele pra branco
                            botoes[i].style.backgroundColor = 'white';
                            // Não exibe o grupo associado a ele
                            gruposFormados[i][j].style.display = 'none';
                        }
                    }
                }
            }
        }
        
        /* 
        Garante que o código dentro da função clicar() seja executado apenas uma vez para cada conjunto de n
        imagens correspondente a cada botão. Isso evita a execução repetida e desnecessária do código quando 
        o usuário já estiver visualizando o conjunto de imagens correspondente ao botão clicado
        */
        for (i = 0; i < quantGrupos; i++) {
            if (i == botao) {
                cliques[i] = true;
            }
            else {
                cliques[i] = false;
            }
        }
    }     
}

//======================================================================================================
//                                       Função Principal (main)
//======================================================================================================

var numImgsExibidas;
// Pega a largura atual da janela do navegador
larguraJanela = window.innerWidth;
if (larguraJanela <= 450) {
    numImgsExibidas = 1;
} 
else if (larguraJanela > 450 && larguraJanela <= 1100) {
    numImgsExibidas = 2;
} 
else {
    // Para larguras de janela maiores que 1100px
    numImgsExibidas = 3;
}


// Adiciona um escutador de envento na janela para escutar se a janela foi redimensionada
//window.addEventListener('resize', definirNumImgs);
var tempoDeEspera;
window.addEventListener('resize', function() {
    clearTimeout(tempoDeEspera);
    definirNumImgs();
    tempoDeEspera = setTimeout(function() {
        location.reload();
    }, 200); // Aguarda 200 milissegundos após o redimensionamento antes de atualizar a página
});


// Seleciona todos os elementos img que estão dentro da div de id = "carrossel" e coloca no vetor imagens
var imagens = document.querySelectorAll('div#carrossel>a>img');

// Cria grupos de n imagens das imagens que o progrmador colocou no HTML
var gruposFormados = agrupar(imagens, numImgsExibidas);

// Seleciona o elemento div de id = "controle" (pai dos botões)
var controle = document.querySelector('div#controle');

// Cria novos elementos (botões) pra cada grupo de n imagens que existir (máximo 5)
// Se o tamanho do vetor imagens for um múltiplo de n
var numImgs = imagens.length;
var quantGrupos = gruposFormados.length;

var numGrupos = gruposFormados.length;
var i;

for (i = 1; i < quantGrupos; i++) {
    // Cria mais um novo botão
    botao = document.createElement('span');

    // Adiciona uma classe ao novo botão
    botao.classList.add('controles');

    // Adiciona o novo botão como filho do elemento pai
    controle.appendChild(botao);

    // Limita a quantidade de novos botões para no máximo 4
    if (i == 4) {
        break
    }
}


// Seleciona todos os elementos de class = "controles" e coloca no vetor botoes
var botoes = document.querySelectorAll('.controles');

// Só as n primeiras imagens inicializam com display inline-block (as outras estão apagadas -> display none no CSS)
// Condicional para evitar erros caso não exista imagens
if (imagens) {
    for (i = 0; i < numImgs; i++) {
        if (i < numImgsExibidas) {
            imagens[i].style.display = 'inline-block';
        }
    }
}
// Inicializa as n variáves de controle de clique como false e adiciona um escutador de eventos de clique em cada um dos botões do banner
var cliques = [];
var numBotoes = botoes.length;
// Condicional para evitar erros caso não exista botões
if (botoes) {
    for (i = 0; i < numGrupos; i++) {
        cliques.push(false);
        // Condicional para evitar erros caso não exista o botão de índice i
        if (botoes[i]) {
            botoes[i].addEventListener('click', (function(i) {
                    return function() {
                            clicar(i);
                    }
            })(i));
        }
    }
}