import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-wild-student',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './wild-student.component.html',
  styleUrl: './wild-student.component.css'
})
export class WildStudentComponent {
  constructor(private router:Router,private route: ActivatedRoute) { }
  userName:string='';
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userName = params['userName'];
      console.log(this.userName);
    });
  }
  return(){
    this.router.navigate(['/wcs']);
  }
}
