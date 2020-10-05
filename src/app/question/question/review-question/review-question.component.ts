import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { QuestionBankService } from '../../../services/question-bank.service';

@Component({
  selector: 'app-review-question',
  templateUrl: './review-question.component.html',
  styleUrls: ['./review-question.component.css']
})
export class ReviewQuestionComponent implements OnInit {

  constructor(public questionBankService: QuestionBankService) {}
  @Input() currQuestion: any = {};
  @Input() currQuesIndex: number;
  @Input() isTestAttempted: boolean;
  @Output() propagateQuestion = new EventEmitter;
  ngOnInit() {  }
  onNextQuestion(moveBy) {
    this.propagateQuestion.emit(moveBy);
  }
  onPreviousQuestion() {
    this.propagateQuestion.emit(-1);
  }
}