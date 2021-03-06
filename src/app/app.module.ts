import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { ErrorsModule } from './errors/errors.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { QuestionBankService } from './services/question-bank.service';
import { RoutingService } from './services/routing.service';
import { LoginService } from './services/login.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ErrorsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HelloComponent
  ],
  providers: [
    QuestionBankService,
    LoginService,
    RoutingService
  ],
  bootstrap:    [ AppComponent ],
})

export class AppModule { }