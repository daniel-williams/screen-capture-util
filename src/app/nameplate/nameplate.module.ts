import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Nameplate } from './nameplate.component';
import { NameplateRoutingModule } from './nameplate-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NameplateRoutingModule,
  ],
  declarations: [
    Nameplate
  ]
})
export class NameplateModule {}
