import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BibliotecaPage } from './biblioteca.page';

const routes: Routes = [
  {
    path: '',
    component: BibliotecaPage,
    children: [
      {
        path: 'playlist-tab',
        loadChildren: () => import('../playlist-tab/playlist-tab.module').then(m=>m.PlaylistsPageModule)
      },
      {
        path: 'descargas',
        loadChildren: () => import('../descargas/descargas.module').then(m => m.DescargasModule)
      },
      {
        path: 'artistas',
        loadChildren: () => import('../artistas/artistas.module').then(m => m.ArtistasPageModule)
      },
      {
        path: '',
        redirectTo: 'playlist-tab',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BibliotecaPageRoutingModule {}
