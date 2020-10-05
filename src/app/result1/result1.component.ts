import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../services/login.service';
import { QuestionBankService } from '../services/question-bank.service';
import { RoutingService } from '../services/routing.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  constructor(private router: Router,
              public loginService: LoginService,
              public questionBankService: QuestionBankService,
              public routingService: RoutingService) { }
  ngOnInit(): void {
}
  OnReviewTest() {}
}