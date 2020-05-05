import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { AboutComponent } from './about/about.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDataService } from './utils/todo-data.service';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ContactComponent } from './contact/contact.component';
import { PhoneCharactersOnlyDirective } from './utils/app.directives';
import { AboutContentComponent } from './about-content/about-content.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { LifeCycleContainerComponent } from './life-cycle-container/life-cycle-container.component';
import { HighlightOnHoverDirective } from './utils/highlight-on-hover.directive';
import { ngIfNotDirective } from './utils/ngIfNot.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ToDoNotesComponent } from './to-do-notes/to-do-notes.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { GetNameComponent } from './getname/getname.component';
import { StoreModule } from '@ngrx/store';
import { nameReducer } from './utils/name.reducer';
import { ShowNameComponent } from './show-name/show-name.component';
import { NameManagerComponent } from './name-manager/name-manager.component';
import { AuthenticationService } from './utils/authentication.service';
import { SorryComponent } from './sorry/sorry.component';
import { AuthGuard } from './utils/auth.guard';
import { TokenInterceptor } from './utils/auth.interceptor';
import { CallbackComponent } from './callback/callback.component';

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
    SorryComponent,
    CallbackComponent
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
  providers: [TodoDataService, AuthenticationService, AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {}
