import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ApatitaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apatita',
  templateUrl: 'apatita.html',
})
export class ApatitaPage {
  public distancia: number;
  private tiempo: number;
  private VELOCIDAD: number = 10;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.distancia = this.navParams.data;
    this.calculateTrip();
  }

  calculateTrip() {
    this.tiempo = this.distancia / this.VELOCIDAD;
    this.tiempo=Number(this.tiempo.toFixed(2));
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApatitaPage');
  }

}
