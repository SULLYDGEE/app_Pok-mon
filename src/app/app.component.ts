import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon/pokemon';
import { POKEMONS } from './pokemon/mock-pokemon-list';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  // Partie de vue
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  ngOnInit() {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(
      (pokemon) => pokemon.id == +pokemonId
    );

    if (pokemon) {
      console.log(`Vous avez demandé le pokemon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Vous avez demandé le pokémon qui n'existe pas.`);
      this.pokemonSelected = pokemon;
    }
  }
}
