document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".mobile_menu_toggle i");
  const mobileMenuItems = document.querySelector(".mobile_menu_items");

  toggleBtn.addEventListener("click", () => {
    mobileMenuItems.classList.toggle("active");
  });
});
