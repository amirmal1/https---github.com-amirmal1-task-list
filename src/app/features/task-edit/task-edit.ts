import { Component, inject, computed, effect } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { NewTask } from '../../models/task.model';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { TaskService } from '../../services/task';
import { IS_ASYNC_VALIDATION_RESOURCE } from '@angular/forms/signals';
import { AsyncPipe } from '@angular/common';
import { stringConcat } from 'firebase/firestore/pipelines';





@Component({
  imports: [RouterLink, ReactiveFormsModule, AsyncPipe],
  selector: 'app-task-edit',
  styleUrl: './task-edit.css',
  templateUrl: './task-edit.html',
})
export class TaskEdit {
private fb = inject(FormBuilder);
  taskService = inject(TaskService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  private params = toSignal(this.route.paramMap);
  taskId = computed(() => this.params()?.get('id') ?? '');

  constructor() {
    effect(() => console.log('EDITING id:', this.taskId()));   // <-- the TEST
  }



  editingId: string = '';
  name = new FormControl('');
  taskForm = new FormGroup({
    title: new FormControl(''),
    details: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
    id: new FormControl('', Validators.required)
})




tasks$ = this.taskService.gettasks$();

update() {
  this.taskService.updateTask;
}
onSubmit() {
  this.taskService.updateTask;
}
task= toSignal(this.tasks$);


onUpdate()
 {
  if (this.taskForm.invalid) {
    alert('Please push update button first than change data and submit update.');
    return;
  }
  if (!confirm('Update this task?')) {
    return;
  }
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




