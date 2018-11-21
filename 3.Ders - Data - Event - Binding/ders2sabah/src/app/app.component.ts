import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hybrid Mobile Programming';
  aylar = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
  uygunmu = false;
  tiklandi() {
    console.log('Butona Tıklandı');
  }
  aylarDegisti(ay: any) {
    console.log('Aylar Değişti:' + ay);
  }
}
