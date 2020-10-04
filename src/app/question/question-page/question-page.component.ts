import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { StateService } from '../../services/state.service';
import { QuestionBankService } from '../../services/question-bank.service';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.css']
})
export class QuestionPageComponent implements OnInit {

  constructor(public stateService: StateService,
              public questionBankService: QuestionBankService) {}
  @Input() currQuestion: any = {};
  @Input() currQuesIndex: any;
  @Output() guessedAnswer = new EventEmitter;
  ngOnInit() {
  }
  onSubmit(selection) {
    this.currQuestion.selectedIndex = selection[this.currQuestion.question];
    this.guessedAnswer.emit(this.currQuestion.selectedIndex);
  }
}