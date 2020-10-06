import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { REGISTERED_USERS } from '../../data-store/registeredUsers';
import { LoginService } from '../../services/login.service';
import { RoutingService } from '../../services/routing.service';
import { QuestionBankService } from '../../services/question-bank.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registeredUsers: any = REGISTERED_USERS;
  loginForm = this.formBuilder.group({
    username: [''],
    password: [''],
  });
  disableSubmitBtn = false;
  @Output() setAuthentication = new EventEmitter()
  @Output() sendRegisteredUserList = new EventEmitter()
  constructor(private formBuilder: FormBuilder,
              public loginService: LoginService,
              public routingService: RoutingService,
              public questionBankService: QuestionBankService,
              private router: Router) { }
  ngOnInit() {
    this.loginForm.valueChanges.subscribe((field) => {
      this.loginService.resetLoginObj();
      this.disableSubmitBtn = !(field.username && field.password);
    })
  }
  loginUser() {
    const {username, password} = this.loginForm.value;
    let index = this.registeredUsers.findIndex( regdUser => username.toLowerCase() === regdUser.username.toLowerCase() && password === regdUser.password )
    this.loginForm.reset();
    this.loginService.loginObj = {name: '', isLoggedIn: false, loginNotification: true};
    if(index !== -1) {
      this.loginService.loginObj = {name: this.registeredUsers[index].username, isLoggedIn: true, loginNotification: true};
      this.questionBankService.setQuestionBank();
      this.router.navigateByUrl(this.routingService.QUIZ);
    }
  }
}