import { Component, VERSION } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { LoginService } from './services/login.service';
import { QuestionBankService } from './services/question-bank.service';
import { RoutingService } from './services/routing.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  isLoggedIn = this.loginService.isLoggedIn;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              public loginService: LoginService,
              public questionBankService: QuestionBankService,
              public routingService: RoutingService) {}
  ngOnInit() {}
  onLogin() {}
  onLogout() {
    this.loginService.isLoggedIn = false;
    this.questionBankService.resetQuestionBank();
  }
  onHome() {}
}