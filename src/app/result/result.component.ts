import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StateService } from '../services/state.service';
import { QuestionBankService } from '../services/question-bank.service';
import { RoutesService } from '../services/routes.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  constructor(private router: Router,
              public stateService: StateService,
              public questionBankService: QuestionBankService,
              public routesService: RoutesService) { }
  ngOnInit(): void {
}
  OnReviewTest() {}
}