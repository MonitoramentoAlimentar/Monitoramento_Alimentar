//PERFIL
nome = null
turma = null
periodo = null

nome = localStorage.getItem("completo")
turma = localStorage.getItem("serie")
periodo = localStorage.getItem("periodo")

document.getElementById('nome').innerHTML = nome
document.getElementById('periodo').innerHTML = periodo
document.getElementById('ano').innerHTML = turma