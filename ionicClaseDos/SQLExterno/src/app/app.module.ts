import { CiudadProvider } from './../providers/ciudad/ciudad';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SQLite } from '@ionic-native/sqlite';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http';
//Como no tenemos tiempo para aprender por nuestra cuenta cómo se hace correctamente todo
//vamos a utilizar la guia el que amable profesor nos proporciona

//1. Crear el proyecto con integración de cordoba
//      si no funciona se puede usar un comando para añadir cordova
//2. instalar el sqlite externo "ionic cordova plugin add cordova-sqlite-ext" y rezar (mucho)
//3. Como si no hubiese hecho nada de lo anterior, instalamos el sqlite plugin normal
//      "ionic cordova plugin add cordova-sqlite-storage" y rezamos (mucho)
//4. una vez hecho se usa "npm install —save @ionic-native/sqlite" y prueba a arrancar
//      Todo provider tiene que ser añadido a providers:[], y todos los nativos también.
//      Si no lo reconoce para hacer los autoImports se le añade a mano "import { SQLite } from '@ionic-native/sqlite';"
//      Si dice que no existe cordova, lo instalamos "npm install -g cordova"
//5. instala la plataforma android "ionic cordova platform add android"
//6. ahora hacemos que arranque con android

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    CiudadProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
