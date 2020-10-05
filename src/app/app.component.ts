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
  //currentRoute = '';
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              public loginService: LoginService,
              public questionBankService: QuestionBankService,
              public routingService: RoutingService) {}
  ngOnInit() {
  }
/*  setInitialRoute(result) {
    console.log('router result: ', result, 'activated route:', this.activatedRoute.queryParams)
    this.currentRoute = result.urlAfterRedirects;
  }*/
  onLogin() {}
  onLogout() {
    this.loginService.isLoggedIn = false;
    this.questionBankService.resetQuestionBank();
    this.router.navigateByUrl(this.routingService.LOGIN);
  }
  onHome() {
    // console.log('ONHOME::=>  this.router.url: ', this.router.url);
    /*this.router.events.pipe(
       filter((event) => event instanceof NavigationEnd)
     ).subscribe(res => this.setInitialRoute(res))*/
    /*this.router.events.filter(event => event instanceof NavigationEnd)
      .subscribe(event => 
        {
          this.currentRoute = event.url;          
          console.log(event);
        });*/
    let toNavigateRoute = !this.loginService.isLoggedIn ? this.routingService.LOGIN : this.router.url;
    this.router.navigateByUrl(toNavigateRoute);
    //console.log('isLoggedIn: ', this.loginService.isLoggedIn)
    //onsole.log('toNavigateRoute: ', toNavigateRoute)
  }
}