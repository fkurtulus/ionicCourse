import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Sablon2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sablon2',
  templateUrl: 'sablon2.html',
})
export class Sablon2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  sablon3getir(){
    this.navCtrl.push('Sablon3Page');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Sablon2Page');
  }

}
