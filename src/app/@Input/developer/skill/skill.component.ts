import { Component } from '@angular/core';
import { Skill } from '../../../models/skill';
import {FormsModule} from '@angular/forms';
import{Input} from '@angular/core';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {
  @Input()
  skill!: Skill ;
  
  OnSubmit(){
    
  }

}
