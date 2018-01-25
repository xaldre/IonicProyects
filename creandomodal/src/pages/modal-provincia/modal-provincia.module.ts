import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalProvinciaPage } from './modal-provincia';

@NgModule({
  declarations: [
    ModalProvinciaPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalProvinciaPage),
  ],
})
export class ModalProvinciaPageModule {}
