// This file was added in Step 4
import { AboutComponent } from './about/about.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { Routes } from '@angular/router';

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
    path: '**',
    component: TodoListComponent
  }
];
