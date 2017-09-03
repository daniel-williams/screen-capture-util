import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';

import { App } from './app.component';
import { SomeChild } from './someChild/some-child.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
  ],
  declarations: [
    App,
    SomeChild,
  ],
  providers: [

  ],
  exports: [

  ],
  bootstrap: [
    App,
  ]
})
export class AppModule { }
