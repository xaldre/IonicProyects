import { MiTabPage } from './../pages/mi-tab/mi-tab';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CochePage } from '../pages/coche/coche';
import { AmotoPage } from '../pages/amoto/amoto';
import { GuaguaPage } from '../pages/guagua/guagua';
import { ApatitaPage } from '../pages/apatita/apatita';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MiTabPage,
    CochePage,
    AmotoPage,
    GuaguaPage, ApatitaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MiTabPage,
    CochePage,
    AmotoPage,
    GuaguaPage, ApatitaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
