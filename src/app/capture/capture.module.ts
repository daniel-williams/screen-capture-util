import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaptureRoutingModule } from './capture-routing.module';

import { CaptureComponent } from './capture.component';

@NgModule({
  imports: [
    CommonModule,
    CaptureRoutingModule,
  ],
  declarations: [
    CaptureComponent,
  ]
})
export class CaptureModule {}