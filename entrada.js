function entrar(){
    let nome = document.getElementById('nome').value.trim()
    if (nome.length == 0) {
        alert('[ERRO] Verifique se colocou algum nome.')
    } else {
        location.href = `comeco.html?nome=${encodeURIComponent(nome)}`
    }
}