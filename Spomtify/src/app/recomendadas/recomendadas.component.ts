import { Component, OnInit } from '@angular/core';
import { CancionModel } from '../cancion-model';
import { FirebaseDbService } from '../firebase-db.service';
@Component({
  selector: 'app-recomendadas',
  templateUrl: './recomendadas.component.html',
  styleUrls: ['./recomendadas.component.scss'],
})
export class RecomendadasComponent implements OnInit {
  recomendadas: CancionModel[] = [];
  constructor(private db: FirebaseDbService) { }
  obtenerRecomendadas(){
    this.db.getRecomendadas().subscribe(
      respuesta =>{
        for(let key in respuesta){
          respuesta[key]['key'] = key;
          this.recomendadas.push(respuesta[key])
        }
      }
    )
  }
  ngOnInit() {
    this.obtenerRecomendadas();
  }

}
