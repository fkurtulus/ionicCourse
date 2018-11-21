import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hafta4sabah';
  takimlar = [
    {takimAdi: 'GALATASARAY', yildiz: '4 Yıldızlı Tek Takım'},
    {takimAdi: 'Fenerbahçe', yildiz: '3 Yıldızlı Takımlardan Birisi'},
    {takimAdi: 'Beşiktaş', yildiz: '3 Yıldızlı Diğer Takım'},
    {takimAdi: 'Trabzonspor', yildiz: '1 Yıldızlı Tek Takım'}
  ];
}
