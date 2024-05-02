import { Component } from '@angular/core';


@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})

export class UserProfileComponent {
  showAge = true;
    user = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };
  onKeydown(event: any) {
    this.user.quote = event.target.value;
  }

  ageToggle(){
    if(this.showAge){ 
      this.showAge = false;
      //console.log(this.user.age);
    }else{
      this.showAge = true;
    }
  }
}
