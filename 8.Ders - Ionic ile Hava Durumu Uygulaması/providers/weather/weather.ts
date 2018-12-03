import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
  apikey = 'a8449ff9f8d33572';
  url:string;
  constructor(public http: Http) {
    this.url = 'http://api.wunderground.com/api/'+this.apikey+'/conditions/q';
  }
  getHavaDurumu(sehir,ulke){
    return this.http.get(this.url+"/"+ulke+"/"+sehir+".json").map(durum=>durum.json());
  }

}
