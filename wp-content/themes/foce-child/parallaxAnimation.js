  console.log("Script loaded");
 // Attendre que le document soit chargé avant d'ajouter le gestionnaire d'événement de défilement
 document.addEventListener("DOMContentLoaded", function () {
  // Sélection de la section "banners"
  const bannerSection = document.querySelector(".banners");

  // Ajout un gestionnaire d'événement de défilement à la fenêtre
  window.addEventListener("scroll", function () {
    // Obtenez la position de défilement actuelle
    const scrollPosition = window.scrollY;

    // mise à jour de la position verticale de l'image parallaxe en fonction de la position de défilement
    const logoParallax = document.querySelector(".logo.parallax");
    logoParallax.style.transform = "translate3d(0, " + -scrollPosition / 4 + "px, 0)";

    // mise à jour de la position verticale du logo en fonction de la position de défilement 
    const logo = document.querySelector(".logo");
    logo.style.transform = "translate3d(0, " + +scrollPosition / 2 + "px, 0)";
  });
});
