import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {

  constructor(auth:AuthService,router:Router) {
    if(!auth.isAuthenticated())
      router.navigate(['/register']);

  }

}
