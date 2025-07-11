/* Funções

menuPrincipal() = para mostrar o menu principal;
jogo() = para começar o jogo;
placar() = mostra o placar de líderes;


**Anotações (apagar depois):

Usar o splice() pra tirar coisas do vetor;
implementar dicas, sendo elas a das cartas (rei - não elimina nada, Ás - elimina uma alternativa, duque elimina 2 alternativas)
pular uma pergunta e assistente natural (dica de uma inteligência humana)
fazer uma função que retorna metade do dinheiro atual (ou seila) se o usuário parar 
*/

var perguntas = [
    {
        pergunta: "Qual organela realiza a respiração celular?",
        alternativa1: "A) Complexo de Golgi",
        alternativa2: "B) Mitocôndria",
        alternativa3: "C) Ribossomos",
        resposta: "B",
        dicaIn: "Ela absorve nutrientes e os converte em energia para a célula."
    },
    {
        pergunta: "Qual das seguintes frases foi popularizada por J. Robert Oppenheimer?",
        alternativa1: "A) \"Agora me tornei Morte, o destruidor de mundos.\"",
        alternativa2: "B) \"Um vencedor é um sonhador que nunca desiste.\"", //Nelson Mandela
        alternativa3: "C) \"Em meio à escuridão, a luz persiste.\"", //Mahatma Gandhi
        resposta: "A",
        dicaIn: "Não é algo muito positivo."
    },
    {
        pergunta: "Qual dos seguintes filmes nacionais é o segundo filme estrangeiro mais visto do mundo?",
        alternativa1: "A) O Auto da Compadecida",
        alternativa2: "B) Tropa de Elite",
        alternativa3: "C) Cidade de Deus",
        resposta: "C",
        dicaIn: "Na época em que estreou, foi dito que esse filme era muito exagerado na violência."
    },
    {
        pergunta: "Quem assinou a Lei Áurea, em 1888, para dar fim a escravidão no Brasil?",
        alternativa1: "A) Dom Pedro II",
        alternativa2: "B) Princesa Isabel",
        alternativa3: "C) Leopoldina de Bragança",
        resposta: "B",
        dicaIn: "Foi uma mulher."
    },
    {
        pergunta: "Quantos gols marcou Rogério Ceni ao longo de sua carreira no futebol?",
        alternativa1: "A) 131 gols",
        alternativa2: "B) 89 gols",
        alternativa3: "C) 157 gols",
        resposta: "A",
        dicaIn: "Ele marcou mais de 100 gols."
    },
    {
        pergunta: "Quem foi o vocalista principal da banda Linkin Park?",
        alternativa1: "A) Marshall Bruce Mathers III",
        alternativa2: "B) Mike Shinoda",
        alternativa3: "C) Chester Bennington",
        resposta: "C",
        dicaIn: "Ele nos deixou em 2017."
    },
    {
        pergunta: "Qual dessas cidades é considerada a Capital Mundial da Cachaça?",
        alternativa1: "A) Padre Carvalho",
        alternativa2: "B) Salinas",
        alternativa3: "C) Curral de Dentro",
        resposta: "B",
        dicaIn: "é a mais populosa entre as três opções."
    },
    {
        pergunta: "Em que data surgiu a TV Globinho?",
        alternativa1: "A) 11 de Setembro de 2001",
        alternativa2: "B) 4 de Março de 2004",
        alternativa3: "C) 3 de Julho de 2000",
        resposta: "C",
        dicaIn: "Foi antes de 2004."
    },
    {
        pergunta: "Quem foi Edson Arantes do Nascimento",
        alternativa1: "A) Cálcio",
        alternativa2: "B) Tostão",
        alternativa3: "C) Pelé",
        resposta: "C",
        dicaIn: "Ele marcou mais de 400 gols em sua carreira."
    },
    {
        pergunta: "Qual dos seguintes aeroportos se localiza na cidade do Rio de janeiro? ",
        alternativa1: "A) Aeroporto Santos Dumont",
        alternativa2: "B) Aeroporto Luís Eduardo Magalhães",
        alternativa3: "C) Aeroporto Santa Genoveva",
        resposta: "A",
        dicaIn: "Seu nome foi inspirado em um inventor brasileiro."
    },
    {
        pergunta: "qual presidente brasileiro renunciou ao cargo em 1992?",
        alternativa1: "A) João Goulart",
        alternativa2: "B) Itamar Franco",
        alternativa3: "C) Fernando Collor",
        resposta: "C",
        dicaIn: "Foi ele quem confiscou as poupanças de inúmeros brasileiros."
    },
    {
        pergunta: "Qual destes países não fica no continente americano?",
        alternativa1: "A) Itália",
        alternativa2: "B) Panamá",
        alternativa3: "C) Costa Rica",
        resposta: "A",
        dicaIn: "Nesse país, não se fala a mesma linguagem que as duas outras opções."
    },
    {
        pergunta: "O que é um sudário?",
        alternativa1: "A) Tecido usado para cobrir cadáveres",
        alternativa2: "B) O mesmo que um xale",
        alternativa3: "C) Pessoa que nasceu no Sudão",
        resposta: "A",
        dicaIn: "A resposta envolve Jesus Cristo."
    },
    {
        pergunta: "O que é uma \"piroga\"?",
        alternativa1: "A) Uma árvore rara",
        alternativa2: "B) Uma embarcação indígena",
        alternativa3: "C) Uma arma africana",
        resposta: "B",
        dicaIn: "Possui madeira em sua composição."
    },
    {
        pergunta: "Em que dia nasceu e em que dia foi registrado o Presidente Lula?",
        alternativa1: "A) 9 e 26 de Setembro",
        alternativa2: "B) 8 e 27 de Outubro",
        alternativa3: "C) 6 e 27 de Outubro",
        resposta: "C",
        dicaIn: "Ambas as coisas ocorreram no décimo mês do ano."
    }
]

menuPrincipal();

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

    let perguntasRestantes = [...perguntas];
    let nome, rodada, prêmio, cartas = true, pular = true, assistente = true;
    const prompt = require('prompt-sync')();

    console.log("");
    nome = prompt("Digite seu nome:");


    for(rodada = 1; rodada <= 5; rodada++) {
        let perguntaAtual, opcao = "J";
        perguntaAtual = escolhePergunta(perguntasRestantes);

        console.log(`-------<| ${nome} - ${rodada}ª rodada |>-------\n`);

        console.log(perguntaAtual.pergunta);

        console.log(`\n${perguntaAtual.alternativa1}`);
        console.log(`${perguntaAtual.alternativa2}`);
        console.log(`${perguntaAtual.alternativa3}`);

        console.log("\nDigite a letra correspondente a sua alernativa, ou digite\n",
                    "1. Cartas | 2. Assistente natural\n",
                    "para usar uma dica, ou digite P para parar.\n\n");

        while (!["A", "B", "C", "P", "1", "2"].includes(opcao.toUpperCase())) {

            opcao = prompt("Opção: ");

            checaOpcao: if (opcao.toUpperCase() == perguntaAtual.resposta) {
                console.log("Certa resposta!");

            } else if (opcao.toUpperCase() == "A", "B", "C" && opcao.toUpperCase() != perguntaAtual.resposta) {
                console.log("Reposta errada, sinto muito...");

            } else if (opcao.toUpperCase() == "1") {
                if (cartas == false) {
                    console.log("Você já usou as cartas!");
                    opcao = "0";
                    break checaOpcao;
                }
                dicaCartas(perguntaAtual.resposta);
                cartas = false;
                
            } else if (opcao.toUpperCase() == "2") {
                if (cartas == false) {
                    console.log("Você já usou o assistente natural!");
                    opcao = "0";
                    break checaOpcao;
                }
                dicaAssistente(perguntaAtual.dicaIn);
                assistente = false;

            } else if (opcao.toUpperCase() == "P") {
                paraJogo();
                
            } else if (opcao.toUpperCase() != "A", "B", "C", "P", "1", "2") {
                console.log("\nDigite uma das opções fornecidas.\n");
            }
        }  
    }
}

function placar() {
    
}

function escolhePergunta(perguntas) {
    let remover = Math.floor(Math.random() * perguntas.length);

    return perguntas.splice(remover, 1)[0];
}

function dicaCartas(resposta) {
    cartaVirada = Math.floor(Math.random() * 3);
    opcaoEliminada = Math.floor(Math.random());

    console.log("Embaralhando cartas...\n", 
                "Escolhendo uma carta...\n",
                "A carta virada foi:\n\n");
    
    if (cartaVirada == 0) {
        console.log("Um rei! Nenhuma resposta foi eliminada.")
    
    } else if (cartaVirada == 1) {

        console.log("Um ás!");
        
        if (resposta == "A") {
            if(opcaoEliminada == 0) {
                console.log("A opção B é falsa.");

            } else {
                console.log("A opção C é falsa.");

            }
        } else if (resposta == "B") {
            if(opcaoEliminada == 0) {
                console.log("A opção A é falsa.");

            } else if(opcaoEliminada == 1) {
                console.log("A opção C é falsa.");
            }
        } else {
            if(opcaoEliminada == 0) {
                console.log("A opção A é falsa.");

            } else if(opcaoEliminada == 1) {
                console.log("A opção B é falsa.");

            }
        }
    } else {

        console.log("Um duque (dois)!");

        if (resposta == "A")
            console.log("As opções B e C são falsas.");
        
        else if (resposta == "B")
            console.log("As opções A e C são falsas.");
        
        else 
            console.log("As opções B e C são falsas.");
    }
    
}

function dicaAssistente(dicaIn) {
    console.log("Um ser humano disse o seguinte:\n",
                dicaIn, "\n\n");
    
}

function paraJogo() {

}