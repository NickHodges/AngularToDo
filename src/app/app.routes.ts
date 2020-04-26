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
import { SorryComponent } from './sorry/sorry.component';
import { AuthGuard } from './utils/auth.guard';
import { CallbackComponent } from './callback/callback.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full'
  },
  {
    path: 'todos',
    component: TodoListComponent,
    canActivate: [AuthGuard],
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
    canActivate: [AuthGuard]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  // The next three paths were added for Step 22
  { path: 'sorry', component: SorryComponent },
  // Added for Step 16
  {
    path: 'lifecyclecontainer',
    component: LifeCycleContainerComponent
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**', // This allows for unaccounted-for routes
    redirectTo: 'not-found'
  }
];
