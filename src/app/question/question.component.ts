import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

import { LoginService } from '../services/login.service';
import { QuestionBankService } from '../services/question-bank.service';
import { RoutesService } from '../services/routes.service';
//import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, OnDestroy {
  constructor(private activatedRoute: ActivatedRoute,
              private router:Router,
              public loginService: LoginService,
              public questionBankService: QuestionBankService,
              public routesService: RoutesService) {}
  currQuesIndex = -1;
  currQuestion: any = [];
  isTestAttempted = false;
  isTestAttempted$: Subscription;
  ngOnInit(): void {
    this.setCurrentQuestionNum(this.activatedRoute.snapshot.paramMap.get('id') );
    if(!this.questionBankService.isNoQuestions()) {
      this.currQuestion = this.questionBankService.questionBank.questions[this.currQuesIndex];
    }
    this.isTestAttempted$ = this.questionBankService.isTestAttempted.subscribe(res => {
      this.isTestAttempted = res;
    });
  }
  ngOnDestroy() {
    this.questionBankService.isTestAttempted.next(false);
    this.isTestAttempted$.unsubscribe();
  }
  setCurrentQuestionNum(strId) {
    this.currQuesIndex = parseInt(strId) - 1;
  }
  getNextQuestionIndex(propagateBy) {
    if ( this.questionBankService.isNoQuestions() ) return this.currQuesIndex;
    let newIndex = this.currQuesIndex + propagateBy;
    return ( newIndex  < this.questionBankService.getNumQuestions() && newIndex >= 0 ? newIndex : -1 ); 
  }
  loadNextQuestion(propagateBy) {
    this.currQuesIndex = this.getNextQuestionIndex(propagateBy);
    let routeEndPoint = '';
    if (this.currQuesIndex !== -1) {
      this.currQuestion = this.questionBankService.questionBank && this.questionBankService.questionBank.questions[this.currQuesIndex];
      routeEndPoint = `${this.routesService.QUESTION_PARTIAL}/${this.currQuesIndex + 1}`;
    } else {
      this.questionBankService.checkTestAttempt();
      routeEndPoint = `${this.routesService.QUIZ}`;
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
