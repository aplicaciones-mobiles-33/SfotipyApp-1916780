import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubirCancionesPage } from './subir-canciones.page';

const routes: Routes = [
  {
    path: '',
    component: SubirCancionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubirCancionesPageRoutingModule {}
