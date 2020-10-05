import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
/*import { LoginComponent } from './login.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
]*/

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //RouterModule.forChild(routes)
  ],
  declarations: [  ]
})
export class LoginModule { }