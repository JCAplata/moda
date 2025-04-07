let index = 0;
function moveSlide() {
    const slides = document.querySelectorAll(".carousel-container img");
    index = (index + 1) % slides.length;
    document.querySelector(".carousel-container").style.transform = `translateX(-${index * 100}%)`;
}
setInterval(moveSlide, 2000);