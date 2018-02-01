import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public sqlite: SQLite, public platform: Platform) {
    // Cuando uno utiliza este software, libreria, consigue generar un archivo del titpo SQLite 
    // en el terminal donde se instala la aplicacion, 
    //lo cual la carga de datos se hace en tiempo de ejecucion
    this.platform.ready()
      .then(() => this.sqlite.create({
        name: 'data.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          db.executeSql('create table danceMoves(name VARCHAR(32))', {})
            .then(() => console.log('Executed SQL'))
            .catch(e => console.log(e));
        })
        .catch(e => console.log(e)))
      .catch(e => console.log(e));
  }

}
