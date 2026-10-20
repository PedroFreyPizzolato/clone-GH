document.getElementById("cadastrar").addEventListener("click", function() {
    let nome = document.getElementById("nome").value;
    adicionarNome(nome);
});

function limparLista() {
    document.getElementById("lista-nomes").innerHTML = "";
}

function adicionarNome(nome) {
    document.getElementById("lista-nomes").innerHTML += '<div id="lista-item">' + nome + '<button id="remover" onclick="removerNome(this)">X</button></div>';
}

removerNome = (elemento) => {
    elemento.parentNode.remove();
}