import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistComponent } from './artist.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ArtistRoutingModule } from './artist-routing.module';



@NgModule({
  declarations: [ArtistComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{path: '', component: ArtistComponent}]),
    ArtistRoutingModule
  ],
  exports: [ArtistComponent]
})
export class ArtistModule { }
