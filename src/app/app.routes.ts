import { Routes } from '@angular/router';
import { BlockComponent } from './block/block.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CalculatriceComponent } from './calculatrice/calculatrice.component';
import { DirectivesComponent } from './directives/directives.component';
import{MenuComponent} from './menu/menu.component';
import { UserProfileComponent } from './menu/user-profile/user-profile.component';
import { SignUpComponent } from './menu/sign-up/sign-up.component';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full'},
    { path: 'block', component: BlockComponent},
    { path: 'catalogue', component:CatalogueComponent},
    {path:'calculatrice', component:CalculatriceComponent},
    {path:'directives', component:DirectivesComponent},
    {path:'menu', component:MenuComponent,
     children: [{path: '', redirectTo: 'user-profile', pathMatch: 'full' },{path:'user-profile', component:UserProfileComponent},{path:'sign-up', component:SignUpComponent}]},
   
];
