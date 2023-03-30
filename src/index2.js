import thumbnailMove from './thumbnailMove.js';

window.addEventListener('DOMContentLoaded', thumbnailMove())
window.addEventListener('scroll', scrollAct())

function scrollAct() {
    let timer;
    const body = document.querySelector('body');

    timer = setInterval(() => {
        let pos = window.scrollY;
        if (pos > 593){
            clearInterval(timer)
            body.classList.add("toBlack") 
        }
    }, 100)
}