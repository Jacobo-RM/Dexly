import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  public getPokemonByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/pokemon/${name.toLowerCase().trim()}`);
  }

  public getPokemonsByRegion(region: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/pokedex/${region.toLowerCase().trim()}`);
  }

  public getPokemonsByType(type: number): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/type/${type}`)
  }
}
