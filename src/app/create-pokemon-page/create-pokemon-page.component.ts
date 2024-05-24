import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pokemons } from '../models/pokemons';
import { PokedexService } from '../Service/pokedex.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-pokemon-page',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './create-pokemon-page.component.html',
  styleUrl: './create-pokemon-page.component.css'
})
export class CreatePokemonPageComponent {
pokedesService: PokedexService = inject(PokedexService);
pokemon : Pokemons = {} as Pokemons;
  onSubmit(){
    this.pokedesService.createPokemon(this.pokemon);
    console.log(this.pokemon);

  }
}
