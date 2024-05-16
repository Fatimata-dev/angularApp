import { Component } from '@angular/core';
import { Developer } from '../../models/developer';
import {FormsModule} from '@angular/forms'
import { SkillComponent } from './skill/skill.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [FormsModule,SkillComponent, NgFor],
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.css'
})
export class DeveloperComponent {
  developer:Developer={
    
    lastName:"",
    firstName :"",
    age :0,
    gender :"",
    bio :"",
    skills:[{name:"Esprit d'équipe",logo:"https://ssl.sitew.org/images/blog/articles/cover/pixabay.jpg",site:"Hi"}, {name:"Dynamique",logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdhIr4QkDQEujEzvK8sEEfSauPqB2MSM_LMrBe2k3ftg&s",site:"c"}]
    }
  
    OnSubmit(){
      
    }

}
