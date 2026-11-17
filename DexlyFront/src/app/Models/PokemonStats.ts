export interface PokemonStats {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

export const statTotal = (s: PokemonStats): number =>
  s.hp + s.attack + s.defense + s.specialAttack + s.specialDefense + s.speed;