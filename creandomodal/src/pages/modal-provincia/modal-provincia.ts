import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalProvinciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-provincia',
  templateUrl: 'modal-provincia.html',
})
export class ModalProvinciaPage {
  public provincias: string[] = ["Sevilla","Badajoz","Otra"];

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
  }

  dismiss(cadena:string){
    this.viewCtrl.dismiss(cadena);
  }

}
