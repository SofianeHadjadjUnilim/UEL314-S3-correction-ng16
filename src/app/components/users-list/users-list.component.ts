import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/users.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users?: Users[];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.usersService.getAllUsers().subscribe({
      next: data => {
        this.users = data;
        console.log(data);
      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        console.log('Completed');
      }
    });
  }  

}
