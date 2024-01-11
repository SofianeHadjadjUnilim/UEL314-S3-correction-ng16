import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { Users } from '../../models/users.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users?: Users[];
  userId: number = 0;
  listIds:any;

  constructor(private usersService: UsersService, private changeDetector: ChangeDetectorRef) { }

  onChange(event: any) { // without type info
    this.userId = event.target.value;
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  getAllUsers(): void {
    this.usersService.getAllUsers()
      .subscribe(
        data => {
          this.users = data;
          const selectedIds = data.map(({ id }) => id);
          console.log(selectedIds);
          this.listIds = selectedIds;
        },
        error => {
          console.log(error);
        });
  }

}
