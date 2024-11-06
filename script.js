// Pindah halaman experience
const params = new URLSearchParams(window.location.search);
const item = params.get("item"); // Ambil nilai 'item' dari URL

// Sembunyikan semua konten pengalaman
const experiences = document.querySelectorAll(".experience, .portfolio");

if (item) {
  const experienceDiv = document.getElementById(item); // Ambil div dengan ID yang sesuai
  if (experienceDiv) {
    experienceDiv.style.display = "block"; // Tampilkan konten yang relevan
  } else {
    document.getElementById("not-found").style.display = "block"; // Tampilkan pesan tidak ditemukan
  }
}

// navbar
const scrollToHome = document.querySelectorAll(".scroll-to-home");

scrollToHome.forEach((button) => {
  button.addEventListener("click", function () {
    document.getElementById("header").scrollIntoView({
      behavior: "smooth",
    });
  });
});

const scrollToExp = document.querySelectorAll(".scroll-to-experience");

scrollToExp.forEach((button) => {
  button.addEventListener("click", function () {
    document.getElementById("experience").scrollIntoView({
      behavior: "smooth",
    });
  });
});

const scrollToPort = document.querySelectorAll(".scroll-to-portfolio");

scrollToPort.forEach((button) => {
  button.addEventListener("click", function () {
    document.getElementById("portfolio").scrollIntoView({
      behavior: "smooth",
    });
  });
});

const scrollToAbout = document.querySelectorAll(".scroll-to-about");

scrollToAbout.forEach((button) => {
  button.addEventListener("click", function () {
    document.getElementById("about").scrollIntoView({
      behavior: "smooth",
    });
  });
});

const scrollToContact = document.getElementById("scroll-to-contact");
scrollToContact.addEventListener("click", function () {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth",
  });
});

// Slider portfolio
document.addEventListener("DOMContentLoaded", () => {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const cardItems = document.querySelectorAll(".card-item");
  const cardWidth = cardItems[0].offsetWidth; // Ambil lebar satu card
  const cardsVisible = 3; // Jumlah card yang terlihat pada satu waktu
  const totalCards = cardItems.length;
  let currentIndex = 0;

  const prevButton = document.querySelector(".prev-btn");
  const nextButton = document.querySelector(".next-btn");

  if (prevButton && nextButton) {
    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
      }
    });

    nextButton.addEventListener("click", () => {
      if (currentIndex < totalCards - cardsVisible) {
        currentIndex++;
        updateSliderPosition();
      }
    });
  }

  function updateSliderPosition() {
    // Geser slider sebesar lebar satu card kali index saat ini
    const offset = -currentIndex * cardWidth;
    sliderWrapper.style.transform = `translateX(${offset}px)`;
  }

  // Pastikan slider berada di posisi awal yang benar
  updateSliderPosition();
});

// reset form di contact section
function resetForm() {
  document.querySelector(".contact-form").reset();
}

// Ambil elemen tombol
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Tampilkan tombol ketika scroll melewati 100px
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopBtn.style.display = "flex";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Fungsi scroll ke atas
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
