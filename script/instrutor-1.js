//TESTE
const alimentos = {
    carbos : [
        {
            "id" : "c1",
            "nome": "pão com carne louca"
        },
        {
            "id": "c2",
            "nome" : "bolo de cenoura"
            
        },
        {
            "id" : "c3",
            "nome" : "pipoca"
        },
        {
            "id" : "c4",
            "nome" : "biscoito de polvilho"
        }
    ],
    bebidas : [
        {
            "id" : "b1",
            "nome": "suco de morango"
        },
        {
            "id" : "b2",
            "nome" : "suco de marácuja"
        }
    ],
    sobremesa : [
        {
            "id" : "s1",
            "nome" : "salada de frutas"
        },
        {
            "id" : "s2",
            "nome" : "gelatina de morango"
        }
    ],

}




//PERFIL

nome= null

nome = localStorage.getItem("usuario")

localStorage.removeItem("completo")
localStorage.removeItem("serie")
localStorage.removeItem("periodo")

document.getElementById('nome1').innerHTML = nome

//BOTÕES DA SEMANA

let segAtivado = true
let terAtivado = true
let quaAtivado = true
let quiAtivado = true
let sexAtivado = true

var nivel = 0



const diaDaSemana = document.getElementsByClassName("diaDaSemana")
const divDiaInformações = document.getElementsByClassName("divDia")

function mudarBotao(id){
    for(var i = 0; i < diaDaSemana.length; i++){
        if(i == id){
            diaDaSemana[i].classList.add("ativo")
            continue
        }
        diaDaSemana[i].classList.remove("ativo")
    }
    for(var i = 0; i<divDiaInformações.length; i++){
        divDiaInformações[i].style.display = "none"
        if(i == id){
            divDiaInformações[i].style.display = "block"
        }
    }

}

//ALIMENTOS
function confirmarAlimento(){
fetch('https://raw.githubusercontent.com/igorbraga890/alimentos/refs/heads/main/alimentos.json').then(resposta => resposta.json(
)).then(corpo => {
  
    
        for(i = 0; i<diaDaSemana.length;i++){
            if(diaDaSemana[i].classList.contains("ativo")){
                console.log(diaDaSemana[i].innerHTML)
            }
        }
    
        for(i = 0; i < corpo.carboidratos.length; i++){
    
            if(document.getElementById('carbo').value == corpo.carboidratos[i].id){
    
                let carbo1 = corpo.carboidratos[i].nome
    
                console.log(carbo1)
            }
            if(document.getElementById('adicional').value == corpo.carboidratos[i].id){
    
                let adicional1 = corpo.carboidratos[i].nome
    
                console.log(adicional1)
            }
        }
        for(i = 0; i < corpo.bebidas.length; i++){
            if(document.getElementById('bebida').value == corpo.bebidas[i].id){
                let bebida1 = corpo.bebidas[i].nome
    
                console.log(bebida1)
            }
        }
        for(i = 0; i < corpo.sobremesa.length; i++){
            if(document.getElementById('sobremesa').value == corpo.sobremesa[i].id){
                let sobremesa1 = corpo.sobremesa[i].nome
    
                console.log(sobremesa1)
            }
        }
                   
    

})
}


