import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleCancionPage } from './detalle-cancion.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleCancionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleCancionPageRoutingModule {}
