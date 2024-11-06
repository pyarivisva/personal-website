// Pindah halaman
const params = new URLSearchParams(window.location.search);
const item = params.get("item"); // Ambil nilai 'item' dari URL

// Sembunyikan semua experience dan portfolio terlebih dahulu
const experiences = document.querySelectorAll(".experience, .portfolio");

if (item) {
  const experienceDiv = document.getElementById(item); // Cocokkan id item
  if (experienceDiv) {
    experienceDiv.style.display = "block"; // Tampilkan konten yang relevan sesuai id item
  } else {
    document.getElementById("not-found").style.display = "block";
  }
}

// Navbar scroll
const scrollToHome = document.querySelectorAll(".scroll-to-home");

// Tambahkan event listener untuk setiap tombol 'scroll-to-home'
scrollToHome.forEach((button) => {
  button.addEventListener("click", function () {
    document.getElementById("intro").scrollIntoView({
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
  const totalCards = cardItems.length; // Total jumlah card dalam slider
  let currentIndex = 0; // Indeks card yang sedang ditampilkan

  const prevButton = document.querySelector(".prev-btn");
  const nextButton = document.querySelector(".next-btn");

  if (prevButton && nextButton) {
    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--; // Pindah ke card sebelumnya
        updateSliderPosition();
      }
    });

    nextButton.addEventListener("click", () => {
      if (currentIndex < totalCards - cardsVisible) {
        currentIndex++; // Pindah ke card berikutnya
        updateSliderPosition();
      }
    });
  }

  function updateSliderPosition() {
    // Geser slider sebesar lebar satu card kali index saat ini
    const offset = -currentIndex * cardWidth;
    sliderWrapper.style.transform = `translateX(${offset}px)`; // Geser slider
  }

  // Pastikan slider berada di posisi awal yang benar
  updateSliderPosition();
});

// Reset form di contact section
function resetForm() {
  document.querySelector(".contact-form").reset();
}

// Tampilkan tombol scroll ke atas
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Tampilkan tombol 'scrollToTopBtn' ketika scroll melewati 100px
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

// Menambahkan event listener untuk klik pada tombol scroll ke atas
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
