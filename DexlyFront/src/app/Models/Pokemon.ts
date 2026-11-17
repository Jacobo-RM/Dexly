import { PokemonAbility } from "./PokemonAbility";
import { PokemonEvolution } from "./PokemonEvolution";
import { PokemonSprites } from "./PokemonSprites";
import { PokemonStats } from "./PokemonStats";
import { PokemonType } from "./PokemonType";

export interface Pokemon {
  id: number;
  name: string;
  generation: number;
  types: PokemonType[];
  heightM: number;
  weightKg: number;
  isLegendary: boolean;
  stats: PokemonStats;
  abilities: PokemonAbility[];
  evolvesFrom: number | null;
  evolvesTo: PokemonEvolution[];
  description: string;
  sprites: PokemonSprites;
}
