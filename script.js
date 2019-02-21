// voice
window.speechSynthesis.getVoices();
const say = (msgTxt, volume) => {
    speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(msgTxt);
    const voices = window.speechSynthesis.getVoices()
        .filter(v => v.lang === 'en-GB' && v.name.indexOf('Male') > -1);
    msg.voice = voices[0];
    if (volume) {
        msg.volume = volume;
    }
    window.speechSynthesis.speak(msg);
}

const warnings = [
    { msg: 'Time for stand up.', emoji: '🙂' },
    { msg: 'Hurry up everyone.', emoji: '😐' },
    { msg: 'Final warning.', emoji: '🙁' },
    { msg: 'This is getting out of hand.', emoji: '😠' },
    { msg: 'I\'m very upset with you.', emoji: '😡' },
    { msg: 'My rage knows no bounds.', emoji: '😈' },
    { msg: 'Seriously.', emoji: '👹' },
    { msg: 'Please.', emoji: '😨' },
    { msg: 'Come to standup?', emoji: '😰' },
    { msg: 'I can\'t take it', emoji: '😭' },
    { msg: 'I\'ll be nice again, I promise!', emoji: '😟' },
    { msg: 'Please?', emoji: '😥' },
    { msg: 'Getting', emoji: '😩', vol: 0.65 },
    { msg: 'Sleepy', emoji: '😪', vol: 0.5 },
    { msg: '', emoji: '😴' },
    { msg: '', emoji: '💀' }
];
let msgPtr = 0;

document.querySelector('.bell').addEventListener('click', (e) => {
    say(warnings[msgPtr].msg, warnings[msgPtr].vol);
    e.target.innerHTML = warnings[msgPtr].emoji;
    e.target.style.fontSize = (msgPtr+1) + 'rem';
    e.target.style.marginTop = -(msgPtr+1)/1.5 + 'rem';
    msgPtr = Math.min(msgPtr + 1, warnings.length - 1);
});
