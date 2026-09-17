
import { inject, } from '@angular/core';


import {

    collection,
    addDoc,
    collectionData,
    doc,
    updateDoc,
    deleteDoc,
    docData
} from '@angular/fire/firestore';
import {toSignal} from '@angular/core/rxjs-interop';


import { Firestore } from '@angular/fire/firestore';




@Service()
export class TaskService {
   __init() {this.firestore = inject(Firestore)}
   __init2() {this.tasksCol = collection(this.firestore, 'tasks')}

  constructor() {;TaskService.prototype.__init.call(this);TaskService.prototype.__init2.call(this);TaskService.prototype.__init3.call(this);
    console.log('TaskService is alive');

  }
  //Read
gettasks$() {
      return collectionData(this.tasksCol, {idField: 'id'}) ;
    }
__init3() {this.gettasksSignal = toSignal(this.gettasks$(), {initialValue: [] })}


//Create
addTask(NewTask) {

  return addDoc(this.tasksCol, {...NewTask, createdAt: Date.now()});
}

//Delete
deleteTask(id) {
  return deleteDoc(doc(this.firestore, 'tasks', id));
}

//Update
updateTask(id, patch) {
  return updateDoc(doc(this.firestore, 'tasks', id), patch);
}
getTask$(id) {
  return docData(doc(this.firestore, 'tasks', id), { idField: 'id' }) ;
}

}
