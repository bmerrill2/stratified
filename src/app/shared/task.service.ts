import { Injectable } from '@angular/core';
import { Task } from './task';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
    tasksRef: AngularFireList<any>;
    taskRef: AngularFireObject<any>;

constructor(private db: AngularFireDatabase) { }

/* Create Task */
AddTask(task: Task) {
    this.tasksRef.push({
        task_name: task.task_name,
        userId: task.userId,
        stakeholders: task.stakeholders,
        created_date: task.created_date,
        task_description: task.task_description,
        due_date: task.due_date,
        status: task.status
        })
.catch(error => {
    this.errorMgmt(error);
})
}

/* Get Tasks */
GetTasks(id: string) {
    this.taskRef = this.db.object('tasks-list/' + id);
    return this.taskRef;
}

/*Get Tasks List */
GetTasksList() {
    this.tasksRef = this.db.list('tasks-list');
    return this. tasksRef;
}

/* Update Tasks */
UpdateTask(id: string, task: Task) {
    this.taskRef.update({
        task_name: task.task_name,
        userId: task.userId,
        stakeholders: task.stakeholders,
        created_date: task.created_date,
        task_description: task.task_description,
        due_date: task.due_date,
        status: task.status
        })
        .catch(error => {
    this.errorMgmt(error);
        })
}

/* Delete Task */
DeleteTask(id: string) {
    this.taskRef = this.db.object('tasks-list/' + id);
    this.taskRef.remove()
        .catch(error => {
    this.errorMgmt(error);
        })
}

//Error Management
private errorMgmt(error: any) {
    console.log(error)
}


}