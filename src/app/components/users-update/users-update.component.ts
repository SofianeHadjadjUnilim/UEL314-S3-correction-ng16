import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Users } from '../../models/users.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.scss']
})

export class UsersUpdateComponent implements OnInit {

  users?: Users[];
 
  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  redirectTo(id: number) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate(['/user', id]));
  }

  getAllUsers(): void {
    this.usersService.getAllUsers()
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateUser(id: any, firstname: any, lastname: any): void {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const body = {
      firstname: firstname,
      lastname: lastname
    };

    var confirmation = window.confirm("Êtes-sûr de vouloir modifier les informations cet utilisateur ?");
    if (confirmation) {
      this.usersService.updateUser(id, body, options)
        .subscribe(
          data => {
            console.log(data);
            this.redirectTo(id);
          },
          error => {
            console.log(error);
          }
        );
    }
  }
  
}
