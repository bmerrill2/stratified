import { Injectable } from '@angular/core';
import { Note } from './note';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
    notesRef: AngularFireList<any>;
    noteRef: AngularFireObject<any>;

constructor(private db: AngularFireDatabase) { }

/* Create Note */
AddNote(note: Note) {
    this.notesRef.push({
        note_title: note.note_title,
        note_content: note.note_content,
        userID: note.userID,
        created_date: note.created_date,
        updated_date: note.updated_date,
        description: note.description
        })
.catch(error => {
    this.errorMgmt(error);
})
}

/* Get Notes */
GetNotes(id: string) {
    this.noteRef = this.db.object('notes-list/' + id);
    return this.noteRef;
}

/*Get Notes List */
GetNotesList() {
    this.notesRef = this.db.list('notes-list');
    return this. notesRef;
}

/* Update Note */
UpdateNote(id: string, note: Note) {
    this.noteRef.update({
        note_title: note.note_title,
        note_content: note.note_content,
        userID: note.userID,
        created_date: note.created_date,
        updated_date: note.updated_date,
        description: note.description
        })
        .catch(error => {
    this.errorMgmt(error);
        })
}

/* Delete Note */
DeleteNote(id: string) {
    this.noteRef = this.db.object('notes-list/' + id);
    this.noteRef.remove()
        .catch(error => {
    this.errorMgmt(error);
        })
}

//Error Management
private errorMgmt(error: any) {
    console.log(error)
}


}

