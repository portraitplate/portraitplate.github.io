let slideNumber = 0;

function nextSlideShow(number) {  
    slideNumber += number;
    showSlide(slideNumber)
}
function prevSlideShow(number) { 
    slideNumber -= number;  
    showSlide(slideNumber)
}

showSlide();
function showSlide() {
    let images = document.getElementsByClassName("slide");

    if(slideNumber > images.length-1) {
        slideNumber = 0;
        console.log(slideNumber);
    }
    if(slideNumber < 0) {
        slideNumber = images.length-1;
        
    }
        

    for(let i = 0; i<images.length; i++)
        images[i].style.display = "none";

    images[slideNumber].style.display = "block";
}