import { Task } from './../../shared/task';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { AgGridModule } from 'ag-grid-angular';
import { TaskService } from './../../shared/task.service';

export interface TasksTable {
    taskName: string;
    contentTitle: string;
    assignedTo: string;
    dueDate: string;
}

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
    
    dataSource: MatTableDataSource<Task>;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    TaskData: any = [];
    displayedColumns: any[] = [
        {headerName: 'Task Name', field: 'task_name', sortable: true, filter: true },
        {headerName: 'User ID', field: 'userId', sortable: true, filter: true},
        {field: 'stakeholders', sortable: true, filter: true},
        {headerName: 'Created Date', field: 'task_created_date', sortable: true, filter: 'agDateColumnFilter'},
        {headerName: 'Description', field: 'task_description', sortable: true, filter: true},
        {headerName: 'Due Date', field: 'due_date', sortable: true, filter: 'agDateColumnFilter'},
        {headerName: 'Status', field: 'status', sortable: true, filter: true},
    ];
    
    constructor(private taskApi: TaskService) {
        
    this.taskApi.GetTasksList().snapshotChanges().subscribe(tasks => {
    tasks.forEach(item => {
let a: any = item.payload.toJSON();
a['$key'] = item.key;
    this.TaskData.push(a as Task)
        })
        /* Data Table */
    this.dataSource = new MatTableDataSource(this.TaskData);
        /* Pagination */
    setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        }, 0);
        })
}

deleteTask(index: number, e: any) {
if(window.confirm('Are You Sure?')){
    const data = this.dataSource.data;
    data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
    this.dataSource.data = data;
    this.taskApi.DeleteTask(e.$key)
}
}

  ngOnInit(): void {};

}
