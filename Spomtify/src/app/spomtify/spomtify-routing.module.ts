import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpomtifyPage } from './spomtify.page';


const routes: Routes = [
  {
    path: 'spomtify',
    component: SpomtifyPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'buscar',
        loadChildren: () => import('../buscar/buscar.module').then(m => m.BuscarPageModule)
      },
      {
        path: 'biblioteca',
        loadChildren: () => import('../biblioteca/biblioteca.module').then(m => m.BibliotecaPageModule)
      },
      {
        path: 'cancion/:id',
        loadChildren: () => import('../cancion/cancion.module').then(m => m.CancionModule)
      },
      {
        path: 'playlist/favoritas',
        loadChildren: () => import('../favoritas/favoritas.module').then(m => m.FavoritasModule)
      },
      {
        path: 'playlist/:id', 
        loadChildren: () => import('../playlist/playlist.module').then(m => m.PlaylistModule)
      },
      {
        path: 'artista/:id',
        loadChildren: () => import('../artist/artist.module').then(m => m.ArtistModule)
      },
      {
        path: '',
        redirectTo: '/spomtify/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/spomtify/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpomtifyPageRoutingModule {}
