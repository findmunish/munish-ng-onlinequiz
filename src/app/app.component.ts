import { Component, VERSION } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { LoginService } from './services/login.service';
import { QuestionBankService } from './services/question-bank.service';
import { RoutingService } from './services/routing.service';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              public loginService: LoginService,
              public questionBankService: QuestionBankService,
              public routingService: RoutingService) {}
  ngOnInit() {
    this.router.navigateByUrl(this.routingService.LOGIN)
  }
  onLogin() {}
  onLogout() {
    this.loginService.loginObj = {name: '', isLoggedIn: false};
    this.questionBankService.resetQuestionBank();
    this.router.navigateByUrl(this.routingService.LOGIN);
  }
  onHome() {
    let toNavigateRoute = !this.loginService.loginObj.isLoggedIn ? this.routingService.LOGIN : this.router.url;
    this.router.navigateByUrl(toNavigateRoute);
  }
}
