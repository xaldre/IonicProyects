import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CiudadProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CiudadProvider {
  public provincia='badajoz';
  public message: any;
  public list: any[] = [];
  constructor(public http: HttpClient, public sqlite: SQLite) {
    this.openDDBB();
  }

  openDDBB() {
    //Create vale para crear una db o para abrir una ya creada
    this.sqlite.create({
      //Esta es la operación que va a abrir el objeto
      name: 'primero.db',
      location: 'default',
      createFromLocation: 1
    }).then(
      //Dentro del then de create, metemos una fat-arrow
      (db: SQLiteObject) => {
        //La consulta del execute ¡¡¡¡¡¡DEBE PROBARSE ANTES EN SQLITESTUDIO!!!!!!!!!!
        db.executeSql("SELECT * from provincias where provincia like ?", [this.provincia]
        ).then((data) => {
          //Dentro del then del executeSQL
          //El resultado se recoge en el fatarrow en el (data)


          //No funciona con forEach

          // data.rows.forEach(element => {
          //   this.list.push(element);
          // });
          

          for (let i = 0; i < data.rows.length; i++) {
            let obj = data.rows.item(i);
            this.list.push(obj);
            console.log(obj);
          }

        }).catch((e) => {
          console.log("error en execute")
          this.message = e
        })
      }
      ).catch((e) => {
        console.log("error en opendb")
        this.message = e
      })
  }
}
