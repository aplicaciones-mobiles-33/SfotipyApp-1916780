import { Component, OnInit } from '@angular/core';
import { FirebaseDbService } from '../firebase-db.service';

@Component({
  selector: 'app-descargas',
  templateUrl: './descargas.component.html',
  styleUrls: ['./descargas.component.scss'],
})
export class DescargasComponent implements OnInit {
  canciones_descargadas = []
  constructor(
    private db: FirebaseDbService
  ) {}
  obtenerDescargas(){
    this.db.getCanciones().subscribe(
      respuesta => {
        for(let key in respuesta){
          if(respuesta[key]['descargada']){
            respuesta[key]['key'] = key;
            this.canciones_descargadas.push(respuesta[key])
          }
        }
      }
    )
  }
  ngOnInit() {
    this.obtenerDescargas()
  }
}
