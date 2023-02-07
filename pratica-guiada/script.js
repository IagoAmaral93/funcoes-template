// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!

//                        PRATICA GUIADA 1

 function darOlaPessoa(nome){
     const frase = `ola, ${nome}!`
     console.log (frase)
 }

// darOlaPessoa(`Iago`)

//    DECLARANDO A MESMA FUNCAO, SO QUE NAO NOMEADA

 const darOlaPessoaExtra = function(nome){
     const frase = `ola, ${nome}!`
     console.log (frase)
 }

// darOlaPessoa(`fulano`)
// darOlaPessoa(`beltrano`)
// darOlaPessoa(`ciclano`)

//                         PRATICA GUIADA 2


function operarNumero(numero){
// verifica paridade
const ehPar = numero % 2  === 0

// soma com 10 
const soma = numero + 10

// multiplica por ele mesmo 
const multiplica = numero * numero 

// frase retornada 
const frase = `O número ${numero} é par? ${ehPar}. Somado com 1O, o resultado é ${soma} e multiplicado por ele mesmo o resultado é  ${multiplica}`

return frase
}

// console.log (operarNumero(4))
// console.log (operarNumero(5))
// console.log (operarNumero(12))


// // PRATICA GUIADA 3
// function VerificarLoginESenha(login, senha){
//     const loginArmazenado = `iago-amaral`
//     const senhaArmazenada = `92ajwesk`

// // VERIFICA SE LOGIN É IGUAL
// // se forem iguais, resultado sera TRUE
// const comparaLogin = login === loginArmazenado

// // verifca se  senhas sao iguais 
// const comparaSenha = senha === senhaArmazenada

// // VERIFICAR SE AMABOS SAO TRUE
// const verificarInfos = comparaLogin && comparaSenha
  
// // FRASE RESULTADO

// // const frase = `As informacoes de login estao corretas ? ${verificarInfos}`
// // return frase
// // }

// // console.log (VerificarLoginESenha (`iago-amaral`),`92ajwesk`)
