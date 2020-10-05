import { Injectable } from '@angular/core';

@Injectable()
export class RoutingService {
  constructor() { }
  HOME = '';
  LOGIN = '/login';
  QUIZ = '/quiz';
  QUESTION_PARTIAL = '/question';
  REVIEW = '/review';
  RESULT = '/result';
}