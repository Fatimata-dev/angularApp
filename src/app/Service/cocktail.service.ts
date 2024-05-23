import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  Cocktails = [
    {name: 'Mojito', img: 'https://cdn.chefclub.tools/uploads/recipes/cover-thumbnail/e37529e8-3f1a-4661-8fe9-84f32df4b89c_Etoe51p.jpg', prix: 8},
    {name: 'Pina Colada', img: 'https://images.immediate.co.uk/production/volatile/sites/30/2013/11/pina-colada-c68aca7.jpg?quality=90&webp=true&resize=375,341',prix:9},
    {name: 'Margarita', img: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/cebd1e0a0bb36d8861c139c8382bd69a/Derivates/4c9bd240ee8ccf662635f8a7f89c65e0f30ac08a.jpg',prix:10},
    {name: 'Tequila Sunrise', img: 'https://assets.epicurious.com/photos/644abad042d457037e529b0c/1:1/w_1920,c_limit/TequilaSunrise_RECIPE_042623_52443_VOG_final.jpg',prix:6}
  ]

  getCocktails(){
    return this.Cocktails;
  }
}
