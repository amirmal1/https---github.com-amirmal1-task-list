
import { TaskBord } from './features/task-bord/task-bord';
import { TaskCreate } from './features/task-create/task-create';
import { TaskEdit } from './features/task-edit/task-edit';

export const routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full'},
  { path: 'tasks', component: TaskBord},
  { path: 'tasks/new', component: TaskCreate},
  { path: 'tasks/:id/edit', component:TaskEdit},
  {path: '**', redirectTo: 'tasks'}

];
