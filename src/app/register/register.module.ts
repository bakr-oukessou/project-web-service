import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RegisterRoutingModule} from './register-routing.module';
import {RegisterComponent} from './register.component';
import {FormsModule} from "@angular/forms";
// import {FontAwesomeModule} from '@fontawesome/angular-fontawesome';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    // FontAwesomeModule
  ]
})
export class RegisterModule {
}
