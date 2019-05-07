// voice
window.speechSynthesis.getVoices();

// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
function shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

const Utils = {
    names: shuffle([
        { value: 'Ali' },
        { value: 'Asim', spoken: 'Ahhsim' },
        { value: 'Betty' },
        { value: 'Bradley' },
        { value: 'Bryan' },
        { value: 'Chris' },
        { value: 'Drew', spoken: 'Drew, my humble creator,' },
        { value: 'Dom' },
        { value: 'G' },
        { value: 'Gregory' },
        { value: 'Jesse' },
        { value: 'John' },
        { value: 'Jordan' },
        { value: 'Kelsey' },
        { value: 'Luis' },
        { value: 'Megan' },
        { value: 'Mike', spoken: 'Mikey' },
        { value: 'Mohan' },
        { value: 'Nick' },
        { value: 'Rich' },
        { value: 'Tyler' },
        { value: 'Xiaojun' },
        { value: 'Ytalo' }
    ]),
    say: (msgTxt) => {
        window.speechSynthesis.cancel();
        const msg = new SpeechSynthesisUtterance(msgTxt);
        const voices = window.speechSynthesis.getVoices()
            .filter(v => v.lang === 'en-GB' && v.name.indexOf('Male') > -1);
        msg.voice = voices[0];
        window.speechSynthesis.speak(msg);
    }
};

export default Utils;
