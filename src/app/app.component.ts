import { Component, VERSION } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { StateService } from './services/state.service';
import { QuestionBankService } from './services/question-bank.service';
import { RoutesService } from './services/routes.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  isLoggedIn = this.stateService.isLoggedIn;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              public stateService: StateService,
              public questionBankService: QuestionBankService,
              public routesService: RoutesService) {}
  ngOnInit() {}
  onLogin() {}
  onLogout() {
    this.stateService.isLoggedIn = false;
    this.questionBankService.resetQuestionBank();
  }
  onHome() {}
}