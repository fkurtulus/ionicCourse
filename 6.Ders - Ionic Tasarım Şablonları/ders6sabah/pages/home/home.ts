import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  sablon2getir(){
    this.navCtrl.push('Sablon2Page');
  }
  sablon3getir(){
    this.navCtrl.push('Sablon3Page');
  }
  sablon4getir(){
    this.navCtrl.push('Sablon4Page');
  }

}
