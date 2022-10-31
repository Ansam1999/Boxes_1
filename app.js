function changeBackground() {
  let navbar = document.getElementById("header");
  let main = document.getElementById("main");
  let service = document.getElementById("service");

  let scrollvalue = window.scrollY;
  if (scrollvalue < 100) {
    navbar.classList.remove("navBgColor");
  } else {
    navbar.classList.add("navBgColor");
  }
}

window.addEventListener("scroll", changeBackground);
