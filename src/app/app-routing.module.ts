<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth.guard';
import { ClassComponent } from './class/class.component';

const routes: Routes = [
 { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
 { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
 { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
 { path: 'user-profile', component: UserProfileComponent,  },
 { path: 'new-user', loadChildren: () => import('./new-user/new-user.module').then(m => m.NewUserModule) },
 { path: 'class', component:ClassComponent }
=======
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserProfileComponent} from './user-profile/user-profile.component';

const routes: Routes = [
  {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)},
  {path: 'user-profile', component: UserProfileComponent,},
  {path: 'new-user', loadChildren: () => import('./new-user/new-user.module').then(m => m.NewUserModule)},
  {path: '', redirectTo: 'register', pathMatch: 'full'},
  {path: '**', redirectTo: 'register'} //TODO: 404 page
>>>>>>> 304591ab2503cae42b679afe57dcb5e5f9a2e768
];

// canActivate: [AuthGuard]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
