import { Component, signal } from '@angular/core';
import { Region } from '../../Models/Region';
import { PokemonItem } from '../../Models/PokemonItem';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../Services/app.service';

@Component({
  selector: 'app-regions-component',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './regions-component.html',
  styleUrl: './regions-component.css',
})
export class RegionsComponent {
  regions: Region[] = [
    { label: 'Kanto', pokedex: 'kanto' },
    { label: 'Johto', pokedex: 'original-johto' },
    { label: 'Hoenn', pokedex: 'hoenn' },
    { label: 'Sinnoh', pokedex: 'original-sinnoh' },
    { label: 'Teselia', pokedex: 'original-unova' },
    { label: 'Kalos (Central)', pokedex: 'kalos-central' },
    { label: 'Alola', pokedex: 'updated-alola' },
    { label: 'Galar', pokedex: 'galar' },
    { label: 'Hisui', pokedex: 'hisui' },
    { label: 'Paldea', pokedex: 'paldea' },
  ];

  constructor(private apiService: ApiService) {}

  pokemons = signal<PokemonItem[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  public onRegionChange(pokedex: string): void {
    this.loading.set(true);
    this.error.set(null);

    this.apiService.getPokemonsByRegion(pokedex).subscribe({
      next: (res) => {
        this.pokemons.set(
          res.pokemon_entries.map((entry: any) => {
            const id = Number(entry.pokemon_species.url.split('/').filter(Boolean).pop());
            return {
              id,
              name: entry.pokemon_species.name,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
            };
          }),
        );
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Error al cargar la región');
        this.loading.set(false);
      },
    });
  }
}
