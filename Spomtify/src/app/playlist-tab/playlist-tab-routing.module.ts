import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistsTabPage } from './playlist-tab.page';

const routes: Routes = [
  {
    path: '',
    component: PlaylistsTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaylistsTabPageRoutingModule {}
