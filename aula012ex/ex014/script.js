
//Criada função atralada ao evento de carregar página
function carregar() {

    const msg = document.getElementById('msg')//Pegando os elementos a serem manipulados
    const img = document.getElementById('imagem')
    const data = new Date()
    //const hora = data.getHours()
    const hora = 9

    msg.innerHTML = `Agora são ${hora} horas.`
     if (hora >= 1 && hora <= 11) {
        console.log('Bom dia')
        img.src = 'foto-manha.png'
        document.body.style.background = '#edddc2'
    } else if (hora >= 12 && hora <= 17) {
        console.log('Boa tarde')
        img.src= 'foto-tarde.png'
         document.body.style.background = '#fecea9'
    } else if (hora >= 18 && hora <= 23) {
        console.log('Boa noite')
        img.src= 'foto-noite.png'
        document.body.style.background = '#013f4e'
    } else {
        console.log('Você não inseriu um formato de hora válido')
    }/* Script para mostrar a hora do dia e personalizar a página 
    de acordo com o horário, toda vez que carregar a página */
}

