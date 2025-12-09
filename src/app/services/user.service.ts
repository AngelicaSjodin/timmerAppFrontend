import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API_URL = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  //hämta användare
  getUsers(): Observable<any> {
    return this.http.get(this.API_URL);
  }

  //lägga till användare 
  addUser(user: any): Observable<any> {
    return this.http.post(this.API_URL, user);
  }

  //(delete användare?, )
}