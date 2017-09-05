import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NameplateModule } from './nameplate';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => NameplateModule,
  },
  {
    path: 'lazy',
    loadChildren: './lazy/lazy.module#LazyModule',
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }