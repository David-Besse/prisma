-- CreateTable
CREATE TABLE "Pokemons" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "hp" INTEGER NOT NULL,
    "cp" INTEGER NOT NULL,
    "picture" VARCHAR(100) NOT NULL DEFAULT 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
    "types" TEXT[] DEFAULT ARRAY['plante', 'feu', 'eau']::TEXT[],
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pokemons_pkey" PRIMARY KEY ("id")
);
