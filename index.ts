import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Pokemon {
  name: string;
  hp: number;
  cp: number;
  picture: string;
  types: string[];
}

const pokemonsList: Pokemon[] = [
  {
    name: "Bulbizarre",
    hp: 25,
    cp: 5,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
    types: ["Plante", "Poison"],
  },
  {
    name: "Salamèche",
    hp: 30,
    cp: 6,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
    types: ["Feu"],
  },
  {
    name: "Carapuce",
    hp: 21,
    cp: 4,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
    types: ["Eau"],
  },
  {
    name: "Aspicot",
    hp: 18,
    cp: 3,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png",
    types: ["Insecte", "Poison"],
  },
  {
    name: "Roucool",
    hp: 30,
    cp: 8,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png",
    types: ["Normal", "Vol"],
  },
  {
    name: "Abo",
    hp: 16,
    cp: 4,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png",
    types: ["Poison"],
  },
  {
    name: "Pikachu",
    hp: 21,
    cp: 7,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
    types: ["Electrik"],
  },
  {
    name: "Sabelette",
    hp: 19,
    cp: 3,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png",
    types: ["Sol"],
  },
  {
    name: "Mélofée",
    hp: 25,
    cp: 5,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png",
    types: ["Fée"],
  },
  {
    name: "Groupix",
    hp: 17,
    cp: 8,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png",
    types: ["Feu"],
  },
  {
    name: "Mini-draco",
    hp: 17,
    cp: 8,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/147.png",
    types: ["Dragon"],
  },
  {
    name: "Fantominus",
    hp: 17,
    cp: 8,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/092.png",
    types: ["Spectre", "Poison"],
  },
  {
    name: "Machoc",
    hp: 17,
    cp: 8,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/066.png",
    types: ["Combat"],
  },
  {
    name: "Abra",
    hp: 17,
    cp: 8,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/063.png",
    types: ["Psy"],
  },
  {
    name: "Kabuto",
    hp: 17,
    cp: 8,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/140.png",
    types: ["Roche", "Eau"],
  },
  {
    name: "Sabelette d'Alola",
    hp: 17,
    cp: 8,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png",
    types: ["Glace", "Acier"],
  },
];

/**
 * Retrieves all pokemons from the database and logs the list.
 *
 * @return {Promise<void>} A Promise that resolves when the function completes.
 */
async function getAllPokemons(): Promise<void> {
  const pokemonsList: Pokemon[] = await prisma.pokemons.findMany();
  console.log(pokemonsList);
}

/**
 * Asynchronously creates a list of pokemons in the database.
 *
 * @param {Pokemon[]} pokemonsList - The list of pokemons to be created
 * @return {Promise<void>} A promise that resolves when all pokemons are created
 */
async function createPokemon(pokemonsList: Pokemon[]): Promise<void> {
  for (const pokemon of pokemonsList) {
    await prisma.pokemons.create({ data: pokemon });
  }
}

createPokemon(pokemonsList)
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
