let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); 
}

function changeFontSize(change) {
    const body = document.body;
    const currentSize = window.getComputedStyle(body).fontSize;
    const currentSizeNumber = parseFloat(currentSize);
    body.style.fontSize = (currentSizeNumber + change) + 'px';
}


function setLightTheme() {
    document.body.style.backgroundColor = '#84B9BF';
    document.body.style.color = '#000';
}


function setDarkTheme() {
    document.body.style.backgroundColor = '#012E40';
    document.body.style.color = '#fff';
}
