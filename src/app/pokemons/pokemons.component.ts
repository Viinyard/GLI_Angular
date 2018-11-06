import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  selectedId : number = 1;
  filter : string = "name";
  searchString : string = "";
  selectedPokemon: Pokemon;
  pokemons: Pokemon[];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemons();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.pokemonService.addPokemon({ name } as Pokemon)
      .subscribe(pokemon => {
        this.pokemons.push(pokemon);
      });
  }

  delete(pokemon: Pokemon): void {
    this.pokemons = this.pokemons.filter(p => p !== pokemon);
    this.pokemonService.deletePokemon(pokemon).subscribe();
  }

  getPokemons(): void {
    this.pokemonService.getPokemons()
      .subscribe(pokemons => this.pokemons = pokemons);
  }

  onSelect(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  }
}
