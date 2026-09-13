import { Routes } from '@angular/router';
import { TaskBord } from './features/task-bord/task-bord';
import { TaskCreate } from './features/task-create/task-create';
import { TaskEdit } from './features/task-edit/task-edit';
import { TaskView } from './features/task-view/task-view';

export const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full'},
  { path: 'tasks', component: TaskBord},
  { path: 'tasks/new', component: TaskCreate},
  { path: 'tasks/:id/edit', component:TaskEdit},
  {path: '**', redirectTo: 'tasks'},
  {path:'tasks/:id',component:TaskView}

];
