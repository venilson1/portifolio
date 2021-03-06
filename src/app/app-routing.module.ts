import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './views/about/about.component';
import { ProjectsComponent } from './views/projects/projects.component';


const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'meusprojetos', component: ProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
