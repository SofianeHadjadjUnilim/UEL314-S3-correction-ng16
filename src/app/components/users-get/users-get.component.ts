import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-get',
  templateUrl: './users-get.component.html',
  styleUrls: ['./users-get.component.scss']
})

export class UsersGetComponent implements OnInit, OnDestroy {

  users: any;
  paramid: number = 0;
  private sub: any;

  constructor(private route: ActivatedRoute, private usersService: UsersService, private router:Router) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.paramid = +params['id'];
    });
    this.getUser(this.paramid);
    this.router.navigate(['/user/', this.paramid]);
  }

  getUser(id:number): void {
    this.usersService.getOneUser(id).subscribe({
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

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
