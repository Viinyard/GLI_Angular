import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon';

export class InMemoryDataService implements InMemoryDbService {

  

  createDb() {
    const pokemons = POKEMONS;
    return {pokemons};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(pokemons: Pokemon[]): number {
    return pokemons.length > 0 ? Math.max(...pokemons.map(pokemons => pokemons.id)) + 1 : 11;
  }
}
