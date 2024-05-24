import { Component, inject } from '@angular/core';
import { Pokemons } from '../../../models/pokemons';
import { PokedexService } from '../../../Service/pokedex.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PokedexPageComponent } from '../pokedex-page/pokedex-page.component';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [PokedexPageComponent],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent {
  pokedexService: PokedexService = inject(PokedexService);
  route:ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  pokemon:Pokemons = {} as Pokemons;
  id : number=0;

  ngOnInit(){
    
  this.route.paramMap.subscribe((params: ParamMap) => {
    this.id = parseInt(params.get('id') as string);
    if (isNaN(this.id)) {
      this.router.navigate(['pokemon']);
   
      }
      
      this.pokemon =  this.pokedexService.getPokemonById(this.id) ?? {} as Pokemons; 
  });
  console.log(this.pokemon);
  }


}
