import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClassroomRoutingModule} from './classroom-routing.module';
import {ClassroomComponent} from "./classroom.component";
import { NewClassroomComponent } from './new-classroom/new-classroom.component';
import {FormsModule} from "@angular/forms";
import { ClassroomDetailsComponent } from './classroom-details/classroom-details.component';
import { ClassroomPostsComponent } from './classroom-details/classroom-posts/classroom-posts.component';
import { ClassroomUsersComponent } from './classroom-details/classroom-users/classroom-users.component';
import { NewPostComponent } from './classroom-details/classroom-posts/new-post/new-post.component';


@NgModule({
  declarations: [
    ClassroomComponent,
    NewClassroomComponent,
    ClassroomDetailsComponent,
    ClassroomPostsComponent,
    ClassroomUsersComponent,
    NewPostComponent
  ],
  imports: [
    CommonModule,
    ClassroomRoutingModule,
    FormsModule
  ]
})
export class ClassroomModule {
}
