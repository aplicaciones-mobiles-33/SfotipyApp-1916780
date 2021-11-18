import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritasComponent } from './favoritas.component';
import { IonicModule } from '@ionic/angular';
import { FavoritasRoutingModule } from './favoritas-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FavoritasComponent],
  imports: [
    CommonModule,
    IonicModule,
    FavoritasRoutingModule,
    RouterModule.forChild([{path: '', component: FavoritasComponent}])
  ],
  exports: [FavoritasComponent]
})
export class FavoritasModule { }
