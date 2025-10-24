function carregar(){
    var mensagem = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        foto.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        foto.src = 'tarde.jpg'
        document.body.style.background = '#eb986f'
    } else {
        foto.src = 'noitinha.jpg'
        document.body.style.background = '#515154'
    }
}

const btn = document.getElementById("navbar");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("show");
});