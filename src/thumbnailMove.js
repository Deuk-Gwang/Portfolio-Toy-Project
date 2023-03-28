function thumnailMove() {
    var container = document.querySelector(".thumbnail-area");
    var imgUl = container.querySelector(".img-slides");
    var img = container.querySelectorAll(".slide");

    var curImg = 0;

    setInterval(() => {
        var from = -(400 * curImg);
        var to = from - 400;
        imgUl.animate({
            marginTop: [from + "px", to + "px"]
        }, {
            duration: 300,
            easing: "ease-in-out",
            iterations: 1,
            fill: "both"
        });

        curImg++;

        if (curImg === (img.length - 1)) curImg = 0;
    }, 3000);
}

export default thumnailMove
