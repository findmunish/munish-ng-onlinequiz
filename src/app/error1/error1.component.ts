import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { QuestionBankService } from '../services/question-bank.service';

@Component({
  selector: 'app-error1',
  templateUrl: './error1.component.html',
  styleUrls: ['./error1.component.css']
})
export class Error1Component implements OnInit {

   constructor(public loginService: LoginService,
              public questionBankService: QuestionBankService) { }

  ngOnInit() {
  }

}