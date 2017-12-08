import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SegundaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-segunda',
  templateUrl: 'segunda.html',
})
export class SegundaPage {

  public recogida: number;
  constructor(public navCtrl: NavController, public NavParams:NavParams) {
    this.recogida=this.NavParams.get('eti');
  }
  

}
