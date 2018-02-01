import { CiudadProvider } from './../../providers/ciudad/ciudad';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public list: any[] = [];
  constructor(public navCtrl: NavController, public ciudadesProv: CiudadProvider) {
    this.list = ciudadesProv.list;
  }

}
