var nome;

function TesteJava() {
    //Processador registra o nome inserido
    nome = prompt("What's your name?");
    
    //Verificação do nome
    while (!nome) {
        nome = prompt("Please insert your name again!")
    }

    //Erm...Isso não faz nada, creio eu
    if (nome === null) {

    }
    
    //Manda a variável para o HTML
    document.getElementById("nome").innerHTML = nome;
    
}
