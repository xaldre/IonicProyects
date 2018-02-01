import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CochePage } from './coche';

@NgModule({
  declarations: [
    CochePage,
  ],
  imports: [
    IonicPageModule.forChild(CochePage),
  ],
})
export class CochePageModule {}
