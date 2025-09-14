const prompt =require('prompt-sync') ()

const horaAtual =  new Date().getHours()//Aqui guardamos o horário atual na variável em vez de perguntarmos

console.log(`Agora são exatamente ${horaAtual} horas.  `)
if(horaAtual >= 1 && horaAtual <=5){
    console.log('Boa madrugada')
}else if(horaAtual >=6 && horaAtual <=11){
    console.log('Bom dia')
}else if(horaAtual >=12 && horaAtual <= 17){
    console.log('Boa tarde')
}else if(horaAtual >= 18 && horaAtual <=23){
    console.log('Boa noite')
}else{
    console.log('Você não inseriu um formato de hora válido')
}