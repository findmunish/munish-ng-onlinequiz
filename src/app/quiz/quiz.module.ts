import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ErrorsComponent } from '../errors/errors.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionaireComponent } from './quiz/questionaire/questionaire.component';

const routes: Routes = [
  { path: '', component: QuizComponent}
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ErrorsComponent, QuizComponent, QuestionaireComponent]
})
export class QuizModule { }