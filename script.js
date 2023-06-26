const input = document.querySelector(".nameAlunos");
const buttonEnviar = document.querySelector(".btn-dados-alunos");
const buttonSortear = document.querySelector(".sortear");
const saida = document.querySelector('.saida-dados-alunos');
const reiniciar = document.querySelector(".reiniciar")
let dados = [];

function stop() {
    if(dados.length === 5) {
        buttonEnviar.style.display = 'none'
        buttonSortear.style.display = 'block'
        input.setAttribute("disabled", '')
    }
}

buttonEnviar.addEventListener("click", () => {  
    if(input.value === ''){
        alert("O campo está vazio, informe um nome valido!")
    }else if(dados.length <= 4) {
        let adicionar = input.value;
        dados.push(adicionar)
        input.value = ''
        console.log(dados)
    }
    stop()
})

buttonSortear.addEventListener("click", () => {
    let min = 1;
    let max = 4;
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    
    saida.innerHTML = `Aluno(a) Sorteado <strong>${dados[numeroAleatorio]}</strong>`
    console.log(`Aluno(a) sorteado - ${dados[numeroAleatorio]}  ||  Posição - ${numeroAleatorio}`)
    reiniciar.style.display = 'block'
    buttonSortear.style.display = 'none'
})

reiniciar.addEventListener("click", () => {
    buttonEnviar.style.display = 'block'
    reiniciar.style.display = 'none'
    input.removeAttribute('disabled')
    dados = []
    saida.innerHTML = ''
})


