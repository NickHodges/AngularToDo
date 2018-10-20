import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TodoListComponent,
    NavbarComponent,
    AllTasksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    HttpClientModule
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
