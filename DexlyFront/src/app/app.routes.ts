import { Routes } from '@angular/router';
import { PokedexComponent } from './Components/pokedex-component/pokedex-component';
import { PokemonInfo } from './Components/pokemon-info/pokemon-info';

export const routes: Routes = [
  { path: '', redirectTo: 'pokedex', pathMatch: 'full' },
  { path: 'pokedex', component: PokedexComponent },
  { path: 'pokemon/:id', component: PokemonInfo },
  { path: '**', redirectTo: 'pokedex' },
];
