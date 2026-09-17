 function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }import { toSignal } from '@angular/core/rxjs-interop';
import { inject, computed, effect} from '@angular/core';
import { TaskService } from '../../services/task';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';





@Component({
  imports: [AsyncPipe],
  selector: 'app-task-view',
  styleUrl: './task-view.css',
  templateUrl: './task-view.html',
})
export class TaskView {
  __init() {this.taskService = inject(TaskService)}
  __init2() {this.route = inject(ActivatedRoute)}
  __init3() {this.id = this.route.snapshot.paramMap.get('id')}

   __init4() {this.params = toSignal(this.route.paramMap)}
  __init5() {this.taskId = computed(() => _nullishCoalesce(_optionalChain([this, 'access', _5 => _5.params, 'call', _6 => _6(), 'optionalAccess', _7 => _7.get, 'call', _8 => _8('id')]), () => ( '')))}

  constructor() {;TaskView.prototype.__init.call(this);TaskView.prototype.__init2.call(this);TaskView.prototype.__init3.call(this);TaskView.prototype.__init4.call(this);TaskView.prototype.__init5.call(this);
    effect(() => console.log('EDITING id:', this.taskId()));   // <-- the TEST




  }
}






