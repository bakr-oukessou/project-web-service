import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClassroomComponent} from "./classroom.component";
import {NewClassroomComponent} from "./new-classroom/new-classroom.component";
import {ClassroomDetailsComponent} from "./classroom-details/classroom-details.component";

const routes: Routes = [
  {path: 'new', component: NewClassroomComponent},
  {path: 'details/:id', component: ClassroomDetailsComponent},
  {path: '', component: ClassroomComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassroomRoutingModule {
}
