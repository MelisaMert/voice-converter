var btn = document.getElementById('click-to-convert')
btn.addEventListener('click', function(){
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang='En';
    
    recognition.addEventListener('result', e=> {
        const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)

        var text = document.getElementById('convert-text');
        text.innerHTML = transcript;
    });

    if(speech == true) {
       recognition.start();
    }
})
