# Pokédex
 Pokédex criada utilizando a PokéApi para retorno de dados. Os áudios foram pegos através de uma fonte externa, pois eles não são nativos da API.
 
 # Resumo 
 Essa Pokédex foi criada com o intuído de demonstrar minhas habilidades em Front-end & Back-end. Na Pokédex inclui todos os pokemons existentes com seus respectivos áudios, descrições e tipos.
 
 # Desafios
 Fazer esse projeto foi muito emocionante não apenas por ser algo de meu gosto, mas sim pelos desafios apresentados, vou citar alguns, pois acho que se aplicam em muito mais do que apenas nesse projeto. 
 
1 — Implementação do áudio → Minha maior dificuldade era primeiro saber onde achar os áudios já que não eram nativos da API e dentro desse mesmo tópico um desafio bem grande foi parear o pokemon correto com seu áudio, consegui fazer uma lógica bastante interessante em cima disso que comparava o nome ou número do pokémon com o nome e número do arquivo. 


2 — Relacionar o tipo do pokémon com a cor do mesmo → Em pokémon você tem os tipos dos pokémons e cada tipo tem uma determinda cor, o desafio em questão era trocar o Background-color da Badge de acordo com o tipo do pokémon Ex: Water → fundo azul, Fire → fundo vermelho e assim por diante. Criei uma lógica muito peculiar que basicamente consistia no armazenamento das cores em um objeto e logo depois outra lógica que acessava esse objeto de acordo com a resposta do servidor.


3 — Como utilizar uma promessa, http request e o Angular JS de uma forma mais correta → Esse desafio foi bem interessante, primeiro vamos falar das promessas. Nelas você pode fazer de diversas maneiras, porém se não tiver o successCallback e o errorCallback você não consegue debugar ou ver o retorno dos dados de uma forma concisa. Já no http request tive que fazer algo que ele seja responsivo de acordo com o número do pokémon ou o nome dele. E por fim no Angular JS consigo afirmar que trabalhei com ele dentro da ServiceNow e alguns projetos fora, e posso afirmar que dependendo de onde utiliza você pode ter uma variação. Aqui utilizei o ng-app e o ng-module coisa que dentro da ServiceNow eu nunca precisei setar, mas isso é uma coisa boa, pois você consegue modular seu aplicativo de uma maneira mais eficaz.

 # Tecnologias utilizadas
 HTML5 | CSS | JavaScript | AngularJS | BootStrap 4    
