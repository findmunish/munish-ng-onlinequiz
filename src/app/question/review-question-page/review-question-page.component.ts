import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { StateService } from '../../services/state.service';
import { QuestionBankService } from '../../services/question-bank.service';

@Component({
  selector: 'app-review-question-page',
  templateUrl: './review-question-page.component.html',
  styleUrls: ['./review-question-page.component.css']
})
export class ReviewQuestionPageComponent implements OnInit {

  constructor(public stateService: StateService,
            public questionBankService: QuestionBankService) {}
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