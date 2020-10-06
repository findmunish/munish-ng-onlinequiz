import { Component, OnInit } from '@angular/core';

import { LoginService } from '../services/login.service';
import { QuestionBankService } from '../services/question-bank.service';

@Component({
  selector: 'app-errors1',
  templateUrl: './errors1.component.html',
  styleUrls: ['./errors1.component.css']
})
export class Errors1Component implements OnInit {

  constructor(public loginService: LoginService,
              public questionBankService: QuestionBankService,) { }

  ngOnInit() {
  }

}