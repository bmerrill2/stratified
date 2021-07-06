import { Component, OnInit, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ContentService } from './../../shared/content.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface Status {
name: string;
}

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})
export class AddContentComponent implements OnInit {
    visible = true;
    selectable = true;
    removable = true;
    addOnBlur = true;
    @ViewChild('chiplist') chiplist: any;
    @ViewChild('resetContentForm') myNgForm: any;
    readonly separatorKeysCodes: number[] = [ENTER, COMMA]; 
    selectedStatusType: string;
    contentForm: FormGroup;
    StatusType: any = ['To-do', 'New', 'Draft', 'Published', 'Needs Review', 'Reviwing', 'Archived'];
 
    ngOnInit() {
        this.contentApi.GetContentList();
        this.submitContentForm();
    }
  
    constructor(
        public fb: FormBuilder,
        private contentApi: ContentService
) { }

/*Reactive Content Form*/
    submitContentForm() {
    this.contentForm = this.fb.group({
        title: ['', [Validators.required]],
        product: ['', [Validators.required]],
        category: ['', [Validators.required]],
        owner: ['', [Validators.required]],
        status: ['', [Validators.required]],
        format: ['', [Validators.required]],
        location:  ['', [Validators.required]],
        link:  ['', [Validators.required]],
        date_created:  ['', [Validators.required]],
        date_modified:  ['', [Validators.required]],
        priority:  ['', [Validators.required]],
        next_audit_date:  ['', [Validators.required]]
    })
}

/* Get Errors */
public handleError = (controlName: string, errorName: string) => {
    return this.contentForm.controls[controlName].hasError(errorName);
}

/* Date Created */
dateCreated(e: any) {
    var convertDate = new Date(e.target.value).toISOString().substring(0,10);
    this.contentForm.get('date_created')!.setValue(convertDate, {
        onlyself: true
        })
}

/* Date Modified */
dateModified(e: any) {
    var convertDate = new Date(e.target.value).toISOString().substring(0,10);
    this.contentForm.get('date_modified')!.setValue(convertDate, {
        onlyself: true
        })
}

 /* Next Audit Date */
nextAuditDate(e: any) {
    var convertDate = new Date(e.target.value).toISOString().substring(0,10);
    this.contentForm.get('next_audit_date')!.setValue(convertDate, {
        onlyself: true
        })
}
/* Reset Form */
resetForm() {
    this.contentForm.reset();
    Object.keys(this.contentForm.controls).forEach(key => {
        this.contentForm.controls[key].setErrors(null)
    });
}

/* Submit Content */
submitContent() {
    if (this.contentForm.valid){
     this.contentApi.AddContent(this.contentForm.value)
        this.resetForm();
    }
}

}
