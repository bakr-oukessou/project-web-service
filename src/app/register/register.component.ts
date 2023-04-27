import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string | undefined;
  password: string | undefined;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http.post('/api/login', { username: this.username, password: this.password })
      .subscribe(
        (response: any) => {
          // Login successful
          localStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          // Login failed
          console.error(error);
          alert('Login failed. Please try again.');
        }
      );
  }
}
