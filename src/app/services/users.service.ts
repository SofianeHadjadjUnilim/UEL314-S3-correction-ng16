import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = environment.APIEndpoint;

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.apiUrl}/users`);
  }

  getOneUser(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.apiUrl}/users/${id}`);
  }

  createUser(data: any): Observable<Users> {
    return this.http.post<Users>(`${this.apiUrl}/users`, data);
  }

  deleteUser(id: number, options:any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/${id}`, options);
  }

  updateUser(id: number, data: any, options:any): Observable<any> {
    return this.http.patch<Users>(`${this.apiUrl}/users/${id}`, data, options);
  }
}
