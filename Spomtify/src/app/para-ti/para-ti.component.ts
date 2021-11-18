import { Component, OnInit } from '@angular/core';
import { FirebaseDbService } from '../firebase-db.service';
@Component({
  selector: 'app-para-ti',
  templateUrl: './para-ti.component.html',
  styleUrls: ['./para-ti.component.scss'],
})
export class ParaTiComponent implements OnInit {
  canciones = []
  constructor(private db: FirebaseDbService) { }
  obtenerCanciones(){
    this.db.getRecomendadas().subscribe(
      respuesta => {
        for(let key in respuesta){
          respuesta[key]['key'] = key
          this.canciones.push(respuesta[key])
        }
      }
    )
  }
  ngOnInit() {
    this.obtenerCanciones();
  }
}
