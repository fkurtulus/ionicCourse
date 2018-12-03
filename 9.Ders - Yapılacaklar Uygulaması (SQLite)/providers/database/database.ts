import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Injectable()
export class DatabaseProvider {
  database: SQLiteObject;
  constructor(private storage: Storage, private sqlite: SQLite, private http: Http) {
    this.sqlite.create({
      name:'todo.db',
      location:'default'
    }).then(
      (db:SQLiteObject)=>{
        db.executeSql('CREATE TABLE IF NOT EXISTS todo (ID INTEGER PRIMARY KEY AUTOINCREMENT,title TEXT,desc TEXT)',[]);
        this.database=db;
        alert("DB Oluşturuldu");
      }
    );
    
  }
  addTodo(title,desc){
    return this.database.executeSql('insert into todo (title,desc) values ("'+title+'","'+desc+'")').then((data)=>{
      alert("Veri Eklendi");
      return data;
    });
  }
  getAllTodo(){
    return this.database.executeSql('select * from todo',[]).then((data)=>{
      let todos= [];
      if(data.rows.length>0){
        for(let i =0;i<data.rows.length;i++){
          todos.push({ID:data.rows.item(i).ID,title:data.rows.item(i).title,desc:data.rows.item(i).desc});
        }
      }
      return todos;
    }, err => {
      
      return err;
    });
  }
  delete(id){
    this.database.executeSql('Delete from todo where ID='+id,[]);
  }

}
