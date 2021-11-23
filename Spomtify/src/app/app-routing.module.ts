import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./spomtify/spomtify.module').then( m => m.SpomtifyPageModule)
  },
  {
    path: 'detalle-cancion',
    loadChildren: () => import('./detalle-cancion/detalle-cancion.module').then( m => m.DetalleCancionPageModule)
  },
  {
    path: 'detalle-cancion/:id',
    loadChildren: () => import('./detalle-cancion/detalle-cancion.module').then( m => m.DetalleCancionPageModule)
  },
  {
    path: 'detalle-cancion/:id/:id',
    loadChildren: () => import('./detalle-cancion/detalle-cancion.module').then( m => m.DetalleCancionPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
