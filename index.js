menuPrincipal();

/* Funções

menuPrincipal() = para mostrar o menu principal;
jogo() = para começar o jogo;
placar() = mostra o placar de líderes;


**Anotações (apagar depois):

Usar o splice() pra tirar coisas do vetor;
implementar dicas, sendo elas a das cartas (rei - não elimina nada, Ás - elimina uma alternativa, duque elimina 2 alternativas)
pular uma pergunta e assistente natural (dica de uma inteligência humana)

*/

const perguntas = [
    {
        pergunta: "Qual organela realiza a respiração celular?",
        alternativa1: "A) Complexo de Golgi",
        alternativa2: "B) Mitocôndria",
        alternativa3: "C) Ribossomos",
        resposta: "B",
        dica_ia: "Ela absorve nutrientes e os converte em energia para a célula."
    },
    {
        pergunta: "Qual das seguintes frases foi popularizada por J. Robert Oppenheimer?",
        alternativa1: "A) \"Agora me tornei Morte, o destruidor de mundos.\"",
        alternativa2: "B) \"Um vencedor é um sonhador que nunca desiste.\"", //Nelson Mandela
        alternativa3: "C) \"Em meio à escuridão, a luz persiste.\"", //Mahatma Gandhi
        resposta: "A",
        dica_ia: "Não é algo muito positivo."
    },
    {
        pergunta: "Qual dos seguintes filmes nacionais é o segundo filme estrangeiro mais visto do mundo?",
        alternativa1: "A) O Auto da Compadecida",
        alternativa2: "B) Tropa de Elite",
        alternativa3: "C) Cidade de Deus",
        resposta: "C",
        dica_ia: "Na época em que estreou, foi dito que esse filme era muito exagerado na violência."
    },
    {
        pergunta: "Quem assinou a Lei Áurea, em 1888, para dar fim a escravidão no Brasil?",
        alternativa1: "A) Dom Pedro II",
        alternativa2: "B) Princesa Isabel",
        alternativa3: "C) Leopoldina de Bragança",
        resposta: "B",
        dica_ia: "Foi uma mulher."
    },
    {
        pergunta: "Quantos gols marcou Rogério Ceni ao longo de sua carreira no futebol?",
        alternativa1: "A) 131 gols",
        alternativa2: "B) 89 gols",
        alternativa3: "C) 157 gols",
        resposta: "A",
        dica_ia: "Ele marcou mais de 100 gols."
    },
    {
        pergunta: "Quem foi o vocalista principal da banda Linkin Park?",
        alternativa1: "A) josé",
        alternativa2: "B) Mike Shinoda",
        alternativa3: "C) Chester Bennington",
        resposta: "C",
        dica_ia: "Ele nos deixou em 2017."
    },
    {
        pergunta: "Qual dessas cidades é considerada a Capital Mundial da Cachaça?",
        alternativa1: "A) Padre Carvalho",
        alternativa2: "B) Salinas",
        alternativa3: "C) Curral de Dentro",
        resposta: "B",
        dica_ia: "é a mais populosa entre as três opções."
    },
    {
        pergunta: "Em que data surgiu a TV Globinho?",
        alternativa1: "A) 11 de Setembro de 2001",
        alternativa2: "B) 4 de Março de 2004",
        alternativa3: "C) 3 de Julho de 2000",
        resposta: "C",
        dica_ia: "Foi antes de 2004."
    },
    {
        pergunta: "Quem foi Edson Arantes do Nascimento",
        alternativa1: "A) Cálcio",
        alternativa2: "B) Tostão",
        alternativa3: "C) Pelé",
        resposta: "C",
        dica_ia: "Ele marcou mais de 400 gols em sua carreira."
    },
    {
        pergunta: "Qual dos seguintes aeroportos se localiza na cidade do Rio de janeiro? ",
        alternativa1: "A) Aeroporto Santos Dumont",
        alternativa2: "B) Aeroporto Luís Eduardo Magalhães",
        alternativa3: "C) Aeroporto Santa Genoveva",
        resposta: "A",
        dica_ia: "Seu nome foi inspirado em um inventor brasileiro."
    },
    {
        pergunta: "qual presidente brasileiro renunciou ao cargo em 1992?",
        alternativa1: "A) João Goulart",
        alternativa2: "B) Itamar Franco",
        alternativa3: "C) Fernando Collor",
        resposta: "C",
        dica_ia: "Foi ele quem confiscou as poupanças de inúmeros brasileiros."
    },
    {
        pergunta: "Qual destes países não fica no continente americano?",
        alternativa1: "A) Itália",
        alternativa2: "B) Panamá",
        alternativa3: "C) Costa Rica",
        resposta: "A",
        dica_ia: "Nesse país, não se fala a mesma linguagem que as duas outras opções."
    },
    {
        pergunta: "O que é um sudário?",
        alternativa1: "A) Tecido usado para cobrir cadáveres",
        alternativa2: "B) O mesmo que um xale",
        alternativa3: "C) Pessoa que nasceu no Sudão",
        resposta: "A",
        dica_ia: "A resposta envolve Jesus Cristo."
    },
    {
        pergunta: "O que é uma \"piroga\"?",
        alternativa1: "A) Uma árvore rara",
        alternativa2: "B) Uma embarcação indígena",
        alternativa3: "C) Uma arma africana",
        resposta: "B",
        dica_ia: "Possui madeira em sua composição."
    },
    {
        pergunta: "Em que dia nasceu e em que dia foi registrado o Presidente Lula?",
        alternativa1: "A) 9 e 26 de Setembro",
        alternativa2: "B) 8 e 27 de Outubro",
        alternativa3: "C) 6 e 27 de Outubro",
        resposta: "C",
        dica_ia: "Ambas as coisas ocorreram no décimo mês do ano."
    }
]

function menuPrincipal() {

    const prompt = require('prompt-sync')();

    console.log("-------<| Show do Milhão |>-------\n\n", 
                 
                "Bem-vindo! Você deseja...\n\n",
                
                "[1] Jogar;\n",
                "[2] Ver placar de líderes;\n",
                "[Outro caractere] para encerrar.\n\n");
                
    let opcao = prompt("Opção: ");
    
    switch(opcao) {

    case "1":
        jogo();
        break;

    case "2":
        placar();
        break;

    default:
        console.log("Até mais!");
        process.exit(0);
    }
    
}

function jogo() {

    let nome, rodada;

    nome = prompt("Qual é o seu nome");

    for(rodada = 1; rodada <= 5; rodada++) {
        console.log(`-------<| ${nome} - ${rodada}ª rodada |>-------`);

        console.log("");
    }
}