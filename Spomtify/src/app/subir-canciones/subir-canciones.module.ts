import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubirCancionesPageRoutingModule } from './subir-canciones-routing.module';

import { SubirCancionesPage } from './subir-canciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubirCancionesPageRoutingModule
  ],
  declarations: [SubirCancionesPage]
})
export class SubirCancionesPageModule {}
