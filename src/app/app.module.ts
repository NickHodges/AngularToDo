import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    // Changed in Step 3
    NavbarComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
