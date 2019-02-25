// voice
window.speechSynthesis.getVoices();
const say = (msgTxt) => {
    speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(msgTxt);
    const voices = window.speechSynthesis.getVoices()
        .filter(v => v.lang === 'en-GB' && v.name.indexOf('Male') > -1);
    msg.voice = voices[0];
    window.speechSynthesis.speak(msg);
}

document.querySelector('.bell').addEventListener('click', (e) => {
    say('Time for stand up.');
});
