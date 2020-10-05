import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { QuestionBankService } from '../services/question-bank.service';

@Component({
  selector: 'app-error-list',
  templateUrl: './error-list.component.html',
  styleUrls: ['./error-list.component.css']
})
export class ErrorListComponent implements OnInit {

  constructor(public loginService: LoginService,
              public questionBankService: QuestionBankService) { }
  ngOnInit() {
  }
}