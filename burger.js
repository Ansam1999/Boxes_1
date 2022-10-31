const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  nav.classList.toggle("active");
});
document.querySelectorAll(".main_button").forEach((n) =>
  n.addEventListener("click", () => {
    menu.classList.remove("active");
    nav.classList.remove("active");
  })
);
