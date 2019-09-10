import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { AboutComponent } from './about/about.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDataService } from './todo-data.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    // Added in Step 3
    AboutComponent,
    TodoListComponent,
    NavbarComponent,
    // Added in Step 4
    AllTasksComponent,
    TodoListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    // Added for Step 5
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  // Added for Step 5
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
