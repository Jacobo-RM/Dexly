import { Component, OnInit, signal } from '@angular/core';
import { PokemonView } from '../../Models/PokemonView';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../Services/app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-ind-component',
  imports: [RouterLink, CommonModule],
  standalone: true,
  templateUrl: './pokemon-ind-component.html',
  styleUrl: './pokemon-ind-component.css',
})
export class PokemonIndComponent {
  pokemon = signal<PokemonView | null>(null);
  loading = signal(false);
  error = signal<string | null>(null);

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const name = params.get('name');
      if (name) {
        this.getPokemonByName(name);
      }
    });
  }
  public getPokemonByName(name: string): void {
    const query = name.trim();
    if (!query) {
      return;
    }

    this.loading.set(true);
    this.error.set(null);
    this.pokemon.set(null);

    this.apiService.getPokemonByName(name).subscribe({
      next: (res) => {
        this.pokemon.set({
          id: res.id,
          name: res.name,
          image:
            res.sprites?.other?.['official-artwork']?.front_default ??
            res.sprites?.front_default ??
            '',
          height: res.height / 10,
          weight: res.weight / 10,
          types: res.types.map((t: any) => t.type.name),
          abilities: res.abilities.map((a: any) => a.ability.name),
          stats: res.stats.map((s: any) => ({
            name: s.stat.name,
            value: s.base_stat,
          })),
        });
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(
          err.status === 404
            ? `No existe ningún pokémon llamado "${query}"`
            : 'Error al consultar la PokeAPI',
        );
        this.loading.set(false);
      },
    });
  }
}
