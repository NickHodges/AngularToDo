import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { AboutComponent } from './about/about.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDataService } from './todo-data.service';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ContactComponent } from './contact/contact.component';
import { PhoneCharactersOnlyDirective } from './app.directives';
import { AboutContentComponent } from './about-content/about-content.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { LifeCycleContainerComponent } from './life-cycle-container/life-cycle-container.component';
import { HighlightOnHoverDirective } from './highlight-on-hover.directive';
import { ngIfNotDirective } from './ngIfNot.directive';
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
    // Added for Step 13
    ContactComponent,
    // Added in Step 4
    AllTasksComponent,
    TodoListComponent,
    PageNotFoundComponent,
    ContactComponent,
    // Added for Step 14
    PhoneCharactersOnlyDirective,
    AboutContentComponent,
    // Two components below added for Step 16
    LifeCycleComponent,
    LifeCycleContainerComponent,
    HighlightOnHoverDirective,
    ngIfNotDirective,
  ],
  imports: [
    BrowserModule,
    // Added for Step 5
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  // Added for Step 5
  providers: [TodoDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
