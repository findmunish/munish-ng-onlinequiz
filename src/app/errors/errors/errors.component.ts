import { Component, OnInit, Input } from '@angular/core';

import { LoginService } from '../../services/login.service';
import { QuestionBankService } from '../../services/question-bank.service';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {
  constructor(public loginService: LoginService,
              public questionBankService: QuestionBankService,) { }
  ngOnInit() {}
  @Input() checkErrors: any = {login:false, question:false, evaluate:false};
}