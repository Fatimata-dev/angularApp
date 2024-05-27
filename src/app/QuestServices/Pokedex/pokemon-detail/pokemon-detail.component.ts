import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Pokemons } from '../../../models/pokemons';
import { PokedexPageComponent } from '../pokedex-page/pokedex-page.component';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [PokedexPageComponent],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent {
  @Input()
  pokemon!:Pokemons;
  @Output()
  pokemonList = new EventEmitter<Pokemons>();

  ngOnInit(){
  }

}
