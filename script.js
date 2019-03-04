import Utils from "./Utils.js";

document.querySelector('.bell').addEventListener('click', (e) => {
    Utils.say('Time for stand up.');
});
