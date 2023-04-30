import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClassroomComponent} from "./classroom.component";
import {NewClassroomComponent} from "./new-classroom/new-classroom.component";
import {ClassroomDetailsComponent} from "./classroom-details/classroom-details.component";
import {JoinClassroomComponent} from "./join-classroom/join-classroom.component";
import {ClassroomPostsComponent} from "./classroom-details/classroom-posts/classroom-posts.component";
import {ClassroomUsersComponent} from "./classroom-details/classroom-users/classroom-users.component";
import {InviteUserComponent} from "./classroom-details/invite-user/invite-user.component";

const routes: Routes = [
  {path: '', component: ClassroomComponent, pathMatch: "full"},
  {path: 'new', component: NewClassroomComponent},
  {path: 'join', component: JoinClassroomComponent},
  {
    path: 'details', component: ClassroomDetailsComponent,
    children: [
      {path: 'posts/:id', component: ClassroomPostsComponent},
      {path: 'users/:id', component: ClassroomUsersComponent},
      {path: 'invite/:id', component: InviteUserComponent},
      {path: ':id', redirectTo: 'posts/:id', pathMatch: "full"}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassroomRoutingModule {
}
