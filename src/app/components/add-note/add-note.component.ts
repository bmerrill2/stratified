import { Component, OnInit, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { NoteService } from './../../shared/note.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface Status {
name: string;
}

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
    visible = true;
    selectable = true;
    removable = true;
    addOnBlur = true;
    @ViewChild('chiplist') chiplist: any;
    @ViewChild('resetContentForm') myNgForm: any;
    readonly separatorKeysCodes: number[] = [ENTER, COMMA]; 
    noteForm: FormGroup;
 
    ngOnInit() {
        this.noteApi.GetNotesList();
        this.submitNoteForm();
    }
  
    constructor(
        public fb: FormBuilder,
        private noteApi: NoteService
) { }

/*Reactive Content Form*/
    submitNoteForm() {
    this.noteForm = this.fb.group({
        note_title: ['', [Validators.required]],
        note_content: ['', [Validators.required]],
        userID: ['', [Validators.required]],
        created_date: ['', [Validators.required]],
        updated_date: ['', [Validators.required]],
        description: ['', [Validators.required]]
    })
}

/* Get Errors */
public handleError = (controlName: string, errorName: string) => {
    return this.noteForm.controls[controlName].hasError(errorName);
}

/* Date Created */
createdDate(e: any) {
    var convertDate = new Date(e.target.value).toISOString().substring(0,10);
    this.noteForm.get('created_date')!.setValue(convertDate, {
        onlyself: true
        })
}

/* Date Modified */
modifiedDate(e: any) {
    var convertDate = new Date(e.target.value).toISOString().substring(0,10);
    this.noteForm.get('updated_date')!.setValue(convertDate, {
        onlyself: true
        })
}

 
/* Reset Form */
resetForm() {
    this.noteForm.reset();
    Object.keys(this.noteForm.controls).forEach(key => {
        this.noteForm.controls[key].setErrors(null)
    });
}

/* Submit Content */
submitNote() {
    if (this.noteForm.valid){
     this.noteApi.AddNote(this.noteForm.value)
        this.resetForm();
    }
}

}
