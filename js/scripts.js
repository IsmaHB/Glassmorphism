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
//function currentSlides(){}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("sliderImage");
    var circle = document.getElementsByClassName("circle");
    //alert (slides)

    //LIMPIAMOS CLASSES INNECESARIAS
    for (i = 0; i < slides.length; i++) {
        slides(i).className = slides(i).className.replace(" nothidden", "");
        circle(i).className = circle(i).className.replace(" nothidden", "");

    }
    slides(slideIndex - 1).className += " nothidden";
    circle(slideIndex - 1).className += " selected";

}