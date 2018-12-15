import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { AppComponent } from './app.component';
=======
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { AboutComponent } from './about/about.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDataService } from './todo-data.service';
>>>>>>> Step5

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
<<<<<<< HEAD
  imports: [BrowserModule],
  providers: [],
=======
  imports: [
    BrowserModule,
    // Added for Step 5
    RouterModule.forRoot(routes),
    HttpModule,
    HttpClientModule
  ],
  // Added for Step 5
  providers: [TodoDataService],
>>>>>>> Step5
  bootstrap: [AppComponent]
})
export class AppModule {}
