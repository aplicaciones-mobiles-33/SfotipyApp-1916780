import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaylistsTabPageRoutingModule } from './playlist-tab-routing.module';
import { PlaylistsTabPage } from './playlist-tab.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaylistsTabPageRoutingModule,
    RouterModule
  ],
  declarations: [PlaylistsTabPage]
})
export class PlaylistsPageModule {}
