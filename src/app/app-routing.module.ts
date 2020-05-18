import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
import { FormForResumeComponent } from './form-for-resume/form-for-resume.component';


const routes: Routes = [
  { path: '', component: FormForResumeComponent },
  { path: 'cv', component: ResumeBuilderComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
