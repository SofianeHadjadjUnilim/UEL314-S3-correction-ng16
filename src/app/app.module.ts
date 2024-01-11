import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { HomeComponent } from './components/home/home.component';
import { UsersAddComponent } from './components/users-add/users-add.component';
import { UsersRemoveComponent } from './components/users-remove/users-remove.component';
import { UsersUpdateComponent } from './components/users-update/users-update.component';
import { UsersGetComponent } from './components/users-get/users-get.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    HomeComponent,
    UsersAddComponent,
    UsersRemoveComponent,
    UsersUpdateComponent,
    NotFoundComponent,
    UsersGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsersListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
