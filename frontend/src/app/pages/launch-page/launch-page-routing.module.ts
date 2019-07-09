import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LaunchPageComponent} from './launch-page.component';

const routes: Routes = [
  {
    path: '',
    component: LaunchPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaunchPageRoutingModule { }
