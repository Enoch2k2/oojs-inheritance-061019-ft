document.addEventListener('DOMContentLoaded', function() {
  getPetForm().addEventListener('submit', createPet);
})

/** DOM GETTERS **/
const getPetForm = () => document.querySelector('#petForm');
const getName = () => document.querySelector('#name');
const getSpecies = () =>  document.querySelector('#species');
const getAnimalList = () => document.querySelector('#petList');
const getCardContents = () => document.querySelectorAll('.card-content');
const getLastCardContent = () => getCardContents()[getCardContents().length - 1];

/** Event Handlers **/

const createPet = e => {
  e.preventDefault();
  const pet = {
    name: getName().value,
    species: getSpecies().value
  }

  initializePet(pet);
}

const initializePet = pet => {
  switch(pet.species) {
    case "dog":
      let dog = new Dog(pet.name);
      dog.render();
      break;
    case "cat":
      let cat = new Cat(pet.name);
      cat.render();
      break;
    case "bird":
      let bird = new Bird(pet.name);
      bird.render();
      break;
  }
}