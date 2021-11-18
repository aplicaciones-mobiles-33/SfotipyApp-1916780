import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpomtifyPageRoutingModule } from './spomtify-routing.module';

import { SpomtifyPage } from './spomtify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpomtifyPageRoutingModule
  ],
  declarations: [SpomtifyPage]
})
export class SpomtifyPageModule {}
