import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular/platform/platform';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class SqlProvider {
  public cursosList: any[] = []
  public estudiosList: any[] = [];
  public horarioMatrix: any[][] = [];
  public horasList: any[] = [];
  public message: any;

  constructor(public http: HttpClient, public platform: Platform, public sqlite: SQLite) {
    this.platform.ready().then(() => this.getHoras()).catch(() => console.log("INTENTAS CARGAR LAS HORAS ANTES DE QUE EXISTAN!!!"));
  }

  openDatabase() {
    const conector = { name: 'Horario16.db', location: 'default', createFromLocation: 1 };
    return (this.sqlite.create(conector));
  }

  executeSentence(target: any[], sqlSentence: string, searchParam: any[]) {
    return new Promise((resolve, reject) => {
      this.openDatabase().then((db: SQLiteObject) =>
        db.executeSql(sqlSentence, searchParam
        ).then((data) => {
          for (let i = 0; i < data.rows.length; i++) {
            let obj = data.rows.item(i);
            target.push(obj);
            // console.log(JSON.stringify(obj));
          } resolve();
        }).catch((e) => {
          console.log("error en executeSentence"); this.message = e; reject(e);
        })).catch((e) => {
          console.log("Error al abrir DB"); this.message = e; reject(e);
        })
    })
  }

  getEstudios() {
    const sqlEstudios = "SELECT estudios.idEstudios as id, estudios.nombre AS acronimo, estudios.descripcion AS nombre, count(grupo.nombre) AS conteo FROM grupo INNER JOIN estudios ON grupo.idEstudios = estudios.idEstudios GROUP BY estudios.nombre";
    this.executeSentence(this.estudiosList, sqlEstudios, [])
  }

  getCursos(searchParam) {
    const sql = "SELECT grupo.idGrupo as id, grupo.nombre FROM grupo INNER JOIN estudios ON grupo.idEstudios = estudios.idEstudios WHERE estudios.nombre LIKE ?";
    this.cursosList.length = 0;
    this.executeSentence(this.cursosList, sql, [searchParam]);
  }

  async getHorario(idGrupo) {
    const MAX_HOUR = 6;
    const sqlMateriasDia = "SELECT horaClase.idDiaClase AS id, materia.nombre, materia.completo AS descripcion FROM materia NATURAL JOIN materiahoraclase NATURAL JOIN horaClase NATURAL JOIN diaClase INNER JOIN grupo ON diaClase.idGrupo = grupo.idGrupo INNER JOIN diaSemana ON diaClase.idDiaSemana = diaSemana.idDiaSemana WHERE horaClase.idHorasSemana = ? AND grupo.idGrupo = ?";
    this.horarioMatrix.length = 0;
    this.horarioMatrix.push([{ "nombre": "HORARIO" }, { "nombre": "LUNES" }, { "nombre": "MARTES" }, { "nombre": "MIERCOLES" }, { "nombre": "JUEVES" }, { "nombre": "VIERNES" }]);
    for (let i = 1; i < MAX_HOUR + 1; i++) {
      let tempList = [];
      let sortedTempList = []
      tempList.push(this.horasList[i - 1]);
      await this.executeSentence(tempList, sqlMateriasDia, [i, idGrupo]);
      await this.fixMerged(tempList, sortedTempList);
      this.horarioMatrix.push(sortedTempList);
    }
    console.log("Termino de cargar el horario");
  }

  getHoras() {
    const sql = "Select descripcion as nombre from horasSemana";
    this.executeSentence(this.horasList, sql, []);
  }

  fixMerged(input, output): Promise<void> {
    return new Promise((resolve, reject) => {
      let id = -1;
      for (let item of input) {
        if (id == item.id) {
          let prev = output.pop();
          prev.nombre = prev.nombre + " / " + item.nombre;
          prev.descripcion = prev.descripcion + " / " + item.descripcion;
          output.push(prev);
        } else {
          output.push(item);
        }
        id = item.id;
      }
      resolve();
    });
  }
}
