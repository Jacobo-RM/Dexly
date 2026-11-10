import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../Models/Pokemon';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';
  constructor(private http: HttpClient) {}

  getRandomTeam(): Observable<Pokemon[]> {
    const ids = new Set<number>();
    while (ids.size < 6) {
      ids.add(Math.floor(Math.random() * 1025) + 1);
    }
    const requests = Array.from(ids).map((id) => this.http.get<Pokemon>(`${this.apiUrl}/${id}`));
    return forkJoin(requests);
  }
}
