import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },          
  { path: 'get-involved', component: GetInvolvedComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
