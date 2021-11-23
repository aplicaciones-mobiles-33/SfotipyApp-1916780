import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleCancionPageRoutingModule } from './detalle-cancion-routing.module';

import { DetalleCancionPage } from './detalle-cancion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleCancionPageRoutingModule
  ],
  declarations: [DetalleCancionPage]
})
export class DetalleCancionPageModule {}
