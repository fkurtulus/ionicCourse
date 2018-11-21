import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  sayfaDegistir(takim:string){
    this.navCtrl.push("DetailPage",{takimAdi:takim});
  }

}
