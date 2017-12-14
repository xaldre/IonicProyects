import { SqlProvider } from './../../providers/sql/sql';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HorarioPage } from '../horario/horario';

/**
 * Generated class for the CursosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cursos',
  templateUrl: 'cursos.html',
})
export class CursosPage {

  public titulo;
  public list: any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public sql: SqlProvider) {
    this.titulo = this.navParams.data;
    this.list = this.sql.cursosList;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursosPage');
  }

  async loadHorario(curso){
    console.log("Entro en cargar horario");
    await this.sql.getHorario(curso.id);
    console.log("Ahora meto la pag horario");
    this.navCtrl.push(HorarioPage,curso.nombre);
  }

}
