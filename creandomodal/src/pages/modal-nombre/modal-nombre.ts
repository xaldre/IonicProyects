import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalNombrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-nombre',
  templateUrl: 'modal-nombre.html',
})
export class ModalNombrePage {
  public nombres: string[] = ["Joselito","Pepe","Albano","Anacleto","Fulgencio"];

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
  }

  dismiss(cadena: string){
    this.viewCtrl.dismiss(cadena);
  }
  

}
