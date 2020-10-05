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

  isLoggedIn = this.loginService.isLoggedIn;
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
    this.loginService.isLoggedIn = false;
    this.questionBankService.resetQuestionBank();
    this.router.navigateByUrl(this.routingService.LOGIN);
  }
  onHome() {
    let toNavigateRoute = !this.loginService.isLoggedIn ? this.routingService.LOGIN : this.router.url;
    this.router.navigateByUrl(toNavigateRoute);
  }
}
