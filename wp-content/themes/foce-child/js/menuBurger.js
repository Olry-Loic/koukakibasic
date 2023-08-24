// Sélectionne des différent elements du menu burger"
const sidenav = document.getElementById("mySidenav");
const toggleBtn = document.getElementById("toggleBtn");
const links = document.querySelectorAll("li");
const fixe = document.getElementById("menu");

// Attache l'événement de clic au bouton "toggleBtn"
toggleBtn.onclick = toggleNav;

// Pour chaque lien (élément "li") dans la liste de liens on ajout un ecouteur évenement clic"
links.forEach(link => {
  link.addEventListener("click", closeNav);
   });

// Définition de la fonction "toggleNav"
function toggleNav() {
  sidenav.classList.toggle("active");
  toggleBtn.classList.toggle("active");
  fixe.classList.toggle("menuFixe")
}

// Définition de la fonction "closeNav"
function closeNav() {
  sidenav.classList.remove("active");
  toggleBtn.classList.remove("active");
  fixe.classList.remove("menuFixe")
}

