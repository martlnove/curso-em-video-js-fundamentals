function conta(){
    finicio = document.getElementById('txtinicio')
    ffim = document.getElementById('txtfim')
    fpasso = document.getElementById('txtpasso')
    var res = document.querySelector('div#res')
    if (finicio.value.length == 0 || ffim.value.length == 0 || fpasso.value.lenght == 0) {
        window.alert("Erro, por favor digite os dados corretamente")
   }
}