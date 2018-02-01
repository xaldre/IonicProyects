import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular/components/action-sheet/action-sheet-controller';

/**
 * Generated class for the AlemanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aleman',
  templateUrl: 'aleman.html',
})
export class AlemanPage {
  letrero = "cornete";
  usuario:{nombre:string,telefono:number};

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlemanPage');
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: "Menu de cosas que hacer",
      buttons: [
        {
          text:  "Destructive",
          role: "destructive",
          //ejecuta el metodo si le haceis click
          handler: () => { this.letrero =  "Destructive" }
        }, {
          text: "Cancel",
          role: 'cancel',
          handler: () => { this.letrero = "Cancel" }
        }, {
          text: "Archive",
          handler: () => { this.letrero = "Archive" }
        }
      ]
    });
    actionSheet.present();
  }

}
