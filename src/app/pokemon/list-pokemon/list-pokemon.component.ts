import { Component, OnInit } from '@angular/core';
import { PokemonService } from './../pokemon.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;

  constructor(private router: Router, private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService
      .getPokemonList()
      .subscribe((pokemonList) => (this.pokemonList = pokemonList));
  }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemons', pokemon.id]);
  }
}
