import { ChangeDetectorRef, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../Services/app.service';
import { Pokemon } from '../../Models/Pokemon';
import { PokemonType } from '../../Models/PokemonType';
import { statTotal } from '../../Models/PokemonStats';

type SortKey = 'id' | 'name' | 'total';

@Component({
  selector: 'app-pokedex-component',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './pokedex-component.html',
  styleUrl: './pokedex-component.css',
})
export class PokedexComponent {
  private apiService = inject(ApiService);

  pokemons = signal<Pokemon[]>([]);

  search = signal('');
  selectedTypes = signal<PokemonType[]>([]);
  generation = signal<number | null>(null);
  onlyLegendary = signal(false);
  sortBy = signal<SortKey>('id');

  allTypes = computed(() =>
    [...new Set(this.pokemons().flatMap((p) => p.types))].sort()
  );
  generations = computed(() =>
    [...new Set(this.pokemons().map((p) => p.generation))].sort((a, b) => a - b)
  );

  filtered = computed(() => {
    const term = this.search().trim().toLowerCase();
    const types = this.selectedTypes();
    const gen = this.generation();
    const legendary = this.onlyLegendary();
    const sort = this.sortBy();

    return this.pokemons()
      .filter((p) => !term || p.name.toLowerCase().includes(term) || p.id.toString() === term)
      .filter((p) => types.every((t) => p.types.includes(t)))
      .filter((p) => gen === null || p.generation === gen)
      .filter((p) => !legendary || p.isLegendary)
      .sort((a, b) => {
        switch (sort) {
          case 'name':
            return a.name.localeCompare(b.name);
          case 'total':
            return statTotal(b.stats) - statTotal(a.stats);
          default:
            return a.id - b.id;
        }
      });
  });

  hasActiveFilters = computed(
    () =>
      this.search() !== '' ||
      this.selectedTypes().length > 0 ||
      this.generation() !== null ||
      this.onlyLegendary(),
  );

  toggleType(type: PokemonType): void {
    this.selectedTypes.update((current) =>
      current.includes(type) ? current.filter((t) => t !== type) : [...current, type],
    );
  }

  onGenerationChange(value: string): void {
    this.generation.set(value ? Number(value) : null);
  }

  onSortChange(value: string): void {
    this.sortBy.set(value as SortKey);
  }

  resetFilters(): void {
    this.search.set('');
    this.selectedTypes.set([]);
    this.generation.set(null);
    this.onlyLegendary.set(false);
    this.sortBy.set('id');
  }

  ngOnInit(): void {
    this.apiService.getPokemons().subscribe({
      next: (res) => this.pokemons.set(res),
      error: (err) => console.error(err),
    });
  }
}
