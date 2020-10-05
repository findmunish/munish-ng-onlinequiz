import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path: '', component: ResultComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResultComponent]
})
export class ResultModule { }
