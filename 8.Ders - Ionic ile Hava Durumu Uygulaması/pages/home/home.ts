import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  konum: {
    sehir:string,
    ulke:string
  }
  havaDurumu:any;
  constructor(public navCtrl: NavController,public havaDurumuProvider: WeatherProvider, public storage:Storage) {

  }
  ionViewWillEnter(){
   this.storage.get('konum').then((val)=>{
    if(val!=null){
      this.konum = JSON.parse(val);  
    }else{
      this.konum={
        sehir:'istanbul',
        ulke:'Turkey'
      }
    }
    this.havaDurumuProvider.getHavaDurumu(this.konum.sehir,this.konum.ulke).subscribe(
      havaDurumuDonen => {
        console.log(JSON.stringify(havaDurumuDonen));
        this.havaDurumu = havaDurumuDonen.current_observation;
      }
    )
    
   });
  }

}
