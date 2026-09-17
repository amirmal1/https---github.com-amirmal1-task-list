import { inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { FormBuilder, FormControl, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { TaskService } from '../../services/task';

import { AsyncPipe } from '@angular/common';



@Component({
  imports: [AsyncPipe, ReactiveFormsModule, RouterLink],
  selector: 'app-task-create',
  styleUrl: './task-create.css',
  templateUrl: './task-create.html',
})
export class TaskCreate {constructor() { TaskCreate.prototype.__init.call(this);TaskCreate.prototype.__init2.call(this);TaskCreate.prototype.__init3.call(this);TaskCreate.prototype.__init4.call(this);TaskCreate.prototype.__init5.call(this);TaskCreate.prototype.__init6.call(this);TaskCreate.prototype.__init7.call(this); }
   __init() {this.fb = inject(FormBuilder)}
  __init2() {this.taskService = inject(TaskService)}
   __init3() {this.router = inject(Router)}


  __init4() {this.editingId = ''}
  __init5() {this.name = new FormControl('')}
  __init6() {this.taskForm = new FormGroup({
    title: new FormControl(''),
    details: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
    id: new FormControl('', Validators.required)


  })}
__init7() {this.tasks$ = this.taskService.gettasks$()}
add() {
  this.taskService.addTask
}
onSubmit() {

  if(!confirm('Add this task?')){
    return;

  }
  this.taskService.addTask(this.taskForm.value );

}

onReset() {
   this.taskForm.reset();
}
onUpdate() {

  const {id, ...patch } = this.taskForm.value;
  this.taskService.updateTask(id, patch );
}

Update(tasks) {
    this.taskForm.patchValue({
    id: tasks.id,
    title: tasks.title,
    details: tasks.details,
    color: tasks.color,
    createdAt: tasks.createdAt

    })

  }

}


