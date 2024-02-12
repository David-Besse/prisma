import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Pokemon {
  id: number;
  name: string;
  hp: number;
  cp: number;
  picture: string;
  types: string[];
  created: Date;
}

/**
 * Retrieves all pokemons from the database and logs the list.
 *
 * @return {Promise<void>} A Promise that resolves when the function completes.
 */
async function getAllPokemons(): Promise<void> {
  const pokemonsList: Pokemon[] = await prisma.pokemon.findMany();
  console.log(pokemonsList);
}

getAllPokemons()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
