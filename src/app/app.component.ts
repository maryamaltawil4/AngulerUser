
import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngulerUser';
 userVM: User[] = [
  { name: 'maryam', age: 20, email: "maryam@gmail" },
  { name: 'tala', age: 21, email: "tala@gmail" },
  { name: 'hala', age: 22, email: "hala@gmail.com" }
];
 newUser: User = {name:'',age:0, email:'',password:''};


addUser(){
 
  this.userVM.push({name:this.newUser.name,age:this.newUser.age,email:this.newUser.email});

}
//// Delete 
deleteUser(user:User) {
let i  =this.userVM.indexOf(user);
Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed && i>=0) {
    this.userVM.splice(i,1);
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success',
    )
  }
})
  }
 
}

export interface User {
  name ? :string;
  age ?:number;
  email ?:string;
  password ?:string;
}
6