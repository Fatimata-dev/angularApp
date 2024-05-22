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
import { ListKittenComponent } from './services/list-kitten/list-kitten.component';
import path from 'path';
import { CreateKittenComponent } from './services/create-kitten/create-kitten.component';

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
    {path:'kitten', component:ListKittenComponent,children:[{path:'create', component:CreateKittenComponent},]},
    {path:'**', redirectTo: 'home'}

   
];
