const entrada = require("prompt-sync")()
var nota100 = 3
var nota50 = 2
var nota20 = 4
var nota5 = 4
var total = 500
let nome = entrada("Qual o seu nome? ")
console.log(`Bom dia! ${nome}`)
console.log(`Você tem ${total} reais na conta`)
console.log("[CUIDADO] a máquina só funcioana em notas de 5, 20, 50, 100 reias")
console.log("Portanto certos valoree serão impossibitados de retirar!!")
RETIRADA100(nota100, nota50, nota20, nota5, total, nome)

// quantidade de notas de 100
function RETIRADA100(nota100, nota50, nota20, nota5, total, nome ) {
    let retirada = entrada("digite um valor para retirar: ")
    retirada = Number(retirada)
    var conta = retirada/100
    conta = parseInt(conta)  
    var resultado = total-retirada
    if (retirada > total || retirada % 5 != 0 || retirada < 0) {
        console.log("[ERRO] DIgite um valor correto")
        LOOPING(nome, retirada, total, resultado, nota100, nota50, nota20, nota5)
    } else if (nota100<conta) {
        console.log("notas de 100 insuficientes")
        LOOPING(nome, retirada, total, resultado, nota100, nota50, nota20, nota5)
    }   
    else if (retirada % 100 == 0 && conta >= 0 && conta  <= nota100)  {
        console.log(`serão ${conta} notas de 100`)
        console.log("e agora você tem " + (resultado +" reais"))
        nota100 = nota100-resultado
        LOOPING(nome, retirada, total, resultado, nota100, nota50, nota20, nota5)
            
    }
    else if (retirada > (100 * nota100)){
        console.log(`serão ${nota100} notas de 100`)
        conta = retirada - (100 * nota100)
        nota100 = 0
        RETIRADA50(nota50, nota20, nota5, retirada, total, conta, nome, resultado)
    }  else {
        console.log(`serão ${conta} notas de 100`)
        conta = retirada - (conta*100)
        nota100 = nota100-conta
        RETIRADA50(nota50, nota20, nota5, retirada, total, conta, nome, resultado )
        
    }
}
// quantidade de notas de 50
function RETIRADA50(nota50, nota20, nota5, retirada, total, conta, nome, resultado  ) {
    qtd50 = conta
    conta = qtd50/50
    conta = parseInt(conta)
    if (nota50 < conta) {
        console.log("notas de 50 insuficientes")
        LOOPING(nome, retirada, total, resultado, nota100, nota50, nota20, nota5)
   
    } else if (qtd50 % 50 == 0 && conta >=0 && conta<=nota50) {
        console.log(`serão ${conta} notas de 50`)
        console.log("e agora você tem " + (resultado +" reais"))
        nota50 = nota50-conta
        LOOPING(nome, retirada, total, resultado, nota100, nota50, nota20, nota5)

     }  else if (qtd50 > ( nota50*50)) {
        console.log(`serão ${nota50} notas de 50`)
        conta = qtd50 - (nota50*50)
        nota50 = 0
        RETIRADA20(nota20, nota5, retirada, total, conta, nome , resultado)
     } else {
        console.log(`serão ${conta} notas de 50`)
        conta = qtd50 - (conta*50)
        nota50 = nota50-conta
        RETIRADA20(nota20, nota5, retirada, total, conta, nome, resultado )
    }
   
}

// quantidade de notas de 20
function RETIRADA20( nota20, nota5, retirada, total, conta , nome , resultado) {
    qtd20 = conta
    conta = qtd20/20
    conta = parseInt(conta)
    if (nota20< conta) {
        console.log("notas de 20 insuficientes")
        LOOPING(nome, retirada, total, resultado, nota100, nota50, nota20, nota5)
    }
    else if (qtd20 % 20 == 0 && conta >=0 && conta<=nota20) {
        console.log(`serão ${conta} notas de 20`)
        var resultado = total-retirada
        console.log("e agora você tem " + (resultado +" reais"))
        nota20 = nota20 - conta
        if (resultado == 0) {
            console.log("você não pode retirar mais")
            console.log("REINICIANDO...")
        } else {
            LOOPING(nome, retirada, total, resultado, nota100, nota50, nota20, nota5)
        }
    } else if (qtd20 > ( nota20*20)) {
        console.log(`serão ${nota20} notas de 20`)
        conta = qtd20 - (nota20*20)
        nota20 = 0
        RETIRADA5( nota5, retirada, total, conta, nome, resultado )
    } else {
        console.log(`serão ${conta} notas de 20`)
        conta = qtd20 - (conta*20)
        nota20 = nota20 - conta
        RETIRADA5( nota5, retirada, total, conta, nome, resultado )
    }
}
// quantidade de notas de 5
function RETIRADA5( nota5, retirada, total, conta, nome , resultado) {
    qtd5 = conta
    conta = qtd5/5
    conta = parseInt(conta)
    console.log(`serão ${conta} notas de 5`)
    console.log("e agora você tem " + (resultado +" reais"))
    nota5 = nota5 -conta
        if (nota5 < conta) {
            console.log("notas de 5 insufiencientes")
            LOOPING(nome, retirada, total, resultado, nota100, nota50, nota20, nota5)
        } 
        else if (resultado == 0) {
            console.log("você não pode retirar mais")
            console.log("REINICIANDO...")  
        } else {
            LOOPING(nome, retirada, total, resultado, nota100, nota50, nota20, nota5)
        }
     
    
}
// função para loopar até o usuario querer ou ter saldo
function LOOPING(nome, retirada, total, resultado, nota100, nota50, nota20, nota5) {
    
     var confirm = entrada("Você quer continuar?(sim ou nao) ")
        if (confirm != "sim") {
            console.log("não quer continuar tudo bem!!")
                
        } else if (retirada <= total && confirm == "sim") {
    
        while(retirada <= total) {
            total = resultado
            console.log("-------------------------------------------------")
            RETIRADA100(nota100, nota50, nota20, nota5, total, nome)  
            break    
        }
        }  else {
        console.log("você não pode retirar mais")
        console.log("adeus " + nome )
 }
     } 
        
