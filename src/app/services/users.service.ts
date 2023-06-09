import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get<any>("http://localhost:8082/users");
  }
  CreatUsers(user:any){
    return this.http.post<any>("http://localhost:8082/users",user);
  }
}
