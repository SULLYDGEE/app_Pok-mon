import { PokemonService } from './pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.pokemonList = POKEMONS;
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemon = this.pokemonList.find(
        (pokemon) => pokemon.id == +pokemonId
      );
    }
  }

  deletePokemon(pokemon: Pokemon) {
    this.pokemonService
      .deletePokemonById(pokemon.id)
      .subscribe(() => this.goToPokemonList());
  }

  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }

  goToEditPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemons', pokemon.id, 'edit']); // Correction ici
  }
}
