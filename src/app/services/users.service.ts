import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  CreatUsers(user: any) {
    return this.http.post<any>(environment.apiURL + "/users", user);
  }

  getUsersOfClassroom(id: number) {
    const headers: { Authorization: string } = {'Authorization': 'Bearer ' + this.auth.getAuthToken()};
    return this.http.get<any>(environment.apiURL + "/users/classroom/" + id, {headers});

  }
}
