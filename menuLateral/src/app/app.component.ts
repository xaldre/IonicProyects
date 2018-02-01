import { HomePage } from './../pages/home/home';
import { AlemanPage } from './../pages/aleman/aleman';
import { Component,ViewChild } from '@angular/core';
import { Nav,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // el control de nagegacion para el arranque de la aplicacion
  @ViewChild(Nav) nav: Nav;
  rootPage:any = AlemanPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  abrirAleman(){
    //llama al control de navegacion de app que es diferente al de una pagina
    this.nav.setRoot(AlemanPage);
    //probar push y setroot
    // this.nav.push(AlemanPage);
  }
  abrirHome(){
    this.nav.setRoot(HomePage);
  }
}

