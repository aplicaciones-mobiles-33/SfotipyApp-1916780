import { Component, OnInit } from '@angular/core';
import { FirebaseDbService } from '../firebase-db.service';

@Component({
  selector: 'app-artistas-home',
  templateUrl: './artistas-home.component.html',
  styleUrls: ['./artistas-home.component.scss'],
})
export class ArtistasHomeComponent implements OnInit {
  artistas = []
  constructor(private db: FirebaseDbService) { }
  obtenerArtistas(){
    this.db.getArtistas().subscribe(
      respuesta =>{
        for(let id in respuesta){
          respuesta[id]['id'] = id
          this.artistas.push(respuesta[id])
        }
      }
    )
  }
  ngOnInit() {
    this.obtenerArtistas()
  }

}
