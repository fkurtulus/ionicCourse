import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hybrid Mobile  Programming';
  gunler = ['Pazartesi', 'Salı', 'Ç.şamba', 'P.şembe', 'Cuma', 'C.tesi', 'Pazar'];
  uygunmu = true;
  tikla() {
    console.log('Butona Tıklandı');
  }
  gunDegisti(gun) {
    if (gun == 'Pazartesi') {
      this.uygunmu = true;
    } else {
      this.uygunmu = false;
    }
    console.log('Change Olayı Çalıştı' + gun);
  }
}
