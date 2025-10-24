function contador() {
    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var resultado = document.querySelector('div#resultado')
    resultado.innerHTML = ''
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        alert('[ERRO] Preencha todos os campos.')
    } else {
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            alert('[ERRO] Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            for(var c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} ⇒`
            }
        } 
    }
}