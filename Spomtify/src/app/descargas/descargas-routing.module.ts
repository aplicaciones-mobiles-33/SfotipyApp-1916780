import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescargasComponent } from './descargas.component';

const routes: Routes = [
  {
    path: '',
    component: DescargasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescargasRoutingModule {}
