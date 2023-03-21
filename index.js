var slider = document.querySelector(".thumbnail-area");
var slides = slider.querySelector(".img-slides");
var slide = slides.querySelectorAll(".slide");

var currentSlide = 0;

setInterval(function() {
    var from = -(840 * currentSlide);
    var to = from - 840;
    slides.animate({
        marginLeft: [from + "px", to + "px"]
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });
    currentSlide++;
    if (currentSlide === (slide.length - 1)) {
        currentSlide = 0;
    }
}, 3000);