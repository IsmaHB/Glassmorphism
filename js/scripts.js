function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("sliderImage");
    var circles = document.getElementsByClassName("circle");

    //alert (slides)

    //LIMPIAMOS CLASSES INNECESARIAS
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" nothidden", "");
        circles[i].className = circles[i].className.replace(" selected", "");

    }
    slides[slideIndex - 1].className += " nothidden";
    circles[slideIndex - 1].className += " selected";

}