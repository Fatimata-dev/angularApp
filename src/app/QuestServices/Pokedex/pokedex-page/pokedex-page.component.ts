import { Component, inject, Input } from '@angular/core';
import { Pokemons } from '../../../models/pokemons';
import { ActivatedRoute, Router } from '@angular/router';
import { PokedexService } from '../../../Service/pokedex.service';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-pokedex-page',
  standalone: true,
  imports: [PokemonListComponent,PokemonDetailComponent],
  templateUrl: './pokedex-page.component.html',
  styleUrl: './pokedex-page.component.css'
})
export class PokedexPageComponent {
  pokedexService: PokedexService = inject(PokedexService);
  pokemons: Pokemons[] = [];
  pokemonDetail!: Pokemons
  router : Router = inject(Router);
  route : ActivatedRoute = inject(ActivatedRoute);
  details : boolean = false;

  ngOnInit(){
    this.pokemons = this.pokedexService.getAllPokemons();
  }
  OnSelect(pokemon:Pokemons){
    this.pokemonDetail = pokemon;
    this.details = true;
  }
  return()
  {
    this.details = false;
  }
  
}
