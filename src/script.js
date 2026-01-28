document.addEventListener('DOMContentLoaded', function () {
    const menuBtnSm = document.getElementById('mobileMenuBtnSm');
    const mobileMenuSm = document.getElementById('mobileMenuSm');
    const closeBtnSm = document.getElementById('closeMobileMenuSm');
    const closeAreaSm = document.getElementById('closeAreaMobileSm');

    if (menuBtnSm && mobileMenuSm && closeBtnSm && closeAreaSm) {
        menuBtnSm.addEventListener('click', () => {
            mobileMenuSm.classList.remove('hidden');
            mobileMenuSm.classList.add('flex');
        });
        closeBtnSm.addEventListener('click', () => {
            mobileMenuSm.classList.add('hidden');
            mobileMenuSm.classList.remove('flex');
        });
        closeAreaSm.addEventListener('click', () => {
            mobileMenuSm.classList.add('hidden');
            mobileMenuSm.classList.remove('flex');
        });
    }
});

const buttons = document.querySelectorAll("[data-carousel-btn]");

function updateSlider(newIndex, slides) {
    slides.forEach((slide, idx) => {
        if (idx === newIndex) {
            slide.dataset.active = true;
        } else {
            delete slide.dataset.active;
        }
    });
}

buttons.forEach(button => {
    button.addEventListener('click', function () {
        const carousel = button.closest("[data-carousel]");
        const slidesContainer = carousel.querySelector("[data-carousel-slides]");
        const slides = Array.from(slidesContainer.querySelectorAll("[data-carousel-slide]"));
        const current = slidesContainer.querySelector("[data-active]");
        const activeIndex = slides.indexOf(current);
        const offset = button.dataset.carouselBtn === "next" ? 1 : -1;
        let newIndex = activeIndex + offset;
        if (newIndex < 0) newIndex = slides.length - 1;
        if (newIndex >= slides.length) newIndex = 0;
        updateSlider(newIndex, slides);
    });
});

window.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        const nextBtn = document.querySelector("[data-carousel-btn='next']");
        if (nextBtn) {
            nextBtn.click();
        }
    }, 3500);
});

const mobileCarousel = document.getElementById("mobileCarousel");
const mobileLeftBtn = document.querySelector(".mobile-carousel-left");
const mobileRightBtn = document.querySelector(".mobile-carousel-right");

mobileLeftBtn.addEventListener("click", () => {
  mobileCarousel.scrollLeft -= 300;
});

mobileRightBtn.addEventListener("click", () => {
  mobileCarousel.scrollLeft += 300;
});

const petCorousel = document.getElementById("petCorousel");
const petLeftBtn = document.querySelector(".pet-carousel-left");
const petRightBtn = document.querySelector(".pet-carousel-right");

petLeftBtn.addEventListener("click", () => {
    petCorousel.scrollLeft -= 300;
});

petRightBtn.addEventListener("click", () => {
    petCorousel.scrollLeft += 300;
});

const cookingCorousel = document.getElementById("cookingCorousel");
const cookingLeftBtn = document.querySelector(".cooking-carousel-left");
const cookingRightBtn = document.querySelector(".cooking-carousel-right");

cookingLeftBtn.addEventListener("click", () => {
    cookingCorousel.scrollLeft -= 300;
});

cookingRightBtn.addEventListener("click", () => {
    cookingCorousel.scrollLeft += 300;
});
