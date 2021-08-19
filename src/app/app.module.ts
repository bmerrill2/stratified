import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AddContentComponent } from './components/add-content/add-content.component';
import { EditContentComponent } from './components/edit-content/edit-content.component';
import { ContentListComponent } from './components/content-list/content-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular CRUD Services
import { ContentService } from './shared/content.service';

//Reactive form services in Angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContentDetailsComponent } from './components/content-details/content-details.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AuditsDueComponent } from './components/audits-due/audits-due.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { StatusesComponent } from './components/statuses/statuses.component';

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
    StatusesComponent
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
    BrowserAnimationsModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
