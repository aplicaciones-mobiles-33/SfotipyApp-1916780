import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecomendadasComponent } from './recomendadas.component';

const routes: Routes = [
  {
    path: '',
    component: RecomendadasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecomendadasRoutingModule {}
