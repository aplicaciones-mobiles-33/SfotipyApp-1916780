import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseDbService } from '../firebase-db.service';

@Component({
  selector: 'app-favoritas',
  templateUrl: './favoritas.component.html',
  styleUrls: ['./favoritas.component.scss'],
})
export class FavoritasComponent implements OnInit {
  favoritas = [];
  url_imagen = '';
  volver(){
    this.loc.back();
  }
  constructor(
    private db: FirebaseDbService,
    private loc: Location,
    private rutaActiva: ActivatedRoute
  ) { }
  obtenerFavoritos(){
    this.db.getCanciones().subscribe(
      response => {
        for(let res in response){
          if(response[res]['fav']){
            response[res]['key'] = res
            this.favoritas.push(response[res])
          }
        }
        this.url_imagen = this.favoritas[0]['url_imagen']
      }
    )
  }

  ngOnInit() {
    this.obtenerFavoritos();
  }

}
