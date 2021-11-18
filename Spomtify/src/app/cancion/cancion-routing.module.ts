import { NgModule } from '@angular/core';
import { CancionComponent } from './cancion.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CancionComponent
  }
]

@NgModule(
  {
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  }
)
export class CancionRoutingModule { }
