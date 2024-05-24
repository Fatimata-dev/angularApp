import { Component, inject } from '@angular/core';
import { CocktailService } from '../../Service/cocktail.service';
import { Cocktail } from '../../models/cocktail';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.css'
})
export class CocktailListComponent {
  cocktails: Cocktail[] = [];
  coctailService: CocktailService = inject(CocktailService);
  ngOnInit(){
    this.coctailService.getCocktails().subscribe((cocktails) => {
      this.cocktails = cocktails;
    });
    console.log(this.cocktails);

  }

}
