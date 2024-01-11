import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersGetComponent } from './users-get.component';

describe('UsersGetComponent', () => {
  let component: UsersGetComponent;
  let fixture: ComponentFixture<UsersGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
