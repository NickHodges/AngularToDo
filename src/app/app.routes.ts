// This file was added in Step 4
import { AboutComponent } from './about/about.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: TodoListComponent
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
    path: 'not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**', // This allows for unaccounted-for routes
    redirectTo: 'not-found'
  }
];
