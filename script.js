// Lấy các thành phần hamburger và nav-links
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-item");

// Khi click vào hamburger, bật/tắt menu
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
