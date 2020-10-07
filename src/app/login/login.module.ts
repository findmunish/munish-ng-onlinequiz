import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ErrorsModule } from '../errors/errors.module';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }