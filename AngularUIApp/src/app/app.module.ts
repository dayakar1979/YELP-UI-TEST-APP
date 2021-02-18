import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppDataService } from '../services/app.data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule, HttpClientModule, FormsModule
  ],
  providers: [AppDataService],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
