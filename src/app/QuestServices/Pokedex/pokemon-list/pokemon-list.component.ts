import { Component, inject } from '@angular/core';
import { Pokemons } from '../../../models/pokemons';
import { PokedexService } from '../../../Service/pokedex.service';
import { PokedexPageComponent } from '../pokedex-page/pokedex-page.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokedexPageComponent, RouterLink, RouterOutlet],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {

  pokedexService: PokedexService = inject(PokedexService);
  pokemons: Pokemons[] = []
  id: number = 0;

  
  ngOnInit(){

    this.pokemons = this.pokedexService.getAllPokemons();
  }
}
