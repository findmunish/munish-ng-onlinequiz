import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';
import { QuestionBankService } from '../services/question-bank.service';

@Component({
  selector: 'app-error1',
  templateUrl: './error1.component.html',
  styleUrls: ['./error1.component.css']
})
export class Error1Component implements OnInit {

   constructor(public stateService: StateService,
              public questionBankService: QuestionBankService) { }

  ngOnInit() {
  }

}