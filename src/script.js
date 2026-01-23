


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

// --- Fixed carousel buttons functionality ---

const buttons = document.querySelectorAll("[data-carousel-btn]");
const dots = document.querySelectorAll("[data-carousel-dot]");

function updateSlider(newIndex, slides, slideDots) {
    slides.forEach((slide, idx) => {
        if (idx === newIndex) {
            slide.dataset.active = true;
        } else {
            delete slide.dataset.active;
        }
    });
    if (slideDots) {
        slideDots.forEach((dot, idx) => {
            if (idx === newIndex) {
                dot.dataset.active = true;
            } else {
                delete dot.dataset.active;
            }
        });
    }
}

buttons.forEach(button => {
    button.addEventListener('click', function () {
        // Get the nearest carousel context for flexible support (can be multiple carousels)
        const carousel = button.closest("[data-carousel]");
        const slidesContainer = carousel.querySelector("[data-carousel-slides]");
        const slides = Array.from(slidesContainer.querySelectorAll("[data-carousel-slide]"));
        const current = slidesContainer.querySelector("[data-active]");
        const activeIndex = slides.indexOf(current);

        const offset = button.dataset.carouselBtn === "next" ? 1 : -1;
        let newIndex = activeIndex + offset;
        if (newIndex < 0) newIndex = slides.length - 1;
        if (newIndex >= slides.length) newIndex = 0;

        // Dots for this carousel (might be scoped or global)
        const slideDots = carousel.querySelectorAll("[data-carousel-dot]") || dots;
        updateSlider(newIndex, slides, slideDots);
    });
});

// Add dot click functionality
dots.forEach((dot, i) => {
    dot.addEventListener('click', function()  {
        // Assume single carousel (or dots are unique per carousel)
        const carousel = dot.closest("[data-carousel]");
        const slidesContainer = carousel.querySelector("[data-carousel-slides]");
        const slides = Array.from(slidesContainer.querySelectorAll("[data-carousel-slide]"));
        updateSlider(i, slides, dots);
    });
});

// Auto slide every 3.5 seconds (uses the right next button, assumes single carousel)
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
