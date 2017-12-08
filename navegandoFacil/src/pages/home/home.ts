import { SegundaPage } from './../segunda/segunda';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public openSegundaPage():void{
    // Una forma simple de navegar tratando como una pila
    // de pages el NavController
    // Ahora vamos a pasar informacion a la page llamada
    // añadir en la llamada al push la info que queremos
    // necesitamos etiquetal el parametro que se pasa (eti)
    this.navCtrl.push(SegundaPage,{eti:12});
    // como se recoge?

  }

}
