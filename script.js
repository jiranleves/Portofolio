//menu hamburger iki wak
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// animasi gambar bagian project ki wak
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".card__img");

  function handleScroll() {
    images.forEach((image) => {
      const imagePosition = image.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (imagePosition < windowHeight - 100) {
        image.classList.add("card__img--visible");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

// animasi 3d card
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll("#setup");

  cards.forEach((card) => {
    const cardInner = document.createElement("div");
    cardInner.classList.add("card-inner");

    while (card.firstChild) {
      cardInner.appendChild(card.firstChild);
    }

    card.appendChild(cardInner);

    let rotationY = 0;
    let rotationX = 0;

    cardInner.addEventListener("mousemove", (e) => {
      const { clientX, clientY, target } = e;
      const { width, height } = target.getBoundingClientRect();

      const x = (clientX - width / 2) / (width / 2);
      const y = (clientY - height / 2) / (height / 2);

      rotationY += (x * 0.8 - rotationY) * 0.1;
      rotationX += (-y * 0.8 - rotationX) * 0.1;

      cardInner.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;
    });

    cardInner.addEventListener("mouseleave", () => {
      rotationY = 0;
      rotationX = 0;
      cardInner.style.transform = "rotateY(0deg) rotateX(0deg)";
    });
  });
});

const fadeElements = document.querySelectorAll(".fade-in");

const checkFadeIn = () => {
  fadeElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      element.classList.add("visible"); // Tambahkan kelas 'visible' saat elemen terlihat
    }
  });
};
window.addEventListener("scroll", checkFadeIn);
checkFadeIn();

// iko bagian home animasi scale wak

const scaleElements = document.querySelectorAll(".scale-in");
const checkScaleIn = () => {
  scaleElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      element.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", checkScaleIn);
checkScaleIn();

// iko bagian home animasi slide kiri wak
const slideElements = document.querySelectorAll(".slide-left");

const checkSlideIn = () => {
  let delay = 0;

  slideElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setTimeout(() => {
        element.classList.add("visible");
      }, delay);
      delay += 80;
    }
  });
};

window.addEventListener("scroll", checkSlideIn);
checkSlideIn();
