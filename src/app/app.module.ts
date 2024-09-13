import { NgModule } from '@angular/core';  //Angular importok
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  //Harmadik fél importok

import { AppRoutingModule } from './app-routing.module';  //Saját importok
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';  



@NgModule({
  declarations: [
    AppComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule

  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
