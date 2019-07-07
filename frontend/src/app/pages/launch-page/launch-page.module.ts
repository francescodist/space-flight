import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchPageRoutingModule } from './launch-page-routing.module';
import { LaunchPageComponent } from './launch-page.component';

@NgModule({
  declarations: [LaunchPageComponent],
  imports: [
    CommonModule,
    LaunchPageRoutingModule
  ]
})
export class LaunchPageModule { }
