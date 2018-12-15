import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { AppComponent } from './app.component';
=======
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { AboutComponent } from './about/about.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDataService } from './todo-data.service';
<<<<<<< HEAD
>>>>>>> Step5
=======
import { AddTodoComponent } from './add-todo/add-todo.component';
>>>>>>> Step8

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
<<<<<<< HEAD
    AllTasksComponent,
    // Added in Step 3
     NavbarComponent,
>>>>>>> Step4
=======
    NavbarComponent,
    AllTasksComponent,
    // Added in Step 8
    AddTodoComponent,
    // Added in Step 4
    AllTasksComponent
>>>>>>> Step8
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
    HttpClientModule,
    FormsModule
  ],
  // Added for Step 5
  providers: [TodoDataService],
>>>>>>> Step5
  bootstrap: [AppComponent]
})
export class AppModule {}
