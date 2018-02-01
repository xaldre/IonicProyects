import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CochePage } from '../coche/coche';
import { AmotoPage } from '../amoto/amoto';
import { GuaguaPage } from '../guagua/guagua';
import { ApatitaPage } from '../apatita/apatita';
import { Tab } from 'ionic-angular/navigation/nav-interfaces';

/**
 * Generated class for the MiTabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mi-tab',
  templateUrl: 'mi-tab.html'
})
export class MiTabPage {

  // Un Array donde declaro los elementos por prototipado
  public pages: Array<{ title: any, componente: any, icono: any, shown: boolean }>;
  // public pagesJava: Array<{ Pagina }>;

  private distancia: number;
  private title: string;
  private MAX_WALKING_DISTANCE: number = 15;
  cocheRoot = 'CochePage'
  amotoRoot = 'AmotoPage'
  guaguaRoot = 'GuaguaPage'

  constructor(public navCtrl: NavController, public NavParams: NavParams) {
    this.distancia = this.NavParams.get('distancia');
    this.pages = [
      { title: 'Automovil', componente: CochePage, icono: 'car', shown: true },
      { title: 'Motocicleta', componente: AmotoPage, icono: 'bicycle', shown: true },
      { title: 'Autobus', componente: GuaguaPage, icono: 'bus', shown: true },
      { title: 'A-Patitas', componente: ApatitaPage, icono: 'walk', shown: this.distancia <= this.MAX_WALKING_DISTANCE },
    ];
  }

  public changeTitle(tab: Tab) {
    this.title = tab.tabTitle;
  }
}
