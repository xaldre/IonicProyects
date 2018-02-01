import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MiTabPage } from './mi-tab';

@NgModule({
  declarations: [
    MiTabPage,
  ],
  imports: [
    IonicPageModule.forChild(MiTabPage),
  ]
})
export class MiTabPageModule {}
