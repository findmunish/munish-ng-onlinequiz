import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';
import { QuestionBankService } from '../services/question-bank.service';

@Component({
  selector: 'app-error-list',
  templateUrl: './error-list.component.html',
  styleUrls: ['./error-list.component.css']
})
export class ErrorListComponent implements OnInit {

  constructor(public stateService: StateService,
              public questionBankService: QuestionBankService) { }
  ngOnInit() {
  }
}