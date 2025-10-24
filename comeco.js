const params = new URLSearchParams(location.search)
const nome = params.get('nome')

if (nome) {
    document.getElementById('msg').textContent = `Seja bem-vindo, ${nome}!`
} else {
    document.getElementById('msg').textContent = `Seja bem-vindo!`
}


