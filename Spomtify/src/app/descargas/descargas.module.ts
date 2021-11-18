import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { DescargasComponent } from './descargas.component';
import { DescargasRoutingModule } from './descargas-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescargasRoutingModule,
    RouterModule.forChild([{path: '', component: DescargasComponent}])
  ],
  declarations: [DescargasComponent],
  exports: [DescargasComponent]
})
export class DescargasModule {}
