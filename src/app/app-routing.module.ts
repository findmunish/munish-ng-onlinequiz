import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'quiz', loadChildren: () => import('./quiz/quiz.module').then(m => m.QuizModule)
  },
  {
    path: 'question/:id', loadChildren: () => import('./question/question.module').then(m => m.QuestionModule)
  },
  {
    path: 'review', loadChildren: () => import('./review/review.module').then(m => m.ReviewModule)
  },
  {
    path: 'result', loadChildren: () => import('./result/result.module').then(m => m.ResultModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
