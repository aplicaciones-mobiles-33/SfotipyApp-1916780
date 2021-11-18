import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParaTiComponent } from './para-ti.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ParaTiComponent],
  imports: [
    CommonModule, 
    IonicModule,
    RouterModule
  ],
  exports: [ParaTiComponent]
})
export class ParaTiModule { }
