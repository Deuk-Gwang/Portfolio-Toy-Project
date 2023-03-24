function thumnailMove() {
    var container = document.querySelector(".thumbnail-area");
    var imgUl = container.querySelector(".img-slides");
    var img = container.querySelectorAll(".slide");

    var curImg = 0;

    setInterval(function() {
        var from = -(840 * curImg);
        var to = from - 840;
        imgUl.animate({
            marginLeft: [from + "px", to + "px"]
        }, {
            duration: 500,
            easing: "ease",
            iterations: 1,
            fill: "both"
        });

        curImg++;

        if (curImg === (img.length -)) {
            curImg = 0;
        }

    }, 3000);
}

export default thumnailMove