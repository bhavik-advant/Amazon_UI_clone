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

const products = [
    {
      title: "Hawkins Futura 3 Litre Handi, Hard Anodised Sauce Pan and Lid, Saucepan with Two Short Handles, Biryani Handi, Black (AH3S) Hawkins Futura 3 Litre Handi",
      img: "../assets/images/tawa.webp",
      rating: 4.5,
      reviews: 2666,
      price: 1615,
      mrp: 1850,
      delivery: "Saturday, January 31"
    },
    {
      title: "ASUS Vivobook 15 (2025), 13th Gen,Intel Core i3-1315U, 8GB RAM, 512GB SSD, FHD, 15.6', 39.6 cm, Windows 11 Home,M365 Basic(1 ASUS Vivobook 15 (2025), 13th Gen",
      img: "../assets/images/laptop.avif",
      rating: 4.2,
      reviews: 1120,
      price: 35849,
      mrp: 50900,
      delivery: "Monday, February 2"
    },
    {
      title: "SOLARA Crownstone Premium Cast Iron Kadai 12 Inch/30 Cm, Ready to Use Deep Frying Kadhai 3.3 kg, Naturally Nonstick Cast Iron SOLARA Crownstone Premium Cast Iron ",
      img: "../assets/images/cooker.jpg",
      rating: 4.6,
      reviews: 1079,
      price: 949,
      mrp: 2499,
      delivery: "Friday, January 30"
    },
    {
      title: "Hawkins Futura 3 Litre Handi, Hard Anodised Sauce Pan and Lid, Saucepan with Two Short Handles, Biryani Handi, Black (AH3S) Hawkins Futura 3 Litre Handi",
      img: "../assets/images/tawa.webp",
      rating: 4.5,
      reviews: 2666,
      price: 1615,
      mrp: 1850,
      delivery: "Saturday, January 31"
    },
    {
      title: "ASUS Vivobook 15 (2025), 13th Gen,Intel Core i3-1315U, 8GB RAM, 512GB SSD, FHD, 15.6', 39.6 cm, Windows 11 Home,M365 Basic(1 ASUS Vivobook 15 (2025), 13th Gen",
      img: "../assets/images/laptop.avif",
      rating: 4.2,
      reviews: 1120,
      price: 35849,
      mrp: 50900,
      delivery: "Monday, February 2"
    },
    {
      title: "SOLARA Crownstone Premium Cast Iron Kadai 12 Inch/30 Cm, Ready to Use Deep Frying Kadhai 3.3 kg, Naturally Nonstick Cast Iron SOLARA Crownstone Premium Cast Iron ",
      img: "../assets/images/cooker.jpg",
      rating: 4.6,
      reviews: 1079,
      price: 949,
      mrp: 2499,
      delivery: "Friday, January 30"
    },
    {
      title: "Hawkins Futura 3 Litre Handi, Hard Anodised Sauce Pan and Lid, Saucepan with Two Short Handles, Biryani Handi, Black (AH3S) Hawkins Futura 3 Litre Handi",
      img: "../assets/images/tawa.webp",
      rating: 4.5,
      reviews: 2666,
      price: 1615,
      mrp: 1850,
      delivery: "Saturday, January 31"
    },
    {
      title: "ASUS Vivobook 15 (2025), 13th Gen,Intel Core i3-1315U, 8GB RAM, 512GB SSD, FHD, 15.6', 39.6 cm, Windows 11 Home,M365 Basic(1 ASUS Vivobook 15 (2025), 13th Gen",
      img: "../assets/images/laptop.avif",
      rating: 4.2,
      reviews: 1120,
      price: 35849,
      mrp: 50900,
      delivery: "Monday, February 2"
    },
    {
      title: "SOLARA Crownstone Premium Cast Iron Kadai 12 Inch/30 Cm, Ready to Use Deep Frying Kadhai 3.3 kg, Naturally Nonstick Cast Iron SOLARA Crownstone Premium Cast Iron ",
      img: "../assets/images/cooker.jpg",
      rating: 4.6,
      reviews: 1079,
      price: 949,
      mrp: 2499,
      delivery: "Friday, January 30"
    },
    {
      title: "Hawkins Futura 3 Litre Handi, Hard Anodised Sauce Pan and Lid, Saucepan with Two Short Handles, Biryani Handi, Black (AH3S) Hawkins Futura 3 Litre Handi",
      img: "../assets/images/tawa.webp",
      rating: 4.5,
      reviews: 2666,
      price: 1615,
      mrp: 1850,
      delivery: "Saturday, January 31"
    },
    {
      title: "ASUS Vivobook 15 (2025), 13th Gen,Intel Core i3-1315U, 8GB RAM, 512GB SSD, FHD, 15.6', 39.6 cm, Windows 11 Home,M365 Basic(1 ASUS Vivobook 15 (2025), 13th Gen",
      img: "../assets/images/laptop.avif",
      rating: 4.2,
      reviews: 1120,
      price: 35849,
      mrp: 50900,
      delivery: "Monday, February 2"
    },
    {
      title: "SOLARA Crownstone Premium Cast Iron Kadai 12 Inch/30 Cm, Ready to Use Deep Frying Kadhai 3.3 kg, Naturally Nonstick Cast Iron SOLARA Crownstone Premium Cast Iron ",
      img: "../assets/images/cooker.jpg",
      rating: 4.6,
      reviews: 1079,
      price: 949,
      mrp: 2499,
      delivery: "Friday, January 30"
    },
    {
      title: "Hawkins Futura 3 Litre Handi, Hard Anodised Sauce Pan and Lid, Saucepan with Two Short Handles, Biryani Handi, Black (AH3S) Hawkins Futura 3 Litre Handi",
      img: "../assets/images/tawa.webp",
      rating: 4.5,
      reviews: 2666,
      price: 1615,
      mrp: 1850,
      delivery: "Saturday, January 31"
    },
    {
      title: "ASUS Vivobook 15 (2025), 13th Gen,Intel Core i3-1315U, 8GB RAM, 512GB SSD, FHD, 15.6', 39.6 cm, Windows 11 Home,M365 Basic(1 ASUS Vivobook 15 (2025), 13th Gen",
      img: "../assets/images/laptop.avif",
      rating: 4.2,
      reviews: 1120,
      price: 35849,
      mrp: 50900,
      delivery: "Monday, February 2"
    },
    {
      title: "SOLARA Crownstone Premium Cast Iron Kadai 12 Inch/30 Cm, Ready to Use Deep Frying Kadhai 3.3 kg, Naturally Nonstick Cast Iron SOLARA Crownstone Premium Cast Iron ",
      img: "../assets/images/cooker.jpg",
      rating: 4.6,
      reviews: 1079,
      price: 949,
      mrp: 2499,
      delivery: "Friday, January 30"
    },
  ];
  
  let currentPage = 1;
  let itemsPerPage = getItemsPerPage();
  let totalPages = Math.ceil(products.length / itemsPerPage);
  
  const carousel = document.getElementById("carousel");
  const pageIndicator = document.getElementById("pageIndicator");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const startOverBtn = document.getElementById("startOverBtn");
  
  function getItemsPerPage() {
    if (window.innerWidth < 640) return 2;       
    if (window.innerWidth < 1024) return 3;     
    return 7;                                     
  }
  
  function renderPage() {
    carousel.innerHTML = "";
  
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = products.slice(start, end);
  
    pageItems.forEach(p => {
      const discount = Math.round(((p.mrp - p.price) / p.mrp) * 100);
  
      const card = document.createElement("div");
      card.className = "text-sm space-y-1";
  
      card.innerHTML = `
      <div class="w-full flex justify-center items-center  bg-white">
        <img 
          src="${p.img}" 
          class="object-contain w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 block"
        
          alt="${p.title}"
        />
      </div>
        <p class="text-blue-700 hover:underline cursor-pointer line-clamp-2">
          ${p.title}
        </p>
  
        <div class="flex items-center gap-1 text-xs">
          <span class="bg-yellow-400 text-white px-1 rounded">
            ${p.rating} 
          </span>
          <span class="text-blue-600">(${p.reviews})</span>
        </div>
  
        <div class="flex items-center gap-2">
          <span class="text-red-600 font-semibold">-${discount}%</span>
          <span class="font-semibold">₹${p.price}</span>
        </div>
  
        <p class="text-gray-500 line-through text-xs">
          M.R.P.: ₹${p.mrp}
        </p>
  
        <p class="text-xs">
          Get it by <span class="font-semibold">${p.delivery}</span>
        </p>
  
        <p class="text-xs text-gray-600">FREE Delivery by Amazon</p>
      `;
  
      carousel.appendChild(card);
    });
  
    totalPages = Math.ceil(products.length / itemsPerPage);
    pageIndicator.textContent = `Page ${currentPage} of ${totalPages}`;
  
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
  
    startOverBtn.classList.toggle("hidden", currentPage === 1);
  }
  
  prevBtn.onclick = () => {
    if (currentPage > 1) {
      currentPage--;
      renderPage();
    }
  };
  
  nextBtn.onclick = () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderPage();
    }
  };
  
  startOverBtn.onclick = () => {
    currentPage = 1;
    renderPage();
  };
  

  window.addEventListener("resize", () => {
    const newItemsPerPage = getItemsPerPage();
    if (newItemsPerPage !== itemsPerPage) {
      itemsPerPage = newItemsPerPage;
      currentPage = 1;
      renderPage();
    }
  });
  
  renderPage();