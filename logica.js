let numero = 0

function menosum(){
    numero -= 1
    render()
}
function maisum(){
    numero += 1
    render()
}
function maiz(){
    numero += 0.1
    numero = parseFloat(numero.toFixed(1))
    render()
}
function menoz(){
    numero -= 0.1
    numero = parseFloat(numero.toFixed(1))
    render()
}
function reset(){
    numero = 0
    render()
}
function render(){
    const p = document.querySelector("#resultado")
    p.innerText = numero

    // const zero = document.querySelector("#zero")
    // zero.innerText = numero

    // const botao = document.querySelector("#mais")
    // botao.innerText = numero
}