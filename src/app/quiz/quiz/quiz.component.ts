import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service';
import { QuestionBankService } from '../../services/question-bank.service';
import { RoutingService } from '../../services/routing.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  checkErrors = {login:true, question:true, evaluate:false};
  questionaireJsonLink = 'https://api.jsonbin.io/b/5f780373302a837e95736e9a';
  constructor(private httpQuestionaireClient: HttpClient,
              public loginService: LoginService,
              public questionBankService: QuestionBankService,
              public routingService: RoutingService,
              private router: Router) { }
  ngOnInit() {
  }
  setQuestionBank(question) {
    return question
  }
  OnBeginTest(){
    let startIndex = 0;
    this.router.navigateByUrl(`${this.routingService.QUESTION_PARTIAL}/${startIndex+1}`);
  }
  OnReviewTest() {}
  OnViewTestResults() {}
}