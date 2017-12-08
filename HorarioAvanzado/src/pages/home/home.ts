import { SqlProvider } from './../../providers/sql/sql';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public nombre:any="nada";
  constructor(public navCtrl: NavController, public sql: SqlProvider) {
    // this.fetchNombre();
  }

  fetchNombre() {
    this.sql.getNombre().then((res) => {
      console.log("vuelvo correctamente de getNombre")
      this.nombre = res
    }).catch((err) => {
      console.log("vuelvo mal de getNombre")
      this.nombre = "no encontrado"
    });
    console.log("termino fetchNombre")
  }

}
