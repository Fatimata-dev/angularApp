import { Component, inject } from '@angular/core';
import { CocktailService } from '../../Service/cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.css'
})
export class CocktailListComponent {
  cocktails= [
    {name: '', img: '', prix: 0}
  ]  ;
  coctailService: CocktailService = inject(CocktailService);
  ngOnInit(){
    this.cocktails = this.coctailService.getCocktails();

  }

}
