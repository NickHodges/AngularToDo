import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NavbarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
