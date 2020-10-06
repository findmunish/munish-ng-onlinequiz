import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ErrorsModule } from '../errors/errors.module';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  { path: '', component: ReviewComponent}
]

@NgModule({
  imports: [
    CommonModule,
    ErrorsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReviewComponent]
})

export class ReviewModule { }