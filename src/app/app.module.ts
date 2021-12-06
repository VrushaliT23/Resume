import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
// import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
// import { ProfileComponent } from './profile/profile.component';

const routes: Routes = []

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule,RouterModule.forRoot(routes) ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  exports: [RouterModule],
})
export class AppModule { }

