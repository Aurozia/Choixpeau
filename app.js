// Variable qui contient le "module" app (un objet)
let app = {
  // Tableau contenant le nom des 4 maisons
  houses: ["kotetsu", "diavolo", "seikiro", "hebidori"],

  // Méthode appelée au chargement de la page
  init: function () {
    // Je sélectionne le form
    const form = document.querySelector("form");

    // J'applique un écouteur d'évènement sur le form
    form.addEventListener("submit", app.handleOnSubmit);
  },

  /**
   * Actions à réaliser lors du clic sur le input de type submit
   */
  handleOnSubmit: function (event) {
    // Je stoppe le comportement par défaut de l'évènement (ici un rechargement de page)
    event.preventDefault();
    // Je génère un indice aléatoire
    const randomIndex = Math.floor(Math.random() * app.houses.length);

    // Je sélectionne l'élement input de type text
    const userInput = document.querySelector("input.name");
    // Je récupère la valeur entrée par l'user
    const userInputValue = userInput.value.toLowerCase();

    // Je sélectionne l'élement div
    const divParentElement = document.querySelector(".speech_container");

    // Je sélectionne l'élement div
    const divElement = document.querySelector(".speech");

    const existingBanner = divParentElement.querySelector(".house-banner");
    if (existingBanner) {
      divParentElement.removeChild(existingBanner);
    }

    // Si le champ de texte est vide
    if (userInputValue === "") {
      // J'affiche un message
      divElement.textContent = "It only works with a name, of course!";
    }
    // Sinon
    else {
      const houseName = app.houses[randomIndex];

      // J'affiche un blason (aléatoire)
      divElement.innerHTML =
        '<img src="/Choixpeau/pictures/' + houseName + '.png">';

      // Je créée un élement div
      const banner = document.createElement("div");
      // J'ajoute une classe a cet élément
      banner.classList.add("house-banner");
      // J'ajoute l'élément au div parent
      divParentElement.appendChild(banner);
      // J'ajoute le nom de la maison
      banner.textContent = houseName;
    }
    // Je vide le champ texte après l'ajout d'une couleur
    userInput.value = "";
  },
};

// Quand la page est entièrement chargée, j'exécute la méthode init située dans l'object app.
document.addEventListener("DOMContentLoaded", app.init);
