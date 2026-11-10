export interface PokemonView {
  id: number;
  name: string;
  image: string;
  height: number;
  weight: number;
  types: string[];
  abilities: string[];
  stats: { name: string; value: number }[];
}