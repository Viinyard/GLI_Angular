import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Injectable()
export class PokeAPIService {
  private baseURL: string = "http://pokeapi.co/api/v2/";

  constructor(private http: Http) { }

  getPokemons(): Promise<Pokemon[]> {
    return this.http.get(`${this.baseURL}pokemon`)
      .toPromise()
      .then(response => {
        return response.json().results.map((pokemon) => Pokemon.parse(pokemon))
      })
      .catch(this.handleError)
  }

  getPokemonById(id: number): Promise<Pokemon> {
    return this.http.get(`${this.baseURL}pokemon/${id}`)
      .toPromise()
      .then(response => {
        console.log('response by id', response);
        return Pokemon.parse(response.json());
      })
      .catch(this.handleError)
  }

  getPokemonByName(name: string): Promise<Pokemon> {
    name = name.toLowerCase();
    return this.http.get(`${this.baseURL}pokemon/${name}`)
      .toPromise()
      .then(response => {
        console.log('json in by name search', response.json());
        return Pokemon.parse(response.json());
      })
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    // debugger;
    console.error('An error occurred:', error.statusText);
    return Promise.reject(error.statusText || error);
  }
}
