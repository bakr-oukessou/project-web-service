import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {UserCreationDto} from "../dto/UserCreationDto";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  user: UserCreationDto = {} as UserCreationDto;

  constructor(private auth: AuthService, private router: Router) {
  }

  login() {
    this.auth.login(this.email, this.password).subscribe(res => {
        this.router.navigate(['/dashboard']);
      }
    )
  }

  createAccount() {
    this.auth.register(this.user).subscribe();
  }

}
