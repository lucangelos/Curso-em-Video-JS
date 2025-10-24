function tabuada() {
    var numero = document.getElementById('numero')
    var resultado = document.getElementById('resultado')
    if (numero.value.length == 0) {
         alert('[ERRO] Preencha o campo.')
    } else {
        var n = Number(numero.value)
        resultado.innerHTML = ''
        for (var i = 0; i <= 10; i++) {
            var multiplicacao =  n*i
            resultado.innerHTML += `${n} x ${i} = ${multiplicacao}<br>`
    }
    }
}