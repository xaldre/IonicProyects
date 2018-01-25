import { ModalProvinciaPage } from './../modal-provincia/modal-provincia';
import { ModalNombrePage } from './../modal-nombre/modal-nombre';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public title: string = 'Registro';
  public nombre: string;
  public provincia: string;
  private paginaNombre: any = ModalNombrePage;
  private paginaProvincia: any = ModalProvinciaPage;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) { }

  showModalNombre() {
    let profileModal = this.modalCtrl.create(this.paginaNombre);
    profileModal.present();
    profileModal.onDidDismiss((data) => { this.nombre = data })
  }
  showModalProvincia() {
    let profileModal = this.modalCtrl.create(this.paginaProvincia);
    profileModal.present();
    profileModal.onDidDismiss((data) => { this.provincia = data })
  }
}
