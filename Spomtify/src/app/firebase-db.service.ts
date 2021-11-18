import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FirebaseDbService {

  constructor(
    private http: HttpClient
  ) {}
  resArray = [];
  postCancion(infoCancion){
    return this.http.post('https://spomtify-5162b-default-rtdb.firebaseio.com/canciones.json', infoCancion);
  }
  getRecomendadas(){
    return this.http.get('https://spomtify-5162b-default-rtdb.firebaseio.com/recomendadas.json')
  }
  getCancion(idCancion){
    return this.http.get('https://spomtify-5162b-default-rtdb.firebaseio.com/canciones/'+idCancion+'.json')
  }
  getCanciones(){
    return this.http.get('https://spomtify-5162b-default-rtdb.firebaseio.com/canciones.json')
  }
  getAllPlaylists(){
    return this.http.get('https://spomtify-5162b-default-rtdb.firebaseio.com/playlists.json')
  }
  getPlaylist(idPlaylist){
    return this.http.get('https://spomtify-5162b-default-rtdb.firebaseio.com/playlists/'+idPlaylist+'.json')
  }
  putPlaylists(playlistID, canciones){
    return this.http.put('https://spomtify-5162b-default-rtdb.firebaseio.com/playlists/'+playlistID+'/canciones.json', canciones)
  }
  postPlaylists(infoPlaylist){
    return this.http.post('https://spomtify-5162b-default-rtdb.firebaseio.com/playlists.json', infoPlaylist)
  }
  putFav(idCancion, fav){
    return this.http.put('https://spomtify-5162b-default-rtdb.firebaseio.com/canciones/'+idCancion+'/fav.json', fav)
  }
  deletePlaylist(idPlaylist){
    return this.http.delete('https://spomtify-5162b-default-rtdb.firebaseio.com/playlists/'+idPlaylist+'.json')
  }
  getArtista(idArtista){
    return this.http.get('https://spomtify-5162b-default-rtdb.firebaseio.com/canciones/'+idArtista+'.json')
  }
  putDescargar(idCancion, descargada){
    return this.http.put('https://spomtify-5162b-default-rtdb.firebaseio.com/canciones/'+idCancion+'/descargada.json', descargada)
  }
}
