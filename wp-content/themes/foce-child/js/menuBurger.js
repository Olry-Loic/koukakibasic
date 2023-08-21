const sidenav = document.getElementById("mySidenav");
const toggleBtn = document.getElementById("toggleBtn");
const links = document.querySelectorAll("li");
const fixe = document.getElementById("menu");

toggleBtn.onclick = toggleNav;

links.forEach(link => {
  link.addEventListener("click", closeNav);
   });

function toggleNav() {
  sidenav.classList.toggle("active");
  toggleBtn.classList.toggle("active");
  fixe.classList.toggle("menuFixe")
}

function closeNav() {
  sidenav.classList.remove("active");
  toggleBtn.classList.remove("active");
  fixe.classList.remove("menuFixe")
}
