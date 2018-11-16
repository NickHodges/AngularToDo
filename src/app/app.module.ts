import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { AboutComponent } from './about/about.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    // Added in Step 3
    AboutComponent,
    TodoListComponent,
    NavbarComponent,
    // Added in Step 4
    AllTasksComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
