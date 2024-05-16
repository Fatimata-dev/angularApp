import { Component } from '@angular/core';
import { Developer } from '../../models/developer';
import {FormsModule} from '@angular/forms'
import { SkillComponent } from './skill/skill.component';
import { NgFor } from '@angular/common';
import { Skill } from '../../models/skill';

@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [FormsModule,SkillComponent, NgFor],
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.css'
})
export class DeveloperComponent {
  skills :Skill[] =  [
    new Skill ('Angular',"https://blog.ninja-squad.com/assets/images/angular_gradient.png","http://localhost:4200/developer"), 
    new Skill ('Java',"https://cdn.worldvectorlogo.com/logos/java.svg","http://localhost:4200/developer")
    ];
  developer:Developer= new Developer(
   "Timfa",
   "Emard",
    29,
   "Femme",
  
    " !إذا لم تجمعنا الأيام جمعتنا الذكريات وإذالعين لم تراك فالقلب لن تنساك ",
    this.skills
   
  )
    OnSubmit(){
      
    }

}
