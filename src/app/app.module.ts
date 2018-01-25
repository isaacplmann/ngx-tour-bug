import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { TourMatMenuModule } from 'ngx-tour-md-menu';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';

const routing = RouterModule.forRoot([]);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    TourMatMenuModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
