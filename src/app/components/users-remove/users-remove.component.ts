import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Users } from '../../models/users.model';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-users-remove',
  templateUrl: './users-remove.component.html',
  styleUrls: ['./users-remove.component.scss']
})

export class UsersRemoveComponent implements OnInit {

  users?: Users[];
 
  constructor( private usersService: UsersService, private router:Router) { }

  ngOnInit(): void {
    this.getAllUsers();
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

  deleteUser(id: any): void {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id: id
      },
    };
  
    var confirmation = window.confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?");
    if (confirmation) {
      this.usersService.deleteUser(id, options).subscribe({
        next: data => {
          console.log(data);
          alert("L'utilisateur a bien été supprimé");
          window.location.reload();
        },
        error: error => {
          console.log(error);
        },
        complete: () => {
          console.log('User delete completed');
        }
      });
    }
  }
  

}
