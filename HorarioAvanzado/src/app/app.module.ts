import { CursosPage } from './../pages/cursos/cursos';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http';

import { SqlProvider } from '../providers/sql/sql';
import { SQLite } from '@ionic-native/sqlite';
import { HorarioPage } from '../pages/horario/horario';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';


@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    CursosPage,
    HorarioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    CursosPage,
    HorarioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SqlProvider,
    SQLite, 
    ScreenOrientation,
    AndroidFullScreen
  ]
})
export class AppModule {}
