import { EvolutionTrigger } from "./EvolutionTrigger";

export interface PokemonEvolution {
  pokemonId: number;
  trigger: EvolutionTrigger;
  minLevel: number | null;
  item: string | null;
}