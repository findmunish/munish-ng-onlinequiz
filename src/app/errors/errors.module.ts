import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsComponent } from './errors/errors.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ErrorsComponent],
  declarations: [ErrorsComponent]
})
export class ErrorsModule { }