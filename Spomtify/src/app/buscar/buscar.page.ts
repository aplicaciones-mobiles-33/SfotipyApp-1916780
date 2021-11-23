import { Component, OnInit } from '@angular/core';
import { FirebaseDbService } from '../firebase-db.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {
  busqueda: string;
  canciones = []
  cancionesFiltradas = []
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
  filtrarCanciones(){
    this.cancionesFiltradas = []
    for(let cancion of this.canciones){
      if(cancion['Titulo'].toLowerCase().includes(this.busqueda.toLowerCase())
          || cancion['Artista'].toLowerCase().includes(this.busqueda.toLowerCase())){
        this.cancionesFiltradas.push(cancion)
      }
    }
  }
  ngOnInit() {
    this.busqueda = ''
    this.obtenerCanciones()
  }

}
