import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { App } from './app.component';
import { SiteNav } from './site-nav';
import { SiteStyles } from './site-styles';


@NgModule({
  bootstrap: [App],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,

    AppRoutingModule,
  ],
  declarations: [
    App,
    SiteNav,
    SiteStyles,
  ],
  providers: []
})
export class AppModule { }
