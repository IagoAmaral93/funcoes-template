// Resolva o Exercício de Fixação!

function verificarMaioridade(nome, anoNascimento, anoAtual){
    
    const idade = anoAtual - anoNascimento

    const ehMaior = idade >= 18
    
    
    
    
    const frase = `${nome} é maior de idade? ${ehMaior}`

    return frase

      
}

const pessoa1 = verificarMaioridade(`iago`, 1993, 2023)
console.log(pessoa1)


const pessoa2 = verificarMaioridade(`iago`, 2007, 2023)
console.log(pessoa2)

