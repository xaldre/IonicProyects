import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular/platform/platform';
import { SQLite } from '@ionic-native/sqlite';

/*
  Generated class for the SqlProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SqlProvider {

  constructor(public http: HttpClient, public platform:Platform, public sqlite:SQLite) {
    this.platform.ready().then(()=>this.openDB()).catch();
    console.log('Hello SqlProvider Provider');
  }

  openDB(){
    this.sqlite.create({
      //Esta es la operación que va a abrir el objeto
      name: 'primero.db',
      location: 'default',
      createFromLocation: 1
    })
  }

}
