import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersAddComponent } from './components/users-add/users-add.component';
import { UsersUpdateComponent } from './components/users-update/users-update.component';
import { UsersRemoveComponent } from './components/users-remove/users-remove.component';
import { UsersGetComponent } from './components/users-get/users-get.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'createuser', component: UsersAddComponent },
  { path: 'updateuser', component: UsersUpdateComponent },
  { path: 'deleteuser', component: UsersRemoveComponent },
  { path: 'user/:id', component: UsersGetComponent },
  { path: '**', component: NotFoundComponent }, // Cette route redirige toutes les routes qui n'existe pas vers un Component, ici j'ai créé un component 404 not-found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }