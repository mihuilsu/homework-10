document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const btn = document.querySelector(".navbar__btn");
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  btn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });

  overlay.addEventListener("click", () => {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
});
