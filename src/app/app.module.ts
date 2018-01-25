import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TourNgBootstrapModule } from 'ngx-tour-ng-bootstrap';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';

const routing = RouterModule.forRoot([]);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing,
    TourNgBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
