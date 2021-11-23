import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ArtistasHomeModule } from '../artistas-home/artistas-home.module';
import { CancionesHomeModule } from '../canciones-home/canciones-home.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ArtistasHomeModule,
    CancionesHomeModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
