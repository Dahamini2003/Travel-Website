// Smooth scrolling for navbar links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Smooth Parallax for Hero Background
window.addEventListener("scroll", function() {
  let scrollY = window.scrollY;
  let hero = document.querySelector(".hero");
  hero.style.backgroundPositionY = -(scrollY * 0.3) + "px"; // 0.3 = speed factor
});
