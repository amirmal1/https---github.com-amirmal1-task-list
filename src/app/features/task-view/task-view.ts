import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NewTask } from '../../models/task.model';




@Component({
  imports: [AsyncPipe],
  selector: 'app-task-view',
  styleUrl: './task-view.css',
  templateUrl: './task-view.html',
})
export class TaskView {
  taskService = inject(TaskService);
 private route = inject(ActivatedRoute);
  id = this.route.snapshot.paramMap.get('id')!;

task$ = this.taskService.getTask$(this.id);



}




