const ContagemRegressiva = (tempo) => {
   function Contagem(){

        const segundos = document.querySelector('#segundos')
        const minutos = document.querySelector('#minutos')
        const horas = document.querySelector('#horas')
        const dias = document.querySelector('#dias')

        let qtdsegundos = tempo % 60
        let qtdminutos = Math.floor(tempo % (60 * 60) / 60)
        let qtdhoras = Math.floor(tempo % (60 * 60 *24) / (60 * 60))
        let qtddias = Math.floor(tempo /60 /60 / 24)
        
        segundos.innerHTML = qtdsegundos
        minutos.innerHTML = qtdminutos
        horas.innerHTML = qtdhoras
        dias.innerHTML = qtddias

   }
    function Contar() {
        if (tempo <= 0) {
            clearInterval(Contador)
        }
       Contagem()
        tempo--
    }    
    const Contador = setInterval(Contar, 1000)
    
 
}


const TempoRestante = () => {
    const DataEvento = new Date(2023, 0, 1, 0, 0, 1)
    const DataHoje = new Date()
    return Math.floor((DataEvento - DataHoje) / 1000)
}

ContagemRegressiva(TempoRestante())

