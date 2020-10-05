import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { REGISTERED_USERS } from '../../data-store/registeredUsers';
import { LoginService } from '../../services/login.service';
import { routingService } from '../../services/routing.service';
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
  validUser = false;
  disableSubmitBtn = false;
  alertMessage = '';
  @Output() setAuthentication = new EventEmitter()
  @Output() sendRegisteredUserList = new EventEmitter()
  constructor(private formBuilder: FormBuilder,
              public loginService: LoginService,
              public routingService: RoutingService,
              public questionBankService: QuestionBankService,
              private router: Router) { }

  ngOnInit() {
    this.loginForm.valueChanges.subscribe((field) => {
      this.loginService.isLoggedIn = false;
      this.alertMessage = '';
      this.disableSubmitBtn = !(field.username && field.password);
    })
  }
  loginUser() {
    const {username, password} = this.loginForm.value;
    let index = this.registeredUsers.findIndex( regdUser => username.toLowerCase() === regdUser.username.toLowerCase() && password === regdUser.password )
    this.loginService.isLoggedIn = false;
    this.alertMessage = 'Invalid Credentials!';
    if(index !== -1) {
      this.loginService.isLoggedIn = true;
      this.alertMessage = 'Valid Credentials!';
      this.questionBankService.setQuestionBank();
      this.router.navigateByUrl(this.routingService.QUIZ);
    }
  }
}
