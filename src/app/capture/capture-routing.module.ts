import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { CaptureComponent } from './capture.component';

const routes: Route[] = [
  {
    path: '',
    component: CaptureComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class CaptureRoutingModule {}