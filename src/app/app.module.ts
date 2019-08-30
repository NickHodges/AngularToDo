import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { AboutComponent } from './about/about.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDataService } from './todo-data.service';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    // Added in Step 3
    AboutComponent,
    TodoListComponent,
    NavbarComponent,
    AllTasksComponent,
    // Added in Step 8
    AddTodoComponent,
    // Added in Step 4
    AllTasksComponent,
    // Added in Step 4
    AllTasksComponent,
    TodoListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    // Added for Step 5
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  // Added for Step 5
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
