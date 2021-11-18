import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancionComponent } from './cancion.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CancionRoutingModule } from './cancion-routing.module';



@NgModule({
  declarations: [CancionComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{path: '', component: CancionComponent}]),
    CancionRoutingModule
  ],
  exports: [CancionComponent]
})
export class CancionModule { }
