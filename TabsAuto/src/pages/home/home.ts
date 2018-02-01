import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MiTabPage } from '../mi-tab/mi-tab';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private defaultMessage: string = 'Introduzca distancia';
  private placeholder: string = this.defaultMessage;
  private distancia: string = '';
  private numericDistance: number = 0;

  constructor(public navCtrl: NavController) { }

  loadTabs() {
    this.distancia = this.distancia.trim();
    let error: boolean = false;
    this.numericDistance = Number(this.distancia);
    if (isNaN(this.numericDistance) || this.numericDistance === 0) {
      error = true;
    }
    if (!error) {
      this.navCtrl.push(MiTabPage, { distancia: this.numericDistance });
    }
  }

}
