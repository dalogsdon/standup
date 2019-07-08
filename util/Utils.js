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

const engineers = shuffle([
    { value: 'Asim', spoken: 'Ahhsim' },
    { value: 'Bradley', spoken: 'Bradley, the paywall master' },
    { value: 'Bryan' },
    { value: 'Chris' },
    { value: 'Drew', spoken: 'Drew, my humble creator,' },
    { value: 'Dom' },
    { value: 'Gregory' },
    { value: 'Jesse', spoken: 'Lorenzo' },
    { value: 'Jingjing' },
    { value: 'Luis' },
    { value: 'Megan' },
    { value: 'Nick' },
    { value: 'Rich' },
    { value: 'Tyler' },
    { value: 'Ytalo' },
]);

const support = shuffle([
    { value: 'Ali' },
    { value: 'Betty' },
    { value: 'Jordan' },
    { value: 'Karan' },
    { value: 'Kelsey' },
    { value: 'Mike', spoken: 'Mikey' },
    { value: 'Mohan' },
]);

function uniqueName(name, index, self) {
    return self.map(n => n.value).indexOf(name.value) === index;
}
const allNames = engineers.concat(support).filter(uniqueName);

const Utils = {
    getNames() {
        const dayOfWeek = new Date().getDay();
        return dayOfWeek === 2 || dayOfWeek === 4 ? support : allNames;
    },
    getRandomName() {
        const dayOfWeek = new Date().getDay();
        const names = dayOfWeek === 2 || dayOfWeek === 4 ? support : allNames;
        const i = Math.floor(Math.random() * names.length);
        return names[i];
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