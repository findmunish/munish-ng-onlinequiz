import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-questionaire',
  templateUrl: './questionaire.component.html',
  styleUrls: ['./questionaire.component.css']
})
export class QuestionaireComponent implements OnInit {
  fetchedQuestionsJson = [];
  constructor() { }
  ngOnInit(): void {
  }
  answer = '';
  @Input() questionBank;
  @Output() updateQuestionBank = new EventEmitter
  choiceSelected(answer, question) {}
  onSubmit(selection){
    let selectedAnswerIndex = this.questionBank.answers.findIndex(a => selection.answer === a)
    this.questionBank.isCorrect = (selectedAnswerIndex === this.questionBank.correctIndex) ? true : false;
    this.questionBank.selectedIndex = selectedAnswerIndex;
    console.log(`Your response is ${this.questionBank.isCorrect} because you chose ${this.questionBank.selectedIndex}`)
    this.questionBank.isShow = false;
    this.updateQuestionBank.emit(this.questionBank)
  }
}