import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink ,RouterOutlet} from '@angular/router';
import { UserKittenComponent } from '../user-kitten/user-kitten.component';
import { ListKittenComponent } from '../list-kitten/list-kitten.component';
@Component({
  selector: 'app-racine',
  standalone: true,
  imports: [FormsModule,RouterLink, RouterOutlet,UserKittenComponent,ListKittenComponent],
  templateUrl: './racine.component.html',
  styleUrl: './racine.component.css'
})
export class RacineComponent {
  
  route :ActivatedRoute = inject(ActivatedRoute);
  router:Router = inject(Router);
  create :boolean = true;
  cocktail:boolean= true;
  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.router.events.subscribe(() => {
        const currentUrl = this.router.url;
        if(currentUrl.includes('create')){
          this.create = false;
        }else{
          this.create = true;
        }
        if(currentUrl.includes('cocktailList')){
          this.cocktail = false;
        }else{
          this.cocktail = true;
        }
      });
    });
  }
}

  // @Input() 
  // selectedRace:string="";


