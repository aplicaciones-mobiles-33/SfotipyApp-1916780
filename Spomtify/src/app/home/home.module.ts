import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ParaTiModule } from '../para-ti/para-ti.module';
import { ArtistasHomeModule } from '../artistas-home/artistas-home.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ParaTiModule,
    ArtistasHomeModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
