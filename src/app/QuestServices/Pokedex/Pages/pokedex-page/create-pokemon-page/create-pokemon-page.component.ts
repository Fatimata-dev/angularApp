import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pokemons } from '../../../Shared/pokemons';
import { PokedexService } from '../../../Shared/pokedex.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-pokemon-page',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './create-pokemon-page.component.html',
  styleUrl: './create-pokemon-page.component.css'
})
export class CreatePokemonPageComponent {
pokedesService: PokedexService = inject(PokedexService);
router :Router = inject(Router);
pokemon : Pokemons = {} as Pokemons;
  onSubmit(){
    this.pokedesService.createPokemon(this.pokemon);
    this.router.navigate(['/pokemon']);

  }
}
