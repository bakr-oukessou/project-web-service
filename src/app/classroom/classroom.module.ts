import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClassroomRoutingModule} from './classroom-routing.module';
import {ClassroomComponent} from "./classroom.component";
import {NewClassroomComponent} from './new-classroom/new-classroom.component';
import {FormsModule} from "@angular/forms";
import {ClassroomDetailsComponent} from './classroom-details/classroom-details.component';
import {ClassroomPostsComponent} from './classroom-details/classroom-posts/classroom-posts.component';
import {ClassroomUsersComponent} from './classroom-details/classroom-users/classroom-users.component';
import {JoinClassroomComponent} from './join-classroom/join-classroom.component';
import { InviteUserComponent } from './classroom-details/invite-user/invite-user.component';


@NgModule({
  declarations: [
    ClassroomComponent,
    NewClassroomComponent,
    ClassroomDetailsComponent,
    ClassroomPostsComponent,
    ClassroomUsersComponent,
    JoinClassroomComponent,
    InviteUserComponent
  ],
  imports: [
    CommonModule,
    ClassroomRoutingModule,
    FormsModule
  ]
})
export class ClassroomModule {
}
