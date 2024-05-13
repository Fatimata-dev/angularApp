import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import { UserCard } from '../model/User/user-card';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [NgFor, NgClass,FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})

export class UserProfileComponent {
  showAge = true;
    user :UserCard= new UserCard(
    'Doe',
     'John',
     25,
     '',
     'https://randomuser.me/api/portraits/lego/2.jpg'
     );
  // onKeydown(event: any) {
  //   this.user.quote = event.target.value;
  // }

  ageToggle(){
    if(this.showAge){ 
      this.showAge = false;
      //console.log(this.user.age);
    }else{
      this.showAge = true;
    }
  }
}
