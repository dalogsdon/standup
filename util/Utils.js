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

const engineers = [
    { value: 'Asim', spoken: 'Ahhsim' },
    { value: 'Bradley', spoken: 'Bradley, the paywall master' },
    { value: 'Bryan' },
    { value: 'Chris' },
    { value: 'Drew', spoken: 'Drew, my humble creator,' },
    { value: 'Dom' },
    { value: 'Gaurav', spoken: 'G' },
    { value: 'Gregory' },
    { value: 'Jesse', spoken: 'Lorenzo' },
    { value: 'John' },
    { value: 'Luis' },
    { value: 'Megan' },
    { value: 'Nick' },
    { value: 'Rich' },
    { value: 'Tyler' },
    { value: 'Xiaojun' },
    { value: 'Ytalo' },
];

const support = [
    { value: 'Ali' },
    { value: 'Betty' },
    { value: 'Jordan' },
    { value: 'Karan' },
    { value: 'Kelsey' },
    { value: 'Mike', spoken: 'Mikey' },
    { value: 'Mohan' },
    { value: 'Nick' },
];

function formatDays(group, days) {
    return group.map(g => Object.assign(g, { days }));
}

const Utils = {
    names: shuffle([
        ...formatDays(engineers, '135'),
        ...formatDays(support, '12345'),
    ]),
    getRandomName() {
        const i = Math.floor(Math.random() * this.names.length);
        return this.names[i];
    },
    loadVoices() {
        window.speechSynthesis.getVoices();
    },
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