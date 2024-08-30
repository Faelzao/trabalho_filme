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
    setTimeout(showSlides, 2000); // Muda a imagem a cada 2 segundos
}
// Função para alterar o tamanho da fonte
function changeFontSize(change) {
    const body = document.body;
    const currentSize = window.getComputedStyle(body).fontSize;
    const currentSizeNumber = parseFloat(currentSize);
    body.style.fontSize = (currentSizeNumber + change) + 'px';
}

// Função para definir o tema claro
function setLightTheme() {
    document.body.style.backgroundColor = '#84B9BF';
    document.body.style.color = '#025E73';
}

// Função para definir o tema escuro
function setDarkTheme() {
    document.body.style.backgroundColor = '#333333';
    document.body.style.color = '#ffffff';
}
