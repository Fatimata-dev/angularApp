import { Component, inject, Input } from '@angular/core';
import { Pokemons } from '../../Shared/pokemons';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { PokedexService } from '../../Shared/pokedex.service';
import { PokemonListComponent } from '../../Component/pokemon-list/pokemon-list.component'; 
import { PokemonDetailComponent } from '../../Component/pokemon-detail/pokemon-detail.component'; 
@Component({
  selector: 'app-pokedex-page',
  standalone: true,
  imports: [PokemonListComponent,PokemonDetailComponent,RouterLink,RouterOutlet],
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
