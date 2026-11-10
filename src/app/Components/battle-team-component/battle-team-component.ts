import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Pokemon } from '../../Models/Pokemon';
import { PokemonService } from '../../Services/pokemon.service';

@Component({
  selector: 'app-battle-team-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './battle-team-component.html',
  styleUrl: './battle-team-component.css',
})
export class BattleTeamComponent {

  equipo1: Pokemon[] = [];
  equipo2: Pokemon[] = [];

  cargando1 = false;
  cargando2 = false;

  constructor(
    private pokemonService: PokemonService,
    private cdr: ChangeDetectorRef
  ) {}

  equipoUno(): void {
    this.generarEquipo(1);
  }

  equipoDos(): void {
    this.generarEquipo(2);
  }

  generarEquipo(numero: number): void {

    if (numero === 1) {
      this.cargando1 = true;
    } else {
      this.cargando2 = true;
    }

    this.cdr.markForCheck();

    this.pokemonService.getRandomTeam().subscribe({
      next: (res) => {

        if (numero === 1) {
          this.equipo1 = res;
          this.cargando1 = false;
        } else {
          this.equipo2 = res;
          this.cargando2 = false;
        }

        this.cdr.markForCheck();
      },

      error: (err) => {
        console.error(err);

        if (numero === 1) {
          this.cargando1 = false;
        } else {
          this.cargando2 = false;
        }

        this.cdr.markForCheck();
      }
    });
  }
}