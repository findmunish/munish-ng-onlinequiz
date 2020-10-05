import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { QuestionBankService } from '../../../services/question-bank.service';

@Component({
  selector: 'app-attempt-question',
  templateUrl: './attempt-question.component.html',
  styleUrls: ['./attempt-question.component.css']
})
export class AttemptQuestionComponent implements OnInit {
  constructor(public questionBankService: QuestionBankService) {}
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