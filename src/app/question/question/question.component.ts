import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { LoginService } from '../../services/login.service';
import { QuestionBankService } from '../../services/question-bank.service';
import { RoutingService } from '../../services/routing.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute,
              private router:Router,
              public loginService: LoginService,
              public questionBankService: QuestionBankService,
              public routingService: RoutingService) {}
  currQuesIndex = -1;
  currQuestion: any = [];
  ngOnInit(): void {
    this.setCurrentQuestionNum(this.activatedRoute.snapshot.paramMap.get('id') );
    if(!this.questionBankService.doQuestionsExist()) {
      this.currQuestion = this.questionBankService.questionBank.questions[this.currQuesIndex];
    }
  }
  setCurrentQuestionNum(strId) {
    this.currQuesIndex = parseInt(strId) - 1;
  }
  getNextQuestionIndex(propagateBy) {
    if ( this.questionBankService.doQuestionsExist() ) return this.currQuesIndex;
    let newIndex = this.currQuesIndex + propagateBy;
    return ( newIndex  < this.questionBankService.getNumQuestions() && newIndex >= 0 ? newIndex : -1 ); 
  }
  loadNextQuestion(propagateBy) {
    this.currQuesIndex = this.getNextQuestionIndex(propagateBy);
    let routeEndPoint = '';
    if (this.currQuesIndex !== -1) {
      this.currQuestion = this.questionBankService.questionBank && this.questionBankService.questionBank.questions[this.currQuesIndex];
      routeEndPoint = `${this.routingService.QUESTION_PARTIAL}/${this.currQuesIndex + 1}`;
    } else {
      routeEndPoint = `${this.routingService.QUIZ}`;
    }
    this.router.navigateByUrl(routeEndPoint);
  }
  setGuessedAnswer(selectedIndex) {
    this.questionBankService.numQuestionsAttempted++;
    this.currQuestion.selectedIndex = selectedIndex;
    this.loadNextQuestion(1);
  }
  moveToNextQuestion(incrDecrBy) {
    this.loadNextQuestion(incrDecrBy);
  }
}