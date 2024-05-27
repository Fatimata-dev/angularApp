import { Component, inject, Input } from '@angular/core';
import { Pokemons } from '../../../models/pokemons';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokedex-page',
  standalone: true,
  imports: [],
  templateUrl: './pokedex-page.component.html',
  styleUrl: './pokedex-page.component.css'
})
export class PokedexPageComponent {
  router : Router = inject(Router);
  route : ActivatedRoute = inject(ActivatedRoute);
  btnText: string = 'Default';
  @Input()
  pokemon: Pokemons = new Pokemons(0, '', '', '');
  id : number = 0;
  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
   
  }


  details(id:number) {
    if(this.router.url === `/pokemon/${id}`){
      this.btnText = 'Retour à la liste';
      this.router.navigate([`/pokemon`]);
    }else{
      this.btnText = 'Details';
      this.router.navigate([`/pokemon/${id}`]);
    }
  }

  
}
