import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class StateService {

  isLoggedIn = false;
  constructor() {}
  getLoginFailMessages() {
    return ['Sorry! you are not logged in :(', 'Only logged in users can continue!'];
  }
}
