// Função que alterna entre a bandeira dos EUA e a bandeira do Brasil a cada clique
function trocar_idioma() {
    if (bandeira.src.includes("imagens/idioma-ingles.jpg")) {
        bandeira.src = "imagens/idioma-portugues-brasil.jpg";

        // Coloca todos os textos da página em inglês
        cardapio.innerText = 'Menu';
        horarios.innerText = 'Hours';
        contato.innerText = 'Contact';

        h1.innerText = 'Menu';

        todosh2[0].innerText = 'Appetizers';

        todosh3[0].innerText = 'Mediterranean Bruschetta';
        todosp[0].innerText = 'Delicious slices of crispy bread topped with fresh tomatoes, aromatic basil, and creamy buffalo mozzarella.';

        todosh3[1].innerText = 'Crispy Shrimp with Lemon Aioli';
        todosp[2].innerText = 'Juicy shrimp, breaded and fried until golden brown, served with a light and refreshing lemon aioli.';

        todosh3[2].innerText = 'Beet Carpaccio with Goat Cheese';
        todosp[4].innerText = 'Thin slices of beetroot marinated in a delicate vinaigrette, accompanied by creamy goat cheese and fresh arugula.';

        todosh3[3].innerText = 'Brie Cheese Croquettes with Pepper Jelly';
        todosp[6].innerText = 'Crispy on the outside and creamy on the inside, these croquettes are filled with melted brie cheese and served with a sweet and spicy pepper jelly.';
    
        todosh3[4].innerText = 'Salmon Tartare with Avocado and Passion Fruit Sauce';
        todosp[8].innerText = 'Fresh and flavorful tartare, prepared with fresh salmon, creamy avocado, and a citrusy and aromatic passion fruit sauce.';
        
        todosh2[1].innerText = 'Main Courses';

        todosh3[5].innerText = 'Filet Mignon with Red Wine Sauce';
        todosp[10].innerText = 'Juicy grilled filet mignon, drizzled with a rich red wine sauce, accompanied by melt-in-your-mouth au gratin potatoes.';

        todosh3[6].innerText = 'Chicken Stuffed with Gruyère Cheese and Spinach';
        todosp[12].innerText = 'Tender and juicy chicken breast stuffed with melted Gruyère cheese and fresh spinach leaves, drizzled with a delicious mustard sauce.';

        todosh3[7].innerText = 'Fresh Pasta with Shrimp, Cherry Tomatoes, and Basil';
        todosp[14].innerText = 'Handcrafted fresh pasta tossed in a sauce with juicy shrimp, ripe cherry tomatoes, and fragrant fresh basil leaves.';

        todosh3[8].innerText = 'Fish of the Day with Creamy Peruvian Potato Purée';
        todosp[16].innerText = 'Fresh fish of the day, delicately grilled and served with creamy Peruvian potato purée and a fresh herb sauce.';

        todosh3[9].innerText = 'Truffle Wild Mushroom Risotto';
        todosp[18].innerText = 'Creamy and comforting risotto, prepared with wild mushrooms and finished with a touch of black truffles for an irresistible flavor.';

        todosh2[2].innerText = 'Drinks';

        todosh3[10].innerText = 'Red Berry Caipirinha';
        todosp[20].innerText = 'A sophisticated take on the classic Brazilian caipirinha, made with premium quality cachaça and a mix of fresh red berries, providing a perfect balance of sweetness and acidity.';

        todosh3[11].innerText = 'Gin and Tonic Cocktail with Juniper Berries';
        todosp[22].innerText = 'A refreshing and aromatic cocktail made with premium gin, craft tonic water, and hints of juniper berries, providing a unique experience of flavors and aromas.';

        todosh3[12].innerText = 'Brut Rosé Sparkling Wine';
        todosp[24].innerText = 'An elegant and sophisticated sparkling wine with a delicate pink hue and fruity aromas, perfect for celebrating special moments or accompanying a gourmet meal.';
        todosp[25].innerHTML = '<strong class="preco">R$ 49,90</strong><br>(bottle)'

        todosh3[13].innerText = 'Green Tea, Ginger, and Cucumber Mocktail';
        todosp[26].innerText = 'A refreshing non-alcoholic option made with fresh green tea, slices of ginger, and cucumber, providing a burst of flavors and a revitalizing sensation.';

        todosh3[14].innerText = 'Argentinian Malbec Red Wine';
        todosp[28].innerText = 'A full-bodied and rich red wine from Argentina with intense notes of dark fruits and spices, perfect for pairing with the main courses on the gourmet menu.';
        todosp[29].innerHTML = '<strong class="preco">R$ 59,90</strong><br>(bottle)'

        todosh2[3].innerText = 'Desserts';

        todosh3[15].innerText = 'Bourbon Vanilla Crème Brûlée';
        todosp[30].innerText = 'A delicate and creamy dessert made with bourbon vanilla, topped with a crispy layer of caramelized sugar, providing an irresistible combination of flavors and textures.';

        todosh3[16].innerText = 'Belgian Chocolate Mousse with Orange Zest';
        todosp[32].innerText = 'An incredibly smooth and indulgent Belgian chocolate mousse, adorned with delicate orange zest that enhances the rich and deep flavor of chocolate.';

        todosh3[17].innerText = 'Condensed Milk Pudding with Caramel Sauce';
        todosp[34].innerText = 'A Brazilian classic reinvented with elegance: a delicately creamy condensed milk pudding, covered with an irresistible golden caramel sauce.';

        todosh3[18].innerText = 'Classic Tiramisu with Espresso';
        todosp[36].innerText = 'An authentic interpretation of the famous Italian tiramisu, with layers of biscuits soaked in espresso coffee, mascarpone cheese cream, and cocoa powder, creating a sophisticated and flavorful dessert.';

        todosh3[19].innerText = 'Lemon Tart with Italian Meringue';
        todosp[38].innerText = 'A refreshing and balanced lemon tart, with a citrusy lemon filling and a light and airy Italian meringue topping, providing a unique and satisfying flavor experience.';


        copyright.innerText = '&copy; 2024 Cantinho Gourmet. All rights reserved.';
    } 
    else if (bandeira.src.includes("imagens/idioma-portugues-brasil.jpg")) {
        bandeira.src = "imagens/idioma-ingles.jpg";

        // Coloca todos os textos da página em português do Brasil
        cardapio.innerText = 'Cardápio';
        horarios.innerText = 'Horários';
        contato.innerText = 'Contato';

        h1.innerText = 'Cardápio';

        todosh2[0].innerText = 'Entradas';

        todosh3[0].innerText = 'Bruschetta Mediterrânea';
        todosp[0].innerText = 'Deliciosas fatias de pão crocante, cobertas com tomates frescos, manjericão aromático e mozarela de búfala cremosa.';

        todosh3[1].innerText = 'Camarões Crocantes com Aioli de Limão';
        todosp[2].innerText = 'Camarões suculentos, empanados e fritos até ficarem dourados, servidos com um aioli de limão leve e refrescante.';

        todosh3[2].innerText = 'Carpaccio de Beterraba com Queijo de Cabra';
        todosp[4].innerText = 'Finas fatias de beterraba marinadas em um delicado molho de vinagrete, acompanhadas de queijo de cabra cremoso e rúcula fresca.';

        todosh3[3].innerText = 'Croquetes de Queijo Brie com Geleia de Pimenta';
        todosp[6].innerText = 'Croquetes crocantes por fora e cremosos por dentro, recheados com queijo brie derretido e servidos com uma geleia de pimenta agridoce.';

        todosh3[4].innerText = 'Tartare de Salmão com Abacate e Molho de Maracujá';
        todosp[8].innerText = 'Tartare fresco e saboroso, preparado com salmão fresco, abacate cremoso e um molho de maracujá cítrico e aromático.';

        todosh2[1].innerText = 'Pratos Principais';

        todosh3[5].innerText = 'Filé Mignon ao Molho de Vinho Tinto';
        todosp[10].innerText = 'Suculento filé mignon grelhado, regado com um rico molho de vinho tinto, acompanhado de batatas gratinadas derretendo na boca.';

        todosh3[6].innerText = 'Frango Recheado com Queijo Gruyère e Espinafre';
        todosp[12].innerText = 'Peito de frango tenro e suculento recheado com queijo Gruyère derretido e folhas frescas de espinafre, regado com um delicioso molho de mostarda.';

        todosh3[7].innerText = 'Massa Fresca com Camarões, Tomate Cereja e Manjericão';
        todosp[14].innerText = 'Massa fresca artesanal, envolvida em um molho de camarões suculentos, tomates cereja maduros e folhas frescas de manjericão perfumadas.';

        todosh3[8].innerText = 'Peixe do Dia com Purê de Mandioquinha';
        todosp[16].innerText = 'Peixe fresco do dia, delicadamente grelhado e servido com um cremoso purê de mandioquinha e um molho de ervas frescas.';

        todosh3[9].innerText = 'Risoto de Cogumelos Selvagens Trufado';
        todosp[18].innerText = 'Risoto cremoso e reconfortante, preparado com cogumelos selvagens, finalizado com um toque de trufas negras para um sabor irresistível.';

        todosh2[2].innerText = 'Bebidas';

        todosh3[10].innerText = 'Caipirinha de Frutas Vermelhas';
        todosp[20].innerText = 'Uma versão sofisticada da clássica caipirinha brasileira, feita com cachaça de qualidade premium e uma mistura de frutas vermelhas frescas, proporcionando um equilíbrio perfeito entre doçura e acidez.';

        todosh3[11].innerText = 'Coquetel de Gin Tônica com Zimbro';
        todosp[22].innerText = 'Um coquetel refrescante e aromático, preparado com gin premium, água tônica artesanal e toques de zimbro, proporcionando uma experiência única de sabores e aromas.';

        todosh3[12].innerText = 'Espumante Brut Rosé';
        todosp[24].innerText = 'Um espumante elegante e sofisticado, com uma cor rosada delicada e aromas frutados, perfeito para celebrar momentos especiais ou para acompanhar uma refeição gourmet.';
        todosp[25].innerHTML = '<strong class="preco">R$ 49,90</strong><br>(garrafa)'

        todosh3[13].innerText = 'Mocktail de Chá Verde, Gengibre e Pepino';
        todosp[26].innerText = 'Uma opção refrescante e sem álcool, preparada com chá verde fresco, fatias de gengibre e pepino, proporcionando uma explosão de sabores e uma sensação revitalizante.';

        todosh3[14].innerText = 'Vinho Tinto Malbec Argentino';
        todosp[28].innerText = 'Um vinho tinto encorpado e rico, originário da Argentina, com notas intensas de frutas escuras e especiarias, perfeito para harmonizar com os pratos principais do menu gourmet.';
        todosp[29].innerHTML = '<strong class="preco">R$ 59,90</strong><br>(garrafa)'

        todosh2[3].innerText = 'Sobremesas';

        todosh3[15].innerText = 'Crème Brûlée de Baunilha Bourbon';
        todosp[30].innerText = 'Uma delicada e cremosa sobremesa de baunilha bourbon, com uma casquinha crocante de açúcar caramelizado por cima, proporcionando uma combinação de sabores e texturas irresistíveis.';

        todosh3[16].innerText = 'Mousse de Chocolate Belga com Raspas de Laranja';
        todosp[32].innerText = 'Uma mousse de chocolate belga incrivelmente suave e indulgente, adornada com delicadas raspas de laranja que realçam o sabor rico e profundo do chocolate.';

        todosh3[17].innerText = 'Pudim de Leite Condensado com Calda de Caramelo';
        todosp[34].innerText = 'Um clássico brasileiro reinventado com elegância: um pudim de leite condensado delicadamente cremoso, coberto por uma irresistível calda de caramelo dourado.';

        todosh3[18].innerText = 'Tiramisù Clássico com Café Expresso';
        todosp[36].innerText = 'Uma interpretação autêntica do famoso tiramisù italiano, com camadas de biscoitos embebidos em café expresso, creme de queijo mascarpone e cacau em pó, criando uma sobremesa sofisticada e cheia de sabor.';

        todosh3[19].innerText = 'Torta de Limão com Merengue Italiano';
        todosp[38].innerText = 'Uma torta de limão refrescante e equilibrada, com um recheio de limão cítrico e uma cobertura de merengue italiano leve e aerado, proporcionando uma experiência de sabor única e satisfatória.';

        copyright.innerText = '&copy; 2024 Cantinho Gourmet. Todos os direitos reservados.';
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

var copyright = document.querySelector('footer > p')