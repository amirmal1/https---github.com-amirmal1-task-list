import { inject, computed } from '@angular/core';
import { TaskService } from '../../services/task';
import { AsyncPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';




@Component({
  standalone: true,
  imports: [AsyncPipe, ReactiveFormsModule],
  selector: 'app-task-bord',
  styleUrl: './task-bord.css',
  templateUrl: './task-bord.html',
})

export class TaskBord {constructor() { TaskBord.prototype.__init.call(this);TaskBord.prototype.__init2.call(this);TaskBord.prototype.__init3.call(this);TaskBord.prototype.__init4.call(this); }
  __init() {this.taskService = inject(TaskService)}
  __init2() {this.tasks$ = this.taskService.gettasks$()}
  gettasks$() {
    this.taskService.gettasks$();
  }
  deleteTask(id) {
    this.taskService.deleteTask(id);
  }
  __init3() {this.totalCount = computed(() => this.tasks$().length)}

  __init4() {this.currentTask = null}

  onClick(tasks) {
    this.currentTask = tasks;
  }

  
}

