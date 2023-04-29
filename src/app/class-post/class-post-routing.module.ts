import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassPostComponent } from './class-post.component';

const routes: Routes = [{ path: '', component: ClassPostComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassPostRoutingModule { }
