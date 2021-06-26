function contar() {
    var ini = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("Erro, por favor digite os dados corretamente")
    } else {
        res.innerHTML = 'Contando <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert("Dado Inválido")
        }else{
            if (i < f) {
                for(let c = i; c <= f; c += p) {
                    res.innerHTML += `${c}  \u{1F449}`
                }
            } else {
                for(let c = i; c >= f; c -= p){
                    res.innerHTML += `${c}   \u{1F449}`
                }
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
}