import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddContentComponent } from './components/add-content/add-content.component';
import { ContentListComponent } from './components/content-list/content-list.component';
import { EditContentComponent } from './components/edit-content/edit-content.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContentDetailsComponent } from './components/content-details/content-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'content-list' },
  { path: 'add-content', component: AddContentComponent },
  { path: 'edit-content/:id', component: EditContentComponent },
  { path: 'content-list', component: ContentListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'content-details/:id', component: ContentDetailsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
