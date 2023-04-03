const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br' //configurando a lingua do Brasil
recognition.start()

recognition.addEventListener('result', onSpeak) //quando o reconhecimento de voz começar vai pegar tudo que está em result para que seja executada na função onSpeak

function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)
} 

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
     `
}

//adicionando evento para que o microfone continue ativado
recognition.addEventListener('end', () => recognition.start()) //quando a função acabar liga novamente o reconhecimento de voz