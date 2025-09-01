// Mobile menu toggle
function toggleMenu() {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("show");
}

// Smooth scroll (extra polish)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
    // Close menu on click (mobile)
    document.getElementById("navbar").classList.remove("show");
  });
});
