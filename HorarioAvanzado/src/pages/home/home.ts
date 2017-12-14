import { MyApp } from './../../app/app.component';
import { SqlProvider } from './../../providers/sql/sql';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular/platform/platform';
import { CursosPage } from '../cursos/cursos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public nombre: any = "nada";
  public list: any[] = [];
  public message: any;
  constructor(public navCtrl: NavController, public platform:Platform, public sql: SqlProvider) {
    this.message = this.sql.message;
    this.list = this.sql.estudiosList;
    this.platform.ready().then(()=>this.getMaterias()).catch(()=>console.log("Error al arancar home"));
  }

  getMaterias() {
    this.sql.getEstudios();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  loadCursos(curso){
    this.sql.getCursos(curso.acronimo);
    this.navCtrl.push(CursosPage,curso.acronimo);
  }

  

}
