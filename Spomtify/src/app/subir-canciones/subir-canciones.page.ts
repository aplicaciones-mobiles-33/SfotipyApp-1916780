import { Component, OnInit } from '@angular/core';
import { FirebaseDbService } from '../firebase-db.service';
import { CancionModel } from '../cancion-model';
import { Playlist } from '../playlist';

@Component({
  selector: 'app-subir-canciones',
  templateUrl: './subir-canciones.page.html',
  styleUrls: ['./subir-canciones.page.scss'],
})
export class SubirCancionesPage implements OnInit {

  constructor(private db: FirebaseDbService) { }
  cancion: CancionModel;
  clave: string;
  nombre_playlist: string;
  playlists: Playlist[] = []
  playlist: Playlist;
  crearCancion(params: {titulo: string, url_imagen: string, autor: string}){
    this.db.postCancion(params).subscribe(res =>{
      console.log(res);
    })
  }
  subirAPlaylist(){
    let params = {
      nombre: this.nombre_playlist,
      canciones: [this.clave]
    }
    let existe = false;
    this.db.getAllPlaylists().subscribe(res=>{
      for(let r in res){
        if(res[r]['nombre']==this.nombre_playlist){
          existe = true;
          res[r]['canciones'].push(this.clave);
          this.db.putPlaylists(r, res[r]['canciones']).subscribe(
            out=>
            {
              console.log(out)
            }
          );
        }
      }
      if(!existe){
        this.db.postPlaylists(params).subscribe(res=>{
          console.log(res);
        })
      }
    })
  }
  ngOnInit() {
    this.cancion = {
      titulo: '',
      url_imagen: '',
      autor: '',
      fav: false,
      descargada: false
    }
  }

}
