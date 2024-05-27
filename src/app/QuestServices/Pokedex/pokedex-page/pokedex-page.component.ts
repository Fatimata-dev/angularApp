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
  isList : boolean = false;
  ngOnInit(){
    if(this.router.url === `/pokemon`){
      this.btnText = 'Details';
      this.isList = true;
   
   }else{
    this.btnText = 'Retour à la liste';
    this.isList = false;
  }
}


  details(id:number) {
    if(this.isList){
      this.router.navigate([`/pokemon/${id}`]);
    }else{
      this.router.navigate([`/pokemon`]);
    }
  }

  
}
