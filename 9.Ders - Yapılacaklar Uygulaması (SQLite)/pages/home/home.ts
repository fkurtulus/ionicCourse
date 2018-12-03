import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  todo = {};
  todos = [];
  constructor(public navCtrl: NavController, private databaseprovider: DatabaseProvider) {
 
  }
  ionViewWillEnter(){
   this.loadTodos();
  }
  addTodo(){
    this.navCtrl.push('AddtodoPage')
  }
  deleteAll(id){  
    this.databaseprovider.delete(id);
    this.loadTodos();   
  }
  loadTodos(){
    this.databaseprovider.getAllTodo().then(data=>{
      this.todos = data;    
    });
  }
 

}
