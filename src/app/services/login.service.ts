import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  loginObj = {name: '', isLoggedIn: false};
  constructor() {}
  getLoginFailMessages() {
    return ['Sorry! you are not logged in :(', 'Only logged in users can continue!'];
  }
  getLoginValidationMessage() {
    if (this.loginObj.isLoggedIn) {
      return {class: 'alert-success', message: 'Valid Credentials!'};
    }
    return {class: 'alert-danger', message: 'Invalid Credentials!'};
  }
}