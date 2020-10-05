import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  { path: '', component: QuestionComponent}
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QuestionComponent]
})

export class QuestionModule { }