function verificar (){
    const data = new Date()
    const ano = data.getFullYear()
    const formAno = document.getElementById('txtano')
    const resultado = document.querySelector('div#res')

    if(formAno.value == 0 || Number(formAno.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        const fsex = document.getElementsByName('radsex')
        const idade = ano - Number(formAno.value)
        let genero = ''
        const img = document.createElement('img')//Criamos via script uma tag img
        img.setAttribute('id', 'foto')//Adicionamos via script id e atribuimos o nome do id de foto
        
        if(fsex[0].checked){//Aqui colocamos que se o sexo masculino, que é o radio [0], o primeiro a ser escrito no código. Acontece as condiçoes abaixo
            genero = 'Homem'
            if(idade >=0 && idade <=10){
                //Criança
                img.setAttribute('src', 'crianca-menino.png')
            }else if(idade >=11 && idade <=21){
                //Jovem
                img.setAttribute('src', 'jovem-menino.png')
            }else if(idade <=50){
                //Adulto
                img.setAttribute('src', 'homem-adulto.png')
            }else{
                //Idoso
                img.setAttribute('src', 'homem-idoso.png')
            }
        } else if (fsex[1].checked){//Aqui colocamos que se o sexo feminino, que é o radio [1], o segundo a ser escrito no código. Acontece as condiçoes abaixo
            genero = 'Mulher'
        
            if(idade >=0 && idade <=10){
                //Criança
                img.setAttribute('src', 'crianca-menina.png')
            }else if(idade >=11 && idade <=21){
                //Jovem
                img.setAttribute('src', 'jovem-menina.png')
            }else if(idade <=50){
                //Adulto
                img.setAttribute('src', 'mulher-adulta.png')
            }else{
                //Idoso
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img)//Aqui fazemos com que o elemento img, seja mostrado abaixo de todo elemento guardado na variávle resultado
        
        
    }
}