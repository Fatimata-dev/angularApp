import { Component } from '@angular/core';
import { Catolog } from '../model/catalogs/catolog';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent {
  produits: Catolog[] = [
    new Catolog(0, 'Produit 0', 10, false),
    new Catolog(1, 'Produit 1', 25, true),
    new Catolog(2, 'Produit 2', 38, true),
    new Catolog(3, 'Produit 3', 40, false),
    new Catolog(4, 'Produit 4', 0, false),
  ]

  enPromotion: Catolog[] = this.produits.filter((produit) => produit.enPromo);
  paDePrix: Catolog[] = this.produits.filter(produit => !produit.prix);

  pasEnPromoAvecPrix = this.produits.filter((produit) => !produit.enPromo && produit.prix);

  
  

  // produits = [{
  //   id: 0,*
  //   nom: 'Produit ',
  //   prix: 10,
  //   promo: 5,
  // },
  //   { id: 1,
  //     nom: 'Produit 1',
  //     prix: 10,
  //     promo: 0,
  //      promook : false,
  //      priceOk : true,
  //   },{ id: 2,
  //     nom: 'Produit 2',
  //     prix: 0,
  //     promo: 10, 
  //      promook : true,
  //     priceOk : false,
  //   },
  //   { id: 3,
  //     nom: 'Produit 3',
  //     prix: 30,
  //     promo: 15,
  //     promook : true,
  //      priceOk : true,
  //   },
  //   { id: 4,
  //     nom: 'Produit 4',
  //     prix: 0,
  //     promo: 20,
  //     promook : true,
  //    priceOk : false,
  //   }
  // ]

  // inPromo(produit: any) {
  //   if(produit.promo = 0){
  //     this.promoOk = false;
  //   }else{
  //     this.promoOk = true;
  //   }
  // }

  // priceIsOk(produit: any) {
  //   if(produit.prix = 0){
  //     this.priceOk = false;
  //   }else{
  //     this.priceOk = true;
  //   }
  // }
}
