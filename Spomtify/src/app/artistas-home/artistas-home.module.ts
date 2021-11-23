import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistasHomeComponent } from './artistas-home.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ArtistasHomeComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ArtistasHomeComponent]
})
export class ArtistasHomeModule { }
