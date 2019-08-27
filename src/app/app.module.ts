import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
// Added in Step 4
import { AboutComponent } from './about/about.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    // Added in Step 3
    NavbarComponent,
    // Added in Step 4
    AboutComponent,
    AllTasksComponent,
    TodoListComponent,
    PageNotFoundComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
