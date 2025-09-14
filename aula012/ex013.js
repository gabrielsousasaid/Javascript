 const diaSem = new Date ().getDay() //Pega o dia da semana atual, retorna o valor em número.

 /*     
 0 = Domingo
 1 = Segunda
 2 = Terça
 3 = Quarta
 4 = Quinta
 5 = Sexta
 6 = Sábado
 */
console.log(diaSem)

switch(diaSem){ // Aqui colocamos a expressão que resulta em um valor
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça') //De acordo com o valor que deu na expressão, determinamos uma ação ou outra
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break//opcional
}