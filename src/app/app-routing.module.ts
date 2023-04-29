import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {NotFoundComponent} from "./not-found/not-found.component";
import {BaseComponent} from "./components/base/base.component";

const routes: Routes = [
  {
    path: '', component: BaseComponent,
    children: [
      {path: 'classroom', loadChildren: () => import('./classroom/classroom.module').then(m => m.ClassroomModule)},
      {path: 'user-profile', component: UserProfileComponent,},
      {path: 'new-user', loadChildren: () => import('./new-user/new-user.module').then(m => m.NewUserModule)},
      {path: 'class-post', loadChildren: () => import('./class-post/class-post.module').then(m => m.ClassPostModule)},
      {path: '', redirectTo: 'classroom', pathMatch: "full"}
    ]
  },
  {path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)},

  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

// canActivate: [AuthGuard]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
