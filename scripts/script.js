// Toggle mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".mobile_menu_toggle i");
  const mobileMenuItems = document.querySelector(".mobile_menu_items");

  toggleBtn.addEventListener("click", () => {
    mobileMenuItems.classList.toggle("active");
  });
});

// Change navbar background on scroll
window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    document.querySelector("nav").classList.add("navbar_scroll");
  } else {
    document.querySelector("nav").classList.remove("navbar_scroll");
  }
});
