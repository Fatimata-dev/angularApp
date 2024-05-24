import { Routes } from '@angular/router';
import { BlockComponent } from './block/block.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CalculatriceComponent } from './calculatrice/calculatrice.component';
import { DirectivesComponent } from './directives/directives.component';
import{MenuComponent} from './menu/menu.component';
import { UserProfileComponent } from './menu/user-profile/user-profile.component';
import { SignUpComponent } from './menu/sign-up/sign-up.component';
import { MyFormComponent } from './my-form/my-form.component';
import { WildStudentComponent } from './wild-student/wild-student.component';
import { SearchComponent } from './search/search.component';
import { DeveloperComponent } from './@Input/developer/developer.component';
import { ParentComponent } from './@Output/parent/parent.component';
import { CreateKittenComponent } from './QuestServices/create-kitten/create-kitten.component';
import { RacineComponent } from './QuestServices/racine/racine.component';
import { CocktailListComponent } from './QuestServices/cocktail-list/cocktail-list.component';
import { PokemonListComponent } from './QuestServices/Pokedex/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './QuestServices/Pokedex/pokemon-detail/pokemon-detail.component';
import { CreatePokemonPageComponent } from './create-pokemon-page/create-pokemon-page.component';
import { NazaComponent } from './naza/naza.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'block', component: BlockComponent},
    { path: 'catalogue', component:CatalogueComponent},
    {path:'calculatrice', component:CalculatriceComponent},
    {path:'directives', component:DirectivesComponent},
    {path:'menu', component:MenuComponent,
     children: [{path: '', redirectTo: 'user-profile', pathMatch: 'full' },{path:'user-profile', component:UserProfileComponent},{path:'sign-up', component:SignUpComponent}]},
    {path:'my-form', component:MyFormComponent},
    {path:'wcs', component:SearchComponent},
    {path:'wcs/:userName',component:WildStudentComponent},
    {path:'input', component:DeveloperComponent},
    {path:'outpout', component:ParentComponent},
    {path:'service', component:RacineComponent,children:[{path:'create', component:CreateKittenComponent},{path:'cocktailList', component:CocktailListComponent}]},
    {path:'pokemon', component:PokemonListComponent, children:[]},
    {path:'pokemon/:id', component:PokemonDetailComponent},
    {path:'createPokemon', component:CreatePokemonPageComponent},
    {path: 'naza', component:NazaComponent},
    {path:'**', redirectTo: 'home'}

   
];
