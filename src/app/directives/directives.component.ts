import { Component } from '@angular/core';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [NgIf],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  isAdmin : boolean = false;
  isAdminToggle(){
    this.isAdmin = !this.isAdmin;
  }
}
