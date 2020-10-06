import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ErrorsComponent } from '../errors/errors/errors.component';
import { QuestionComponent } from './question/question.component';
import { AttemptQuestionComponent } from './question/attempt-question/attempt-question.component';
import { ReviewQuestionComponent } from './question/review-question/review-question.component';

const routes: Routes = [
  { path: '', component: QuestionComponent}
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ErrorsComponent,
    RouterModule.forChild(routes)
  ],
  declarations: [QuestionComponent, AttemptQuestionComponent, ReviewQuestionComponent]
})
export class QuestionModule { }