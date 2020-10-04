import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor() { }

  HOME = '';
  LOGIN = '/login';
  QUIZ = '/quiz';
  QUESTION_PARTIAL = '/question';
  REVIEW = '/review';
  RESULT = '/result';
}