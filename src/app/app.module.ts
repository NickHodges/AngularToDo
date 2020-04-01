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
import { ToDoNotesComponent } from './to-do-notes/to-do-notes.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { GetNameComponent } from './getname/getname.component';
import { StoreModule } from '@ngrx/store';
import { nameReducer } from './name.reducer';
import { ShowNameComponent } from './show-name/show-name.component';
import { NameManagerComponent } from './name-manager/name-manager.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

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
    ToDoNotesComponent,
    TodoEditComponent,
    // Added for Step 21
    GetNameComponent,
    ShowNameComponent,
    NameManagerComponent,
    // Added for Step 22
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    // Added for Step 5
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ScullyLibModule,
    // Added for Step 21
    StoreModule.forRoot({ name: nameReducer })
  ],
  // Added for Step 5
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
