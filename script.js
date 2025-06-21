document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menuNav = document.querySelector(".menu-nav");
  const menuLinks = document.querySelectorAll(".menu-list a");
  const hamburgerIcon = document.querySelector(".hamburger-icon");

  // Menutup menu saat link di dalam menu diklik (untuk mobile)
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        // Hanya berlaku di mobile
        menuToggle.checked = false; // Uncheck checkbox untuk menutup menu
      }
    });
  });

  // Opsional: Menutup menu jika mengklik di luar area menu (di mobile)
  document.addEventListener("click", (event) => {
    if (window.innerWidth <= 768) {
      const isClickInsideMenu =
        menuNav.contains(event.target) ||
        menuToggle.contains(event.target) ||
        hamburgerIcon.contains(event.target);
      if (!isClickInsideMenu && menuToggle.checked) {
        menuToggle.checked = false;
      }
    }
  });
});
