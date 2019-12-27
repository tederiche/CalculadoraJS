//Calculadora JS

function criaCalculadora(){
    return{
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
// inicia calculadora
        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },
// aperta enter pra realizar calculadora
        pressionaEnter(){
            this.display.addEventListener('keyup', e =>{
                if(e.keyCode === 13){
                    this.realizaConta()
                }
            })
        },
// realiza conta na calculadora com função perigosa chamada eval
// ao utilizar eval sempre use um try catch pra deixar com mais segurança
        realizaConta(){
            let conta = this.display.value
            try{
                conta = eval(conta)

                if (!conta){
                    alert('conta invalida')
                    return
                }
                this.display.value = String(conta)
            }catch(e){
                alert('conta invalida')
            }
        },

        clearDisplay(){
            this.display.value = ''
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1)
        },

      
// clicar nos botoes
        cliqueBotoes(){
            document.addEventListener('click', (e) => {
                const el = e.target
                // colocar o text que cliquei no input
                if(el.classList.contains('btn-num')){
                  this.btnParaDisplay(el.innerText)
                }
                // apagar todo input
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay()
                }
                // botao = realizar conta
                if(el.classList.contains('btn-eq')){
                    this.realizaConta()
                }
                // apaga um digito
                if (el.classList.contains('btn-del')){
                    this.apagaUm()
                }
            })
        },

        // manda o valor do botao pro input
        btnParaDisplay(valor){
            this.display.value += valor;
        }

    };
}

const calculadora = criaCalculadora()
calculadora.inicia();