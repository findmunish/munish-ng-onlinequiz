import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  isLoggedIn = false;
  constructor() {}
  getLoginFailMessages() {
    return ['Sorry! you are not logged in :(', 'Only logged in users can continue!'];
  }
}