function carregar() {

    const msg = document.getElementById('msg')
    const img = document.getElementById('imagem')
    const data = new Date()
    const hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 1 && hora <= 5) {
        console.log('Boa madrugada')
    } else if (hora >= 6 && hora <= 11) {
        console.log('Bom dia')
    } else if (hora >= 12 && hora <= 17) {
        console.log('Boa tarde')
    } else if (hora >= 18 && hora <= 23) {
        console.log('Boa noite')
    } else {
        console.log('Você não inseriu um formato de hora válido')
    }
}

