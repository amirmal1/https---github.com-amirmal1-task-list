import { NewTask } from './../models/task.model';
import { Service, inject, Injectable, Signal, } from '@angular/core';


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

import id from '@angular/common/locales/id';
import { Firestore } from '@angular/fire/firestore';




@Service()
export class TaskService {
  private firestore = inject(Firestore);
  private tasksCol = collection(this.firestore, 'tasks');

  constructor() {
    console.log('TaskService is alive');

  }
  //Read
gettasks$() {
      return collectionData(this.tasksCol, {idField: 'id'}) as any;
    }
gettasksSignal = toSignal(this.gettasks$(), {initialValue: [] as NewTask[]});


//Create
addTask(NewTask: Omit<NewTask, 'id' | 'createdAt'>) {

  return addDoc(this.tasksCol, {...NewTask, createdAt: Date.now()});
}

//Delete
deleteTask(id:string) {
  return deleteDoc(doc(this.firestore, 'tasks', id));
}

//Update
updateTask(id: string, patch: Partial<Omit<NewTask, 'id'>>) {
  return updateDoc(doc(this.firestore, 'tasks', id), patch);
}
getTask$(id: string) {
  return docData(doc(this.firestore, 'tasks', id), { idField: 'id' }) as any;
}

}
