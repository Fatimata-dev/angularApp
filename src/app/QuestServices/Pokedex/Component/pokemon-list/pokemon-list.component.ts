import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PokedexPageComponent } from '../../Pages/pokedex-page/pokedex-page.component';
import { Pokemons } from '../../Shared/pokemons';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokedexPageComponent, RouterLink, RouterOutlet,PokemonDetailComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {
  @Input()
  pokemonList: Pokemons[]= [];
  @Output() selectPokemon = new EventEmitter<Pokemons>(); 
  
  ngOnInit(){
   
  }

  details(pokemon:Pokemons){ 
      this.selectPokemon.emit(pokemon);
  }
}
