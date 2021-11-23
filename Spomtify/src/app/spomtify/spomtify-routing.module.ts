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
        loadChildren: () => import('../buscar/buscar.module').then( m => m.BuscarPageModule)
      },
      {
        path: 'biblioteca',
        loadChildren: () => import('../biblioteca/biblioteca.module').then( m => m.BibliotecaPageModule)
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
