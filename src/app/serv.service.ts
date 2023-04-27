import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ServService {

  isAuthenticated:boolean = false;
  private authToken: string | null = null;

  constructor() { }

  login(authToken: string): boolean {
    // Implement your login logic here
    this.authToken = authToken;
    this.isAuthenticated = true;
    return this.isAuthenticated;
  }

  logout(): void {
    // Implement your logout logic here
    this.authToken = null;
    this.isAuthenticated = false;
  }

  izAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}