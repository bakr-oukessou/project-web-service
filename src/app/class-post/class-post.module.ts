import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClassPostRoutingModule } from './class-post-routing.module';
import { ClassPostComponent } from './class-post.component';


@NgModule({
  declarations: [
    ClassPostComponent
  ],
  imports: [
    CommonModule,
    ClassPostRoutingModule,
    FormsModule
  ]
})
export class ClassPostModule { }
