import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Pokemons } from '../../../models/pokemons';
import { PokedexService } from '../../../Service/pokedex.service';
import { PokedexPageComponent } from '../pokedex-page/pokedex-page.component';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokedexPageComponent, RouterLink, RouterOutlet],
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
