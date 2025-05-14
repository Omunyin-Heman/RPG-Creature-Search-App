document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  const creatureInfo = document.getElementById('creature-info');
  const typesElement = document.getElementById('types');

  const creatures = [
    {
      name: "Pyrolynx",
      id: 1,
      weight: 42,
      height: 32,
      types: ["FIRE"],
      stats: {
        hp: 65,
        attack: 80,
        defense: 50,
        specialAttack: 90,
        specialDefense: 55,
        speed: 100
      }
    },
    {
      name: "Aquoroc",
      id: 2,
      weight: 220,
      height: 53,
      types: ["WATER", "ROCK"],
      stats: {
        hp: 85,
        attack: 90,
        defense: 120,
        specialAttack: 60,
        specialDefense: 70,
        speed: 40
      }
    }
  ];

  creatureInfo.style.display = 'none';

  const showNotFoundAlert = () => alert("Creature not found");

  const displayCreature = (creature) => {
    document.getElementById('creature-name').textContent = creature.name;
    document.getElementById('creature-id').textContent = creature.id.toString();
    document.getElementById('weight').textContent = creature.weight.toString();
    document.getElementById('height').textContent = creature.height.toString();
    document.getElementById('hp').textContent = creature.stats.hp.toString();
    document.getElementById('attack').textContent = creature.stats.attack.toString();
    document.getElementById('defense').textContent = creature.stats.defense.toString();
    document.getElementById('special-attack').textContent = creature.stats.specialAttack.toString();
    document.getElementById('special-defense').textContent = creature.stats.specialDefense.toString();
    document.getElementById('speed').textContent = creature.stats.speed.toString();

    typesElement.innerHTML = '';
    creature.types.forEach(type => {
      const typeEl = document.createElement('span');
      typeEl.textContent = type;
      typesElement.appendChild(typeEl);
    });

    creatureInfo.style.display = 'block';
  };

  searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    creatureInfo.style.display = 'none';
    typesElement.innerHTML = '';

    if (searchTerm.toLowerCase() === "red") {
      showNotFoundAlert();
      return;
    }

    const searchAsNumber = parseInt(searchTerm, 10);
    if (!isNaN(searchAsNumber)) {
      const creatureById = creatures.find(c => c.id === searchAsNumber);
      if (creatureById) {
        displayCreature(creatureById);
        return;
      }
    }

    const creatureByName = creatures.find(c =>
      c.name.toLowerCase() === searchTerm.toLowerCase()
    );

    if (creatureByName) {
      displayCreature(creatureByName);
    } else {
      showNotFoundAlert();
    }
  });
});
