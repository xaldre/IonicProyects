import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalNombrePage } from './modal-nombre';

@NgModule({
  declarations: [
    ModalNombrePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalNombrePage),
  ],
})
export class ModalNombrePageModule {}
