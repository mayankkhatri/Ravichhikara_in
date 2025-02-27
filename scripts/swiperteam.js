// !Swiper team

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Swiper
  const swiper = new Swiper(".swiper", {
    loop: true, // Enable loop for continuous carousel
    slidesPerView: "auto", // Set slidesPerView to 'auto' to adjust to slide width
    spaceBetween: 0, // No space between slides
    centeredSlides: false, // Slides are not centered, start from the left
    pagination: {
      el: ".swiper-pagination", // If you want to add pagination
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next", // If you want to add navigation buttons
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500, // Autoplay delay in milliseconds
      disableOnInteraction: false, // Autoplay will not be disabled after user interactions (swiping)
    },
  });
});
// !Swiper team
