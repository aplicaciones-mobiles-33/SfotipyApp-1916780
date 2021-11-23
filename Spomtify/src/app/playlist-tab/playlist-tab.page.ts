import { Component, OnInit } from '@angular/core';
import { FirebaseDbService } from '../firebase-db.service';
import { Playlist } from '../playlist';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlist-tab.page.html',
  styleUrls: ['./playlist-tab.page.scss'],
})
export class PlaylistsTabPage implements OnInit {
  playlists: Playlist[] = []
  constructor(private db: FirebaseDbService) { }
  obtenerPlaylists(){
    this.db.getAllPlaylists().subscribe(
      res =>{
        for(let r in res){
          res[r]['key'] = r;
          this.db.getCancion(res[r].canciones[0]).subscribe(
            output =>{
              res[r]['url_imagen'] = output['url_imagen']
            }
          )
          this.playlists.push(res[r]);
        }
      }
    )
  }
  ngOnInit() {
    this.obtenerPlaylists();
  }

}
