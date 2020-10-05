import { Injectable } from '@angular/core';
//import { BehaviorSubject } from "rxjs";
import { QUESTION_REPO } from '../data-store/questionsRepository';

@Injectable()
export class QuestionBankService {
  questionBank: any = [];
  numQuestionsAttempted = 0;
  constructor() { }
  isObjectEmpty(obj) {
    for(let key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }
  setQuestionBank() {
    this.numQuestionsAttempted = 0;
    this.questionBank = Object.assign({}, QUESTION_REPO);
    this.questionBank.questions.forEach(q => q.selectedIndex = -1);
  }
  resetQuestionBank() {
    this.questionBank = [];
  }
  isNoQuestions() {
    return this.isObjectEmpty(this.questionBank);
  }
  isAttempted() {
    if (this.isNoQuestions()) return false;
    return (this.numQuestionsAttempted === this.getNumQuestions()) ? true : false;
  }
  getNumQuestions() {
    if (this.isNoQuestions()) return 0;
    return this.questionBank.questions.length;
  }
  getNumAttempted() {
    if (this.isNoQuestions()) return 0;
    return this.numQuestionsAttempted;
  }
  getNumCorrect() {
    if (this.isNoQuestions()) return 0;
     let correctList = this.questionBank.questions.filter(q => q.selectedIndex === q.correctIndex); 
    return correctList.length;
  }
  getPercentage() {
    return this.getNumCorrect() * 100 / this.getNumQuestions();
  }
  getResult() {
    return this.getPercentage() >= 40 ? 'Passed': 'Failed';
  }
  getNoQuestionsMessages() {
    return ['Cannot fetch questions from server :-(', 'Please come back later!'];
  }
  getIncompleteEvaluationMessages() {
    return ['Cannot evaluate now!', 'Please complete the quiz first :)'];
  }
  /*evaluateResults() {
    if (this.isAttempted() === false) {
      return false;
    }
    for( let i = 0; i < this.questionBank.questions.length; i++) {
      this.questionBank.questions[i].isCorrect = false;
      if(this.questionBank.questions[i].selectedIndex === this.questionBank.questions[i].correctIndex) {
        this.questionBank.questions[i].isCorrect = true;
      }
    }
  }*/
}
