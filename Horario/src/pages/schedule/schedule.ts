import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {
  public daysColSpan: number[] = [1, 2, 3, 4];
  public hoursRowSpan: number[] = [1, 2, 3, 4, 5, 6];
  public hoursColSpan: number[] = [1, 2, 3, 4, 5, 6];
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public screen: ScreenOrientation) {
    
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => this.screen.lock(this.screen.ORIENTATIONS.PORTRAIT)).catch(e => console.log(e.toString()));
  }

}
