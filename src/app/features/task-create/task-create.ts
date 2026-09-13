import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NewTask } from '../../models/task.model';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { TaskService } from '../../services/task';
import { IS_ASYNC_VALIDATION_RESOURCE } from '@angular/forms/signals';
import { AsyncPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';


@Component({
  imports: [AsyncPipe, ReactiveFormsModule, RouterLink],
  selector: 'app-task-create',
  styleUrl: './task-create.css',
  templateUrl: './task-create.html',
})
export class TaskCreate {
  private fb = inject(FormBuilder);
  taskService = inject(TaskService);
  private router = inject(Router);


  editingId: string = '';
  name = new FormControl('');
  taskForm = new FormGroup({
    title: new FormControl(''),
    details: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
    id: new FormControl('', Validators.required)


  })
tasks$ = this.taskService.gettasks$();
add() {
  this.taskService.addTask
}
onSubmit() {

  if(!confirm('Add this task?')){
    return;

  }
  this.taskService.addTask(this.taskForm.value as NewTask);

}

onReset() {
   this.taskForm.reset();
}
onUpdate() {

  const {id, ...patch } = this.taskForm.value;
  this.taskService.updateTask(id!, patch as Partial<Omit<NewTask, 'id'>>);
}

Update(tasks: NewTask) {
    this.taskForm.patchValue({
    id: tasks.id,
    title: tasks.title,
    details: tasks.details,
    color: tasks.color

    })

  }

}


