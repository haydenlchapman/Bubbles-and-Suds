
const deckCards = [
    {cardName: "Business Bub", attack: 3, defense: 3},
    {cardName: "Swole Foam", attack: 5, defense: 1},
    {cardName: "Sudsey Supreme", attack: 1, defense: 5},
    {cardName: "Bubbly Bud", attack: 4, defense: 2},
    {cardName: "Soap of the Siren", attack: 2, defense: 4}
];

// Hazards purely check defense. If defense is less than or equal to the attack of the hazard, the player dies.
const hazards = [
    {cardName: "Asbestos", attack: 1},
    {cardName: "Kicked up Dirt", attack: 1},
    {cardName: "Rocky Spikes", attack: 2},
    {cardName: "Traps of Flying Rocks", attack: 2},
    {cardName: "Popcorn Barrage", attack: 2},
    {cardName: "The Sun", attack: 3},
    {cardName: "Rain", attack: 3},
    {cardName: "Vibrations from the Outside Giants", attack: 4},
    {cardName: "Vortex of Dirt", attack: 4},
    {cardName: "Inscriptions of the Ancient Ones", attack: 5},
    {cardName: "Quantum March of the Universe", attack: 5}
];

/* Enemies attack players. If the player’s attack is equal to the enemy, then it is a draw and they don’t move. If it is less than the enemy then they die, and if it is
   greater than the enemy then they move on. */
const enemies = [
    {cardName: "House Fly", attack: 1},
    {cardName: "Collective of Sentient Bacteria", attack: 1},
    {cardName: "Mini Government Drones", attack: 2},
    {cardName: "Vengeful Spirit of a Mouse", attack: 2},
    {cardName: "Ambush Contract Bubble Assassin, Alastar the Mini-Minotaur", attack: 3},
    {cardName: "Human Child with a Stick", attack: 3},
    {cardName: "Aromatic Killer, Brewer of Incense of Poison, Iren the Wicked", attack: 4},
    {cardName: "Government Attack Pigeons", attack: 4},
    {cardName: "Miniature Herald of the Flying Spaghetti Monster", attack: 5},
    {cardName: "Psychic Manifestation of Consciousness of the Universe", attack: 5}
];

const items = [
    {cardName: "Cloud Shield", defenseUp: 1},
    {cardName: "Charm of Ice Arm", defenseUp: 2},
    {cardName: "Crown of Psychic Armor", defenseUp: 3},
    {cardName: "Hoard of Sentient Controllable Gnats", defenseUp: 1, attackUp: 1},
    {cardName: "Long Sword of Asbestos", attackUp: 1},
    {cardName: "Magic Blaster of Concentrated Soap", attackUp: 2},
    {cardName: "Wand of the Ancient Ones’ Anger", attackUp: 3}
];

const movementCards = [
    {cardName: "Forward!"},
    {cardName: "Backward!"},
    {cardName: "Left!"},
    {cardName: "Right!"},
    {cardName: "Northeast!"},
    {cardName: "Northwest!"},
    {cardName: "Southeast!"},
    {cardName: "Southwest!"}
];