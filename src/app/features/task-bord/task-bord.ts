import { Component, inject, computed } from '@angular/core';
import { TaskService } from '../../services/task';
import { AsyncPipe, DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NewTask } from '../../models/task.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { TaskEdit } from '../task-edit/task-edit';
import { RouterLink } from '@angular/router';
import { TaskCreate} from '../task-create/task-create';
import { TaskView } from '../task-view/task-view';







@Component({
  standalone: true,
  imports: [AsyncPipe, ReactiveFormsModule, RouterLink, DatePipe,],
  selector: 'app-task-bord',
  styleUrl: './task-bord.css',
  templateUrl: './task-bord.html',
})

export class TaskBord {
  taskService = inject(TaskService)
  tasks$ = this.taskService.gettasks$();
  gettasks$() {
    this.taskService.gettasks$();
  }
  deleteTask(id:string) {
    if (!confirm('Delete this task')) {
      return;
    }
    this.taskService.deleteTask(id);
  }
  totalCount = computed(() => this.tasks$().length);

  currentTask: NewTask | null = null;

  onClick(tasks:NewTask) {
    this.currentTask = tasks;
  }



}

