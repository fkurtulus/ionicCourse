import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';

@IonicPage()
@Component({
  selector: 'page-addtodo',
  templateUrl: 'addtodo.html',
})
export class AddtodoPage {
  todo = {};
  todos = [];
  constructor( private viewCtrl:ViewController,private databaseprovider: DatabaseProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddtodoPage');
  }
  addTodo(){    
    this.databaseprovider.addTodo(this.todo['title'],this.todo['desc']).then(data=>{
      alert("Veriler Eklendi");
     
    });
    this.todo = {};
    this.navCtrl.pop();
  }

  dismiss() {
    this.navCtrl.pop();
  } 
 

}
