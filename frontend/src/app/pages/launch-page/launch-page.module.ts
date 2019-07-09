import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchPageRoutingModule } from './launch-page-routing.module';
import { LaunchPageComponent } from './launch-page.component';
import { LaunchHistoryComponent } from './launch-history/launch-history.component';

@NgModule({
  declarations: [LaunchPageComponent, LaunchHistoryComponent],
  imports: [
    CommonModule,
    LaunchPageRoutingModule
  ]
})
export class LaunchPageModule { }
