const threshold = 25;

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navBar");

  if (window.scrollY > threshold) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
