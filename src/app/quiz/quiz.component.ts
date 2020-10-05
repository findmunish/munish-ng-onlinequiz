import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

//import { ErrorListComponent } from '../error-list/error-list.component';
import { LoginService } from '../services/login.service';
import { QuestionBankService } from '../services/question-bank.service';
import { RoutesService } from '../services/routes.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit, OnDestroy {
  questionaireJsonLink = 'https://api.jsonbin.io/b/5f780373302a837e95736e9a';
  constructor(private httpQuestionaireClient: HttpClient,
                      public loginService: LoginService,
                      public questionBankService: QuestionBankService,
                      public routesService: RoutesService,
                      private router: Router) { }
  isTestAttempted = false;
  isTestAttempted$: Subscription;
  ngOnInit() {
      this.isTestAttempted$ = this.questionBankService.isTestAttempted.subscribe(res => {
        this.isTestAttempted = res;
      });
      // this.addToQuestionaireList()
  }
  ngOnDestroy() {
    this.questionBankService.isTestAttempted.next(false);
    this.isTestAttempted$.unsubscribe();
  }
  /*addToQuestionaireList() {
    if (this.questionBankService.questions.length > 0) {
      this.questionBankService.questions.forEach(q => q.isShow = false);
      this.showHideNextQuestion(0, true); //show first question by default
    }
  }
  showHideNextQuestion(index, isShow) {
    if (index >= 0 && index < this.fetchedQuestionsJson.questions.length) {
      this.fetchedQuestionsJson.questions[index].isShow = isShow;
    }
  }
  updateQuestionBank(question) {
    let questionIndex = this.fetchedQuestionsJson.questions.findIndex(q => question.question === q.question);
    this.showHideNextQuestion(questionIndex, false);    //hide current question
    this.showHideNextQuestion(questionIndex + 1, true);    //show current question
  }*/
  setQuestionBank(question) {
    return question
  }
  OnBeginTest(){
    let startIndex = 0;
    this.router.navigateByUrl(`${this.routesService.QUESTION_PARTIAL}/${startIndex+1}`);
  }
  OnReviewTest() {}
  OnViewTestResults() {}
}