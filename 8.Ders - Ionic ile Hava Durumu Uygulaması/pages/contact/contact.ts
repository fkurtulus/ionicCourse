import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  sehir:string;
  ulke:string;
  constructor(public navCtrl: NavController, public storage:Storage) {
    this.storage.get('konum').then((val)=>{
      if(val!=null){
        let konum = JSON.parse(val);
        this.sehir = konum.sehir;
        this.ulke = konum.ulke
      }else{
        this.sehir = "istanbul";
        this.ulke  = "Turkey";
      }
    })
  }
  formKaydet(){
    let konum = {
      sehir:this.sehir,
      ulke:this.ulke
    }
    this.storage.set('konum',JSON.stringify(konum));
    this.navCtrl.push(HomePage);
  }

}
