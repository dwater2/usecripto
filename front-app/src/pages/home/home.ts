import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SendPage } from "../send/send";
import { ReceivePage } from "../receive/receive";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public nav: NavController) {

  }

  send(){
    this.nav.push(SendPage);
  }

  receive(){
    this.nav.push(ReceivePage);
  }

}
