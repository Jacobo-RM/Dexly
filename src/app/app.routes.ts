import { Routes } from '@angular/router';
import { PokemonIndComponent } from './Components/pokemon-ind-component/pokemon-ind-component';
import { RegionsComponent } from './Components/regions-component/regions-component';
import { BattleTeamComponent } from './Components/battle-team-component/battle-team-component';
import { TypesComponent } from './Components/types-component/types-component';

export const routes: Routes = [
  { path: '', component: RegionsComponent },
  { path: 'pokemon/:name', component: PokemonIndComponent },
  { path: 'battle', component: BattleTeamComponent },
  { path: 'types', component: TypesComponent },
  { path: '**', redirectTo: '' },
];
