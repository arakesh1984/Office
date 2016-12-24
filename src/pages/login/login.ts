import { Login } from './../../providers/login';
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
userName : string;
passWord: string;
  constructor(public navCtrl: NavController) {
    
  }

}
