import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseDbService } from '../firebase-db.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
  artistId: any;
  canciones = []
  nombre_artista = ''
  url_imagen = ''
  volver(){
    this.loc.back();
  }
  constructor(
    private loc: Location,
    private rutaActiva: ActivatedRoute,
    private db: FirebaseDbService
  ) { }
  obtenerDetalleArtista(param){
    this.db.getArtista(param).subscribe(
      respuesta =>{
        this.nombre_artista = respuesta['autor']
        this.url_imagen = respuesta['url_imagen']
      }
    )
  }
  obtenerCancionesArtista(){
    this.db.getCanciones().subscribe(
      respuesta =>{
        console.log(respuesta)
        for(let key in respuesta){
          if(respuesta[key]['autor'] == this.nombre_artista){
            respuesta[key]['key'] = key
            this.canciones.push(respuesta[key])
          }
        }
      }
    )
    console.log(this.canciones);
  }
  ngOnInit() {
    this.artistId = this.rutaActiva.snapshot.params.id
    this.obtenerDetalleArtista(this.artistId);
    this.obtenerCancionesArtista();
  }

}
