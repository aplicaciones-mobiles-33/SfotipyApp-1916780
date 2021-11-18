import { Component, OnInit } from '@angular/core';
import { FirebaseDbService } from '../firebase-db.service';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.page.html',
  styleUrls: ['./artistas.page.scss'],
})
export class ArtistasPage implements OnInit {
  artistas = []
  artistaKey: Object = {}
  constructor(private db: FirebaseDbService) { }
  obtenerArtistas(){
    this.db.getCanciones().subscribe(
      respuesta =>{
        for(let key in respuesta){
          respuesta[key]['key'] = key
          if(!(respuesta[key]['autor'] in this.artistaKey)){
            this.artistaKey[respuesta[key]['autor']] = key
          }
        }
        for(let artista in this.artistaKey){
          this.artistas.push(respuesta[this.artistaKey[artista]])
          //this.artistas.push(respuesta[this.artistaKey])
        }
      }
    )
  }
  ngOnInit() {
    this.obtenerArtistas();
  }

}
