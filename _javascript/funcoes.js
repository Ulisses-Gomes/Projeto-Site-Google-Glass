
function mudaFoto(foto){
    document.getElementById("icone").src  = foto;
}

function calTotal(){
    const qtd = parseInt(document.getElementById('cQtd').value)
    const total = qtd * 1500;
    document.getElementById('cTot').value = total
}