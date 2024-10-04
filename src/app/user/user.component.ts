import { Component, computed, input, Input, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
let randomUserIndex=Math.floor(Math.random()*DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUser= signal(DUMMY_USERS[randomUserIndex])
  // imgPath=computed(()=>'assets/users/'+this.selectedUser().avatar )
  // get imgPath(){
  //   return 'assets/users/'+this.selectedUser.avatar
  // }
  @Input({required:true}) avatar!:string;
  @Input({required:true}) name!:string;
  // avater=input.required<string>();
  // name=input.required<string>();

 get imgPath(){
    return 'assets/users/'+this.avatar
  }
  // imgPath=computed(()=> {
  //   return 'assets/users/' + this.avatar();
  // })
  onSelectUser(){
// let randomUserIndex=Math.floor(Math.random()*DUMMY_USERS.length);
//    this.selectedUser.set(DUMMY_USERS[randomUserIndex])

  }
}
