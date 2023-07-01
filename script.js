const navBar = document.querySelector("nav");
const menuBtns = document.querySelectorAll(".menu-icon");
const overlay = document.querySelector(".overlay");

menuBtns.forEach((menuBtn) => {
  menuBtn.addEventListener("click", () => {
    navBar.classList.toggle("open");
  });
});

overlay.addEventListener("click", () => {
  navBar.classList.remove("open");
});

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('href').substring(1);
    sections.forEach((section) => {
      section.style.display = 'none';
      if (section.id === target) {
        section.style.display = 'block';
      }
    });
    navBar.classList.remove("open"); // Added line to remove "open" class from navBar
  });
});