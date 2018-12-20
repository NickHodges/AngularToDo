import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    // Added in Step 3
    NavbarComponent
=======
    // Added in Step 4
    AboutComponent,
    TodoListComponent,
    AllTasksComponent,
    // Added in Step 3
     NavbarComponent,
>>>>>>> Step4
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
