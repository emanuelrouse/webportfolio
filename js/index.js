let slidePosition = 1;
slideShow(slidePosition);

// forward/back controls
function plusSlides(n) {
    slideShow(slidePosition += n);
}

// images controls 
function currentSlide(n) {
    slideShow(slidePosition = n);
}

function slideShow(n) {
    let i;
    let slides = document.getElementsByClassName("containers");
    let circles = document.getElementsByClassName("dots");
    if (n > slides.length) {slidePosition = 1}
    if (n < 1) {slidePosition = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace(" enable", "")
    }
    slides[slidePosition-1].style.display = "block";
    circles[slidePosition-1].className += " enable";
}

// Not sure but if I want to implement a timed slide I can use setTimeout

