const path = require("path");
const arquivoPlacar = path.join(__dirname, "placar.json");

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

    while(true) {
        console.log("-------<| Show do Milhão |>-------\n\n", 
                    
                    "Bem-vindo! Você deseja...\n\n",
                    
                    "[1] Jogar;\n",
                    "[2] Ver placar de líderes;\n",
                    "[Outro caractere] para encerrar.\n\n");
                    
        let opcaoMenu = prompt("Opção: ");
        
        switch(opcaoMenu) {

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
}

function jogo() {

    let perguntasRestantes = [...perguntas];
    let nome, rodada, premio, cartas = true, assistente = true;
    const prompt = require('prompt-sync')();

    console.log("");
    nome = prompt("Digite seu nome: ");


    for(rodada = 1; rodada <= 10; rodada++) {
        let perguntaAtual, opcao = "J";
        perguntaAtual = escolhePergunta(perguntasRestantes);

        console.log(`\n-------<| ${nome} - ${rodada}ª rodada |>-------\n\n`);

        exibePergunta(rodada, perguntaAtual);

        while (!["A", "B", "C", "P", "1", "2"].includes(opcao.toUpperCase())) {

            opcao = prompt("Opção: ");

            checaOpcao: if (opcao.toUpperCase() == perguntaAtual.resposta) {
                console.log("Certa resposta!");

            } else if (["A", "B", "C"].includes(opcao.toUpperCase()) && opcao.toUpperCase() != perguntaAtual.resposta) {
                console.log("Reposta errada, sinto muito...");
                premio = perdeJogo(rodada);
                atualizaPlacar(nome, rodada, premio);
                return;

            } else if (opcao.toUpperCase() == "1") {
                if (cartas == false) {
                    console.log("Você já usou as cartas!");
                    opcao = "0";
                    break checaOpcao;
                }
                dicaCartas(perguntaAtual.resposta);
                cartas = false;
                
            } else if (opcao.toUpperCase() == "2") {
                if (assistente == false) {
                    console.log("Você já usou o assistente natural!");
                    opcao = "0";
                    break checaOpcao;
                }
                dicaAssistente(perguntaAtual.dicaIn);
                assistente = false;

            } else if (opcao.toUpperCase() == "P") {
                premio = paraJogo(rodada);
                
            } else if (opcao.toUpperCase() != "A", "B", "C", "P", "1", "2") {
                console.log("\nDigite uma das opções fornecidas.\n");
            }
        } if (rodada > 10) {
            console.log("Parabéns, você ganhou o prêmio final de 1.000.000 de reais!\n");
            atualizaPlacar(nome, rodada, premio);
        }
    }
}

function placar() {

    const fs = require("fs");
    
    try {
    
    const placarArquivo = fs.readFileSync(arquivoPlacar, "utf8");
    const placar = JSON.parse(placarArquivo);

    console.log("-------<| Placar de líderes |>-------\n\n");

    placar.forEach((jogador, posicao) => {

        console.log(`${posicao + 1}º Lugar:\n`,
                    `Nome: ${jogador.nome};`,
                    `Rodada: ${jogador.rodada}ª;`,
                    `Prêmio: R$ ${jogador.premio}\n\n`);
    });

    } catch (error) {
    console.error("Ocorreu um erro ao ler o placar: ", error);

    } 

}

function atualizaPlacar(nome, rodada, premio) {
    
    const fs = require("fs");
    const path = require("path");
    const arquivoPlacar = path.join(__dirname, "placar.json");

    let todoPlacar = [];
    let jogador = {
        nome: nome,
        rodada: rodada,
        premio: premio
    }
    
    try {

        if (fs.existsSync(arquivoPlacar)) {
            let dadosPlacar = fs.readFileSync(arquivoPlacar, "utf8");
            
            if (dadosPlacar) {
                todoPlacar = JSON.parse(dadosPlacar);
            }
        }

        todoPlacar.push(jogador);
        todoPlacar.sort((a, b) => b.premio - a.premio);

        let novoPlacar = JSON.stringify(todoPlacar, null, 2);

        fs.writeFileSync(arquivoPlacar, novoPlacar, "utf8");

    } catch (error) {
        console.error("Ocorreu um erro ao atualizar o placar: ", error);

    }
}

function escolhePergunta(perguntas) {
    let remover = Math.round(Math.random() * perguntas.length);

    return perguntas.splice(remover, 1)[0];
}

function dicaCartas(resposta) {
    cartaVirada = Math.round(Math.random() * 3);
    opcaoEliminada = Math.round(Math.random());

    console.log("Embaralhando cartas...\n", 
                "Escolhendo uma carta...\n",
                "A carta virada foi: \n\n");
    
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
            console.log("As opções A e B são falsas.");
    }
    
}

function dicaAssistente(dicaIn) {
    console.log("Um ser humano disse o seguinte:\n",
                dicaIn, "\n\n");
    
}

function paraJogo(rodada) {
    if (rodada == 1) {
        console.log("Você saiu sem nada!");
        return 0;
        
    } else if (rodada == 2) {
        console.log("Você saiu com 1.000 reais!");
        return 1000;

    } else if (rodada == 3) {
        console.log("Você saiu com 3.000 reais!");
        return 3000;

    } else if (rodada == 4) {
        console.log("Você saiu com 5.000 reais!");
        return 5000;

    } else if (rodada == 5) {
        console.log("Você saiu com 10.000 reais!");
        return 10000;

    } else if (rodada == 6) {
        console.log("Você saiu com 30.000 reais!");
        return 30000;

    } else if (rodada == 7) {
        console.log("Você saiu com 50.000 reais!");
        return 50000;

    } else if (rodada == 8) {
        console.log("Você saiu com 100.000 reais!");
        return 100000;

    } else if (rodada == 9) {
        console.log("Você saiu com 300.000 reais!");
        return 300000;

    } else  {
        console.log("Você saiu com 500.000 reais!");
        return 500000;

    }
}

function premiacao(rodada) {
    if (rodada == 1)
        console.log("Acertar: 1.000 R$ | Errar: nada | Parar: nada\n");

    else if (rodada == 2)
        console.log("Acertar: 3.000 R$ | Errar: 500 R$ | Parar: 1.000 R$\n");

    else if (rodada == 3)
        console.log("Acertar: 5.000 R$ | Errar: 1.500 R$ | Parar: 1.000 R$\n");

    else if (rodada == 4)
        console.log("Acertar: 10.000 R$ | Errar: 2.500 R$ | Parar: 1.000 R$\n");

    else if (rodada == 5)
        console.log("Acertar: 30.000 R$ | Errar: 5.000 R$ | Parar: 1.000 R$\n");

    else if (rodada == 6)
        console.log("Acertar: 50.000 R$ | Errar: 15.000 R$ | Parar: 1.000 R$\n");

    else if (rodada == 7)
        console.log("Acertar: 100.000 R$ | Errar: 25.000 R$ | Parar: 1.000 R$\n");

    else if (rodada == 8)
        console.log("Acertar: 300.000 R$ | Errar: 50.000 R$ | Parar: 1.000 R$\n");

    else if (rodada == 9)
        console.log("Acertar: 500.000 R$ | Errar: 150.000 R$ | Parar: 1.000 R$\n");

    else
        console.log("Acertar: 1.000.000 R$ | Errar: perde tudo | Parar: 500.000 R$\n");
       
}

function exibePergunta(rodada, perguntaAtual) {
    premiacao(rodada);

        console.log(perguntaAtual.pergunta);

        console.log(`\n${perguntaAtual.alternativa1}`);
        console.log(`${perguntaAtual.alternativa2}`);
        console.log(`${perguntaAtual.alternativa3}`);

        console.log("\nDigite a letra correspondente a sua alernativa, ou digite\n",
                    "1. Cartas | 2. Assistente natural\n",
                    "para usar uma dica, ou digite P para parar.\n\n");

}

/*
primeira rodada sem nada, se acertar recebe 1 mil, se perder recebe nada, se parar recebe nada;
segunda rodada, se acertar ganha 3 mil, se errar recebe 500 reais, se parar recebe 1 mil reais;
terceira rodada, se acertar ganha 5 mil, se errar recebe 1,5 mil reais, se parar recebe 3 mil reais;
quarta rodada, se acertar ganha 10 mil, se errar recebe 2,5 mil reais, se parar recebe 5 mil reais;
quinta rodada, se acertar ganha 30 mil, se errar recebe 5 mil reais, se parar recebe 10 mil reais;
sexta rodada, se acertar ganha 50 mil, se errar recebe 15 mil reais, se parar recebe 30 mil reais;
sétima rodada, se acertar ganha 100 mil, se errar recebe 25 mil reais, se parar recebe 50 mil reais;
oitava rodada, se acertar ganha 300 mil, se errar recebe 50 mil reais, se parar recebe 100 mil reais;
nona rodada, se acertar ganha 500 mil, se errar recebe 150 mil reais, se parar recebe 300 mil reais;
última rodada, se acertar ganha 1 milhão, se errar perde tudo, se parar recebe 500 mil reais;
*/

function perdeJogo(rodada) {
    if (rodada == 1 || rodada == 10) {
        console.log("Você saiu sem nada!");
        
    } else if (rodada == 2) {
        console.log("Você saiu com 500 reais!");
        return 500;

    } else if (rodada == 3) {
        console.log("Você saiu com 1.500 reais!");
        return 1500;

    } else if (rodada == 4) {
        console.log("Você saiu com 2.500 reais!");
        return 2500;

    } else if (rodada == 5) {
        console.log("Você saiu com 5.000 reais!");
        return 5000;

    } else if (rodada == 6) {
        console.log("Você saiu com 15.000 reais!");
        return 15000;

    } else if (rodada == 7) {
        console.log("Você saiu com 25.000 reais!");
        return 25000;

    } else if (rodada == 8) {
        console.log("Você saiu com 50.000 reais!");
        return 50000;

    } else {
        console.log("Você saiu com 150.000 reais!");
        return 150000;

    } 
}