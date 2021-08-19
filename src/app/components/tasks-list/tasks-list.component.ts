import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';

export interface TasksTable {
    taskName: string;
    contentTitle: string;
    assignedTo: string;
    dueDate: string;
}

const TASKS_DATA:TasksTable[] = [
    {taskName: 'Task 1', contentTitle: 'Article Name 1', assignedTo: 'Dan C', dueDate: '9/1/2021'},
    {taskName: 'Task 2', contentTitle: 'Article Name 2', assignedTo: 'Dan C', dueDate: '9/2/2021'},
    {taskName: 'Task 3', contentTitle: 'Article Name 3', assignedTo: 'Dan C', dueDate: '9/3/2021'},
    {taskName: 'Task 4', contentTitle: 'Article Name 4', assignedTo: 'Dan C', dueDate: '9/4/2021'},
    {taskName: 'Task 5', contentTitle: 'Article Name 5', assignedTo: 'Dan C', dueDate: '9/5/2021'},
    {taskName: 'Task 6', contentTitle: 'Article Name 6', assignedTo: 'Dan C', dueDate: '9/6/2021'},
    {taskName: 'Task 7', contentTitle: 'Article Name 7', assignedTo: 'Dan C', dueDate: '9/7/2021'},
    {taskName: 'Task 8', contentTitle: 'Article Name 8', assignedTo: 'Dan C', dueDate: '9/8/2021'},
    {taskName: 'Task 9', contentTitle: 'Article Name 9', assignedTo: 'Dan C', dueDate: '9/9/2021'},
    {taskName: 'Task 10', contentTitle: 'Article Name 10', assignedTo: 'Dan C', dueDate: '9/10/2021'},
    {taskName: 'Task 11', contentTitle: 'Article Name 11', assignedTo: 'Dan C', dueDate: '9/11/2021'},
    {taskName: 'Task 12', contentTitle: 'Article Name 12', assignedTo: 'Dan C', dueDate: '9/12/2021'},
    {taskName: 'Task 13', contentTitle: 'Article Name 13', assignedTo: 'Dan C', dueDate: '9/13/2021'},
    {taskName: 'Task 14', contentTitle: 'Article Name 14', assignedTo: 'Dan C', dueDate: '9/14/2021'},
    {taskName: 'Task 15', contentTitle: 'Article Name 15', assignedTo: 'Dan C', dueDate: '9/15/2021'},
    {taskName: 'Task 16', contentTitle: 'Article Name 16', assignedTo: 'Dan C', dueDate: '9/16/2021'},
];

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
    
    displayedColumns: string[] = ['select','taskName', 'contentTitle', 'assignedTo', 'dueDate'];
    dataSource = new MatTableDataSource<TasksTable>(TASKS_DATA);
    selection = new SelectionModel<TasksTable>(true, []);
    
    /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: TasksTable): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.taskName + 1}`;
  }
    
  constructor() { }

  ngOnInit(): void {
  }

}
