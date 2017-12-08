import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular/platform/platform';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the SqlProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SqlProvider {

  public nombre: string;
  public sqlDB: SQLiteObject;
  public conector = {
    name: 'horario16.db',
    location: 'default',
    createFromLocation: 1
  };
  public sqlMaterias = "SELECT estudios.nombre FROM estudios";
  public sentence = "SELECT materia.nombre FROM grupo, diaClase, horaClase, materiahoraclase, materia" +
    "WHERE grupo.idGrupo=diaClase.idGrupo AND horaClase.idDiaClase=diaClase.idDiaClase AND materiahoraclase.idHoraClase=horaClase.idHoraClase" +
    "AND materia.idMateria = materiahoraclase.idMateria AND grupo.nombre like '2inf'";
  public list: any[];
  constructor(public http: HttpClient, public platform: Platform, public sqlite: SQLite) {
    this.platform.ready().then(
      () => this.openDatabase()
        .then((data) => console.log("DB conectada"))
        .catch((e) => console.log(e.toString()))
    ).catch();
    // this.openDatabase();
    console.log('Hello SqlProvider Provider');
  }

  openDatabase() {
    return new Promise((resolve, reject) => {
      this.sqlite.create(this.conector).then((db: SQLiteObject) => {
        this.sqlDB = db;
        resolve(db)
      }).catch(() => reject())
    });
    // this.sqlite.create(this.conector).then((db: SQLiteObject) => {
    //   this.sqlDB = db;
    //   db.executeSql(this.sqlMaterias, {}).then((data) => {
    //     for (let i = 0; i < data.rows.length; i++) {
    //       let obj = data.rows.item(i);
    //       this.list.push(obj);
    //       console.log(obj);
    //     }
    //   }).catch((e) => console.log("Error al ejecutar consulta"))
    // }).catch((e) => console.log("Error al abrir la db"))
  }

  getNombre() {
    console.log("entro en getNombre")
    return new Promise((resolve, reject) => {
      this.sqlDB.executeSql(this.sqlMaterias, {}).then((data) => {
        for (let i = 0; i < data.rows.length; i++) {
          let obj = data.rows.item(i);
          this.list.push(obj);
          console.log(obj);
        }
      }).catch((e) => {
        console.log(e.toString())
        reject(e);
      })
    });
  }
}
