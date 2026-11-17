import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../Models/Pokemon';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public api: string | undefined;
  constructor(public http: HttpClient) {
    this.api = 'http://localhost:5289';
  }

  public getPokemons(){
    return this.http.get<Pokemon[]>(`${this.api}/Pokemon`)
  }

  public getPokemonsByPokedexId(id : number){
    return this.http.get<Pokemon>(`${this.api}/Pokemon/${id}`);
  }
}
