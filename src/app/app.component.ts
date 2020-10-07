import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { QuestionBankService } from './services/question-bank.service';
import { RoutingService } from './services/routing.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private router: Router,
              public loginService: LoginService,
              public questionBankService: QuestionBankService,
              public routingService: RoutingService) {}
  ngOnInit() {
    this.router.navigateByUrl(this.routingService.LOGIN)
  }
  onLogout() {
    this.loginService.resetLoginObj();
    this.questionBankService.resetQuestionBank();
    this.router.navigateByUrl(this.routingService.LOGIN);
  }
  onHome() {
    this.loginService.loginObj.loginNotification = false;
    let toNavigateRoute = !this.loginService.loginObj.isLoggedIn ? this.routingService.LOGIN : this.router.url;
    this.router.navigateByUrl(toNavigateRoute);
  }
  getLoginButtonName() {
    return this.loginService.loginObj.name === '' ? 'Login' : this.loginService.loginObj.name.toUpperCase();
  }
}