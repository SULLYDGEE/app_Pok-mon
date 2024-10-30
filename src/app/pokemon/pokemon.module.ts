import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Assurez-vous d'importer FormsModule ici

// Importation des composants et services
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonService } from './pokemon.service';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';

// Définition des routes pour le module Pokémon
const pokemonRoutes: Routes = [
  { path: 'pokemons/:id/edit', component: EditPokemonComponent }, // Route pour éditer un Pokémon
  { path: 'pokemons', component: ListPokemonComponent }, // Route pour lister les Pokémon
  { path: 'pokemons/:id', component: DetailPokemonComponent }, // Route pour les détails d'un Pokémon
];

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent,
    AddPokemonComponent,
  ],
  imports: [
    CommonModule, // Module commun d'Angular
    FormsModule, // Module pour gérer les formulaires
    RouterModule.forChild(pokemonRoutes), // Configuration des routes enfants
  ],
  providers: [PokemonService], // Fournisseur de service Pokémon
})
export class PokemonModule {}
