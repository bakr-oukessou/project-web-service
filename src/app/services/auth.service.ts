import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {UserCreationDto} from "../dto/UserCreationDto";
import {map, Observable} from "rxjs";
import {AuthDto} from "../dto/AuthDto";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly AUTH_TOKEN = 'auth_token';

  constructor(private http: HttpClient) {
  }

  public login(username: string, password: string): Observable<AuthDto> {
    return this.http.post<AuthDto>(environment.apiURL + `/login`, {username, password})
      .pipe(map(result => {
          this.setSession(result.token)
          return result;
        }
      ));
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
    localStorage.removeItem(this.AUTH_TOKEN);
  }

  public isAuthenticated(): boolean {
    return localStorage.getItem(this.AUTH_TOKEN) != null;
  }
}
