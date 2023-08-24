// Attente d'un événement de défilement de la fenêtre
window.addEventListener("scroll", () => {
// Variable pour stocker la position verticale de défilement précédente
    var vertical = -1; 
     // Sélection de l'élément racine du document (HTML)
    var root = document.documentElement;
    // Configuration d'une fonction qui s'exécute périodiquement
    setInterval(function () {
        // Vérification si la position de défilement a changé depuis la dernière itération
        if (window.scrollY != vertical) {
            // Mise à jour de la position verticale précédente
            vertical = window.scrollY;
            // Définition d'une propriété CSS personnalisée "--rotate" pour l'élément racine (animation de 1 seconde)
            root.style.setProperty("--rotate", "1s");
    
        } else { 
            // Définition d'une propriété CSS personnalisée "--rotate" pour l'élément racine (animation de 20 seconde)
            root.style.setProperty("--rotate", "20s");

        }
},500);// Exécution de la fonction toutes les 500 millisecondes (0.5 seconde)
});
