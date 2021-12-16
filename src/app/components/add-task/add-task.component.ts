import { Component, OnInit, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { TaskService } from './../../shared/task.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface Status {
name: string;
}
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent implements OnInit {
    visible = true;
    selectable = true;
    removable = true;
    addOnBlur = true;
    @ViewChild('chiplist') chiplist: any;
    @ViewChild('resetContentForm') myNgForm: any;
    readonly separatorKeysCodes: number[] = [ENTER, COMMA]; 
    taskForm: FormGroup;
 
    ngOnInit() {
        this.taskApi.GetTasksList();
        this.submitTaskForm();
    }
  
    constructor(
        public fb: FormBuilder,
        private taskApi: TaskService
) { }

/*Reactive Content Form*/
    submitTaskForm() {
    this.taskForm = this.fb.group({
        task_name: ['', [Validators.required]],
        task_description: ['', [Validators.required]],
        userID: ['', [Validators.required]],
        created_date: ['', [Validators.required]],
        updated_date: ['', [Validators.required]],
        status: ['', [Validators.required]],
        stakeholders: ['', [Validators.required]]
    })
}

/* Get Errors */
public handleError = (controlName: string, errorName: string) => {
    return this.taskForm.controls[controlName].hasError(errorName);
}

/* Date Created */
createdDate(e: any) {
    var convertDate = new Date(e.target.value).toISOString().substring(0,10);
    this.taskForm.get('created_date')!.setValue(convertDate, {
        onlyself: true
        })
}

/* Date Modified */
modifiedDate(e: any) {
    var convertDate = new Date(e.target.value).toISOString().substring(0,10);
    this.taskForm.get('updated_date')!.setValue(convertDate, {
        onlyself: true
        })
}

 
/* Reset Form */
resetForm() {
    this.taskForm.reset();
    Object.keys(this.taskForm.controls).forEach(key => {
        this.taskForm.controls[key].setErrors(null)
    });
}

/* Submit Content */
submitTask() {
    if (this.taskForm.valid){
     this.taskApi.AddTask(this.taskForm.value)
        this.resetForm();
    }
}

}