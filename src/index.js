import thumbnailMove from './thumbnailMove.js';

// header (action trigger)
const trigger = document.querySelector("header");
const introEnd = document.querySelector("#intro-end")

// div
const introDiv1 = document.querySelector('.intro-div1');
const introDiv2 = document.querySelector('.intro-div2');
const introDiv3 = document.querySelector('.intro-div3');
const introDiv4 = document.querySelector('.intro-div4');

// h2
const introName = document.getElementById('intro-name');
const introEducation = document.getElementById('intro-education');
const introSkills = document.getElementById('intro-skills');
const introCareer = document.getElementById('intro-career');

/** Trigger가 Observe False상태로 변경시 body, div 배경색 변경 */
const triggerAction = new IntersectionObserver((e) => {
    e.forEach((elem) => {
        if (elem.isIntersecting) {
            document.body.style.backgroundColor = "white";
            introDiv1.style.backgroundColor = "white";
            introDiv2.style.backgroundColor = "white";
            introDiv3.style.backgroundColor = "white";
            introDiv4.style.backgroundColor = "white";
        } else {
            document.body.style.backgroundColor = "black";
            introDiv1.style.backgroundColor = "black";
            introDiv2.style.backgroundColor = "black";
            introDiv3.style.backgroundColor = "black";
            introDiv4.style.backgroundColor = "black";
        }
    })
})

/** 각 Element가 Observe True/False상태로 변경시 H2 Opacity(투명도) 변경 */
const opacityAction = new IntersectionObserver((e) => {
    e.forEach((elem) => {
        if (elem.isIntersecting) {
            console.log(elem,'등장')
            // elem.target.style.color = "white";
            elem.target.style.opacity = 1;
        } else {
            console.log(elem,'퇴장')
            // elem.target.style.color = "white";
            elem.target.style.opacity = 0;
        }
    })
})
// body 배경색 action
triggerAction.observe(introEnd);
triggerAction.observe(trigger);

// h2 투명도 action
opacityAction.observe(introName);
opacityAction.observe(introEducation);
opacityAction.observe(introSkills);
opacityAction.observe(introCareer);

window.addEventListener('DOMContentLoaded', thumbnailMove())
