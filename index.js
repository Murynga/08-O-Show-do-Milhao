menuPrincipal();

/* Funções

menuPrincipal() = para mostrar o menu principal;


*/

function menuPrincipal() {

    const prompt = require('prompt-sync')();

    let nome, opcao;

    console.log("-------<| Show do Milhão |>-------\n\n", 
                 
                "Bem-vindo! Você deseja...\n\n",
                
                "[1] Jogar;\n",
                "[2] Ver placar de líderes;\n",
                "[Outro caractere] para encerrar.\n\n");
                
    opcao = prompt("Opção: ");
    console.log(`Opção escolhida: ${opcao}`); //só teste
    
}