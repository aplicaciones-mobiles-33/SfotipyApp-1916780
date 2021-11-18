import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistComponent } from './playlist.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PlaylistComponent],
  imports: [
    CommonModule,
    IonicModule,
    PlaylistRoutingModule,
    RouterModule.forChild([{path: '', component: PlaylistComponent}])
  ],
  exports: [PlaylistComponent]
})
export class PlaylistModule { }
