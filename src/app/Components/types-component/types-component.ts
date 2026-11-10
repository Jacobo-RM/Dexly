import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../Services/app.service';
import { Types } from '../../Models/Types';
import { PokemonItem } from '../../Models/PokemonItem';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-types-component',
  imports: [RouterLink,TitleCasePipe],
  standalone: true,
  templateUrl: './types-component.html',
  styleUrl: './types-component.css',
})
export class TypesComponent {
  types: Types[] = [
    { label: 'Normal', typeNum: 1 },
    { label: 'Lucha', typeNum: 2 },
    { label: 'Volador', typeNum: 3 },
    { label: 'Veneno', typeNum: 4 },
    { label: 'Tierra', typeNum: 5 },
    { label: 'Roca', typeNum: 6 },
    { label: 'Bicho', typeNum: 7 },
    { label: 'Fantasma', typeNum: 8 },
    { label: 'Acero', typeNum: 9 },
    { label: 'Fuego', typeNum: 10 },
    { label: 'Agua', typeNum: 11 },
    { label: 'Planta', typeNum: 12 },
    { label: 'Eléctrico', typeNum: 13 },
    { label: 'Psíquico', typeNum: 14 },
    { label: 'Hielo', typeNum: 15 },
    { label: 'Dragón', typeNum: 16 },
    { label: 'Siniestro', typeNum: 17 },
    { label: 'Hada', typeNum: 18 },
  ];

  pokemons = signal<PokemonItem[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  constructor(private apiService: ApiService) {}

  public onTypeChange(type: number): void {
  this.loading.set(true);
  this.error.set(null);

  this.apiService.getPokemonsByType(type).subscribe({
    next: (res) => {
      this.pokemons.set(
        res.pokemon.map((entry: any) => {
          const id = Number(
            entry.pokemon.url.split('/').filter(Boolean).pop()
          );

          return {
            id,
            name: entry.pokemon.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          };
        }),
      );

      this.loading.set(false);
    },
    error: () => {
      this.error.set('Error al cargar los Pokémon');
      this.loading.set(false);
    },
  });
}
}
