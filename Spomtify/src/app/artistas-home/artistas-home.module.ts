import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ArtistasHomeComponent } from './artistas-home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ArtistasHomeComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [ArtistasHomeComponent]
})
export class ArtistasHomeModule { }
