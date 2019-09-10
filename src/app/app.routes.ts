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

export const routes: Routes = [
  {
    path: '',
    component: TodoListComponent
  },
  {
    path: 'todos',
    component: TodoListComponent,
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
    component: AllTasksComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  // Added for Step 16
  {
    path: 'lifecyclecontainer',
    component: LifeCycleContainerComponent
  },
  {
    path: '**',
    component: TodoListComponent
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
