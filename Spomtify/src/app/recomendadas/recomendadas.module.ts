import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecomendadasComponent } from './recomendadas.component';
import { IonicModule } from '@ionic/angular';
import { RecomendadasRoutingModule } from './recomendadas-routing.module';



@NgModule({
  declarations: [RecomendadasComponent],
  imports: [
    CommonModule,
    IonicModule,
    RecomendadasRoutingModule
  ],
  exports: [RecomendadasComponent]
})
export class RecomendadasModule { }
