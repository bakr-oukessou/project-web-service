import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly AUTH_TOKEN = 'auth_token';

  constructor(private http: HttpClient) {
  }

  public login(email: string, password: string) {
    return this.http.post<string>(environment.apiURL + `/login`, {email, password}).subscribe(res => this.setSession);
  }

  public register(user: UserCreationDto) {
    return this.http.post<any>(environment.apiURL + `/register`, user);
  }

  private setSession(authResult: string) {
    localStorage.setItem(this.AUTH_TOKEN, authResult);
  }

  public getAuthToken() {
    return localStorage.getItem(this.AUTH_TOKEN);
  }

  public logout() {
    localStorage.removeItem("auth_token");
  }
}
