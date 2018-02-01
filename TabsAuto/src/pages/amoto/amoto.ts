import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AmotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-amoto',
  templateUrl: 'amoto.html',
})
export class AmotoPage {
  public distancia: number;
  private tiempo: number;
  private VELOCIDAD: number = 50;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.distancia = this.navParams.data;
    this.calculateTrip();
  }

  calculateTrip() {
    this.tiempo = this.distancia / this.VELOCIDAD;
    this.tiempo=Number(this.tiempo.toFixed(2));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AmotoPage');
  }

}
