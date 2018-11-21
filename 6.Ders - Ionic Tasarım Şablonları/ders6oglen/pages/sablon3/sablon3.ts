import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Sablon3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sablon3',
  templateUrl: 'sablon3.html',
})
export class Sablon3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  sablon4getir(){
    this.navCtrl.push('Sablon4Page');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Sablon3Page');
  }

}
