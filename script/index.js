let aluno = [['igor','3790','Tarde','2°B','Igor Delfino Braga'],['cardoso','3789','Tarde','3°A','Guilherme Soares Cardoso'],['gustavo','3147','Tarde','2°A','Gustavo Bifulgo'],['carlos','3776','Manhã','9°B','Carlos Eduardo Flores Santana']]
let instrutor = [['marcele','9999'], ['ricardinho','1000']]

var usuario = null;

function loginAluno(){
    for(i = 0;i < aluno.length; i++){
        if(document.getElementById('senha').value == aluno[i][1]){

            usuario = aluno[i][0]
            periodo = aluno[i][2]
            serie = aluno[i][3]
            nomecomp = aluno[i][4]

            localStorage.setItem("usuario",usuario)
            localStorage.setItem("periodo",periodo)
            localStorage.setItem("serie",serie)
            localStorage.setItem("completo",nomecomp)

            window.location.href = 'aluno-page-1.html'
        }
    }

    console.log(usuario)
}
function loginInstrutor(){
    for(i=0; i< instrutor.length; i++){
        if(document.getElementById('login').value == instrutor[i][0] && document.getElementById('senha').value == instrutor[i][1]){

            usuario = instrutor[i][0]

            localStorage.setItem("usuario",usuario)

            window.location.href = 'instrutor-page-1.html'
        }else{
            document.getElementById('text-error').innerHTML = "Login inválido"
        }
    }

    console.log(usuario)
}