function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert("[ERRO] Verifique os dados novamente!")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'criancaM.jpg')
            } else if (idade < 20) {
                //jovem
                img.setAttribute('src', 'adolescenteM.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultoM.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosoM.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'            
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'criancaF.jpg')
            } else if (idade < 20) {
                //jovem
                img.setAttribute('src', 'adolescenteF.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultoF.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosoF.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
        res.appendChild(img)
    }

}