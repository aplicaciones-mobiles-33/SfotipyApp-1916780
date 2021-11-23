import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseDbService } from '../firebase-db.service';

@Component({
  selector: 'app-detalle-cancion',
  templateUrl: './detalle-cancion.page.html',
  styleUrls: ['./detalle-cancion.page.scss'],
})
export class DetalleCancionPage implements OnInit {
  artistaID = '';
  cancionID = '';
  constructor(
    private db: FirebaseDbService,
    private rutaActivada: ActivatedRoute,
    private loc: Location
  ) { }
  ngOnInit() {
    console.log(this.rutaActivada)
  }

}
