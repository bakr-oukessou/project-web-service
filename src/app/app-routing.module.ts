import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./not-found/not-found.component";
import {BaseComponent} from "./components/base/base.component";

const routes: Routes = [
  {
    path: '', component: BaseComponent,
    children: [
      {path: 'classroom', loadChildren: () => import('./classroom/classroom.module').then(m => m.ClassroomModule)},
      {path: '', redirectTo: 'classroom', pathMatch: "full"}
    ]
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule),
    pathMatch: "full"
  },
  {path: '**', component: NotFoundComponent}
];

// canActivate: [AuthGuard]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
