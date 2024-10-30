import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from './../pokemon.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css'],
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;
  types: string[];
  isAddForm: boolean;

  constructor(private pokemonService: PokemonService, private router: Router) {}

  // Initialisation avec tous les types de Pokémon disponible dans le projet.
  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList();
    // si isAddForm vaut threw ça veut dire que je veux rajouter un pokemon sinon je veux editer un pokemon
    this.isAddForm = this.router.url.includes('add');
  }

  // Je peux vérifier si un Pokémon A ou n'a pas un type, ce qui va me permettre de cocher ou décoché les cases à l'initialisation du formulaire
  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  // Lorsque l'utilisateur va interagir avec les type de mes cases à cocher, eh bien à ce moment là je vais pouvoir mettre ç jour mon Pokémon en circondtance

  selectType($event: Event, type: string) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  // Cette méthode me permet de bloquer ou de debloquer les checkbox dynamiquement en fonction d'une règle de validation de metier
  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length == 1 && this.hasType(type)) {
      return false;
    }

    if (this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false;
    }

    return true;
  }

  onSubmit() {
    if (this.isAddForm) {
      this.pokemonService
        .addPokemon(this.pokemon)
        .subscribe((pokemon: Pokemon) =>
          this.router.navigate(['/pokemon', this.pokemon.id])
        );
    } else {
      this.pokemonService
        .updatePokemon(this.pokemon)
        .subscribe(() => this.router.navigate(['/pokemon', this.pokemon.id]));
    }
  }
}
