// Change Nav Color on Scroll
const nav = document.querySelector("nav");
const sectionOne = document.querySelector(".Landing_page");

sectionOneOptions = {
  rootMargin: "-400px 0px 0px 0px",
};
const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.add("nav_scrolled");
    } else {
      nav.classList.remove("nav_scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// Effect animateOnScroll API on Home Page
AOS.init({
  easing: 'zoom-in',
  duration: 1200,
  delay: 300,
  once: false,
  disable: false
});

// show hidden div on client section 

const keyPoints = document.querySelectorAll(".key-points");

keyPoints.forEach((keyPoint) => {
  const btn = keyPoint.querySelector(".keypoints-btn");

  btn.addEventListener("click", () => {
    keyPoints.forEach((item) => {
      if (item !== keyPoint) {
        item.classList.remove("show-text");
      }
    });

    keyPoint.classList.toggle("show-text");
  });
});

let btnop1 = document.getElementById("op-1");
let btnop2 = document.getElementById("op-2");
let op1Text = document.getElementById("op-1-text");
let op2Text = document.getElementById("op-2-text");

btnop1.addEventListener("click", () => {
  op1Text.style.display = "block";
  op2Text.style.display = "none";
  btnop1.style.color = "gold";
  btnop1.style.borderBottom = "3px solid gold";
  btnop2.style.color = "grey";
  btnop2.style.borderBottom = "3px solid grey";
});

btnop2.addEventListener("click", () => {
  op1Text.style.display = "none";
  op2Text.style.display = "block";
  btnop1.style.color = "grey";
  btnop1.style.borderBottom = "3px solid grey";
  btnop2.style.borderBottom = "3px solid gold";
  btnop2.style.color = "gold";
});

// Effect swiper API on Team Section
const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  slidesPerGroup: 1,

  breakpoints: {
    360: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// footer get full year

// const termsContainer = document.querySelector('.terms_container');
// const product = termsContainer.querySelector('.product h3');
// console.log(product);
// let fullYear = new Year ()
// fullYear.getFullYear()
// product.textContent += fullYear;
