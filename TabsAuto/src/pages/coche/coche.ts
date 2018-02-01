import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app';

/**
 * Generated class for the CochePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coche',
  templateUrl: 'coche.html',
})
export class CochePage {
  public distancia: number;
  private tiempo: number;
  private VELOCIDAD: number = 120;

  constructor(private app: App, public navCtrl: NavController, public navParams: NavParams ) {
    this.distancia = this.navParams.data;
    this.calculateTrip();
  }

  calculateTrip() {
    this.tiempo = this.distancia / this.VELOCIDAD;
    this.tiempo=Number(this.tiempo.toFixed(2));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CochePage');
  }

  backButton(){
    this.app.getRootNav().pop();
  }

}
