import { NgModule } from '@angular/core';
import { ArtistComponent } from './artist.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ArtistComponent
  }
]

@NgModule(
  {
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  }
)
export class ArtistRoutingModule { }
