import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { catchError, of, switchMap, tap } from 'rxjs';
import { ApiService } from '../../Services/app.service';
import { Pokemon } from '../../Models/Pokemon';

@Component({
  selector: 'app-pokemon-info',
  imports: [RouterLink],
  templateUrl: './pokemon-info.html',
  styleUrl: './pokemon-info.css',
})
export class PokemonInfo {
  private route = inject(ActivatedRoute);
  private apiService = inject(ApiService);

  pokemon = signal<Pokemon | null>(null);
  loading = signal(true);
  error = signal(false);

  constructor() {
    this.route.paramMap
      .pipe(
        tap(() => {
          this.loading.set(true);
          this.error.set(false);
        }),
        switchMap((params) => {
          const id = Number(params.get('id'));
          if (!id) return of(null);

          return this.apiService.getPokemonsByPokedexId(id).pipe(
            catchError((err) => {
              console.error(err);
              return of(null);
            })
          );
        }),
        takeUntilDestroyed()
      )
      .subscribe((pokemon) => {
        this.pokemon.set(pokemon);
        this.error.set(pokemon === null);
        this.loading.set(false);
      });
  }
}