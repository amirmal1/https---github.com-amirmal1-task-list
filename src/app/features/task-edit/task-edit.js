import { inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { TaskService } from '../../services/task';




@Component({
  imports: [RouterLink],
  selector: 'app-task-edit',
  styleUrl: './task-edit.css',
  templateUrl: './task-edit.html',
})
export class TaskEdit {constructor() { TaskEdit.prototype.__init.call(this);TaskEdit.prototype.__init2.call(this);TaskEdit.prototype.__init3.call(this);TaskEdit.prototype.__init4.call(this);TaskEdit.prototype.__init5.call(this);TaskEdit.prototype.__init6.call(this);TaskEdit.prototype.__init7.call(this);TaskEdit.prototype.__init8.call(this); }
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

update() {
  this.taskService.updateTask;
}
onSubmit() {
  this.taskService.updateTask;
}
__init8() {this.task= toSignal(this.tasks$)}
}



