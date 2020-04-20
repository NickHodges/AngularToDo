// This file was added in Step 4
import { AboutComponent } from './about/about.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { LifeCycleContainerComponent } from './life-cycle-container/life-cycle-container.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ToDoNotesComponent } from './to-do-notes/to-do-notes.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SorryComponent } from './sorry/sorry.component';
import { AuthGuardService } from './utils/auth.guard';
import { LogoutGuard } from './utils/logout.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full'
  },
  {
    path: 'todos',
    component: TodoListComponent,
    canActivate: [AuthGuardService, LogoutGuard],
    // children paths added for Step 19
    children: [
      {
        path: ':id',
        component: ToDoNotesComponent
      },
      // Added for Step 20
      { path: ':id/edit', component: TodoEditComponent }
    ]
  },
  {
    path: 'all-tasks',
    component: AllTasksComponent,
    canActivate: [AuthGuardService, LogoutGuard]
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [LogoutGuard]
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [LogoutGuard]
  },
  // The next three paths were added for Step 22
  {
    path: 'register',
    component: RegisterComponent
  },
  { path: 'login', component: LoginComponent },
  { path: 'sorry', component: SorryComponent },
  // Added for Step 16
  {
    path: 'lifecyclecontainer',
    component: LifeCycleContainerComponent,
    canActivate: [LogoutGuard]
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent,
    canActivate: [LogoutGuard]
  },
  {
    path: '**', // This allows for unaccounted-for routes
    redirectTo: 'not-found'
  }
];
