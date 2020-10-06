import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service';
import { QuestionBankService } from '../../services/question-bank.service';
import { RoutingService } from '../../services/routing.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  checkErrors = {loginNotification:false, login:true, question:true, evaluate:true};
  constructor(private router: Router,
            public loginService: LoginService,
            public questionBankService: QuestionBankService,
            public routingService: RoutingService) { }
  ngOnInit() {}
  OnViewTestResults() {}
  OnBackPage() {}
  OnBeginReview() {
    let startIndex = 0;
    this.router.navigateByUrl(`${this.routingService.QUESTION_PARTIAL}/${startIndex+1}`);
  }
}