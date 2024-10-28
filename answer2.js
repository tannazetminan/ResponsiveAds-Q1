// Problem 1 and Problem 2 logic
function filterPokemon(pokes) {
    const type = "grass";
    const types = ["bug", "poison"];

    // Answer 1: Filter by single type
    const answer1 = pokes.filter(poke => poke.types.includes(type)).map(poke => poke.name);

    // Answer 2 (OR): Filter by multiple types (at least one match)
    const answer2Or = pokes.filter(poke => types.some(t => poke.types.includes(t))).map(poke => poke.name);

    // Answer 2 (AND): Filter by multiple types (all match)
    const answer2And = pokes.filter(poke => types.every(t => poke.types.includes(t))).map(poke => poke.name);

    // Display results in HTML
    document.getElementById("answer1").textContent = answer1.join(", ");
    document.getElementById("answer2Or").textContent = answer2Or.join(", ");
    document.getElementById("answer2And").textContent = answer2And.join(", ");
}

// Fetch data from JSON and execute filtering
fetch('data.json')
    .then(response => response.json())
    .then(data => filterPokemon(data))
    .catch(error => console.error("Error loading Pokémon data:", error));
