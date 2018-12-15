import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
<<<<<<< HEAD
=======
    // Added in Step 3
    NavbarComponent
>>>>>>> Step3
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
