import { AndroidFullScreen } from '@ionic-native/android-full-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { SqlProvider } from './../../providers/sql/sql';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Platform } from 'ionic-angular/platform/platform';

/**
 * Generated class for the HorarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-horario',
  templateUrl: 'horario.html',
})
export class HorarioPage {

  public matrix: any[] = [];
  public titulo: string;
  public style = ["cell-primary", "cell-secondary"];
  constructor(public navCtrl: NavController, public navParams: NavParams, public sql: SqlProvider, private toastCtrl: ToastController, private screen: ScreenOrientation, private platform: Platform, private fullScreen: AndroidFullScreen) {
    this.titulo = this.navParams.data;
    this.matrix = this.sql.horarioMatrix;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HorarioPage');
  }

  ionViewWillLoad() {
    this.screen.lock(this.screen.ORIENTATIONS.LANDSCAPE);
    this.fullScreen.isImmersiveModeSupported()
      .then(() => this.fullScreen.immersiveMode())
      .catch((error: any) => console.log(error));
  }

  showDescription(itemDescription) {
    let toast = this.toastCtrl.create({
      message: itemDescription,
      duration: 3000,
      position: 'bottom'
    }).present();
  }


  ionViewWillLeave() {
    this.screen.unlock();
    this.fullScreen.showSystemUI().then().catch();
  }

}
