import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { AddContentComponent } from './components/add-content/add-content.component';
import { EditContentComponent } from './components/edit-content/edit-content.component';
import { ContentListComponent } from './components/content-list/content-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular CRUD Services
import { ContentService } from './shared/content.service';
import { NoteService } from './shared/note.service';
import { TaskService } from './shared/task.service';

//Reactive form services in Angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContentDetailsComponent } from './components/content-details/content-details.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AuditsDueComponent } from './components/audits-due/audits-due.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { StatusesComponent } from './components/statuses/statuses.component';
import { UsersComponent } from './components/users/users.component';
import { NotesComponent } from './components/notes/notes.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { EditNoteComponent } from './components/edit-note/edit-note.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    AddContentComponent,
    EditContentComponent,
    ContentListComponent,
    DashboardComponent,
    ContentDetailsComponent,
    TasksComponent,
    AuditsDueComponent,
    TasksListComponent,
    StatusesComponent,
    UsersComponent,
    NotesComponent,
    NotesListComponent,
    AddNoteComponent,
    EditNoteComponent,
    AddTaskComponent,
    EditTaskComponent,
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [ContentService,
             NoteService,
             TaskService],   
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
