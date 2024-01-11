import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../../models/users.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.scss']
})
export class UsersAddComponent implements OnInit {

  resUserId?:number;
  resUser?: Users;
  users: Users = {
    firstname: '',
    lastname: ''
  };

  constructor( private usersService: UsersService, private router:Router ) {}

  ngOnInit(): void {
  }

  redirectTo(id:number){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(['/user', id]));
  }

  addUser(): void {
    const body = {
      firstname: this.users.firstname,
      lastname: this.users.lastname
    };
  
    this.usersService.createUser(body).subscribe({
      next: data => {
        this.resUser = data;
        console.log(data);
        this.redirectTo(Number(this.resUser.id));
      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        console.log('User creation completed');
      }
    });
  }  

}
