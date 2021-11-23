import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CancionesHomeComponent } from './canciones-home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CancionesHomeComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [CancionesHomeComponent]
})
export class CancionesHomeModule { }
