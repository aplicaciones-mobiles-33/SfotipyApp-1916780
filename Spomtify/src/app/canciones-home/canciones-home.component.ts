import { Component, OnInit } from '@angular/core';
import { FirebaseDbService } from '../firebase-db.service';

@Component({
  selector: 'app-canciones-home',
  templateUrl: './canciones-home.component.html',
  styleUrls: ['./canciones-home.component.scss'],
})
export class CancionesHomeComponent implements OnInit {
  canciones = []
  constructor(private db: FirebaseDbService) { }
  obtenerCanciones(){
    this.db.getArtistas().subscribe(
      respuesta=>{
        for(let artista in respuesta){
          for(let cancion in respuesta[artista]['Canciones']){
            respuesta[artista]['Canciones'][cancion]['cancionID'] = cancion
            respuesta[artista]['Canciones'][cancion]['artistaID'] = artista
            respuesta[artista]['Canciones'][cancion]['Artista'] = respuesta[artista]['Nombre']
            this.canciones.push(respuesta[artista]['Canciones'][cancion])
          }
        }
      }
    )
  }
  ngOnInit() {
    this.obtenerCanciones();
  }

}
