import { Component, OnInit } from '@angular/core';
import { FirebaseDbService } from '../firebase-db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  saludo: string;
  cancionId = ''
  canciones = []
  getHora(){
    let hoy = new Date();
    let hora = hoy.getHours();
    if(hora>=6 && (hora<12)){
      this.saludo = '¡Buenos Días!';
    } else if(hora>=12 && hora<20){
      this.saludo = '¡Buenas Tardes!';
    }
    else{
      this.saludo = '¡Buenas Noches!';
    }
  }
  constructor(
    private db: FirebaseDbService
  ) {}
  obtenerCanciones(){
    this.db.getCanciones().subscribe(
      respuesta => {
        for(let key in respuesta){
          if(key != this.cancionId){
            respuesta[key]['key'] = key
            this.canciones.push(respuesta[key])
          }
        }
      }
    )
  }
  ngOnInit(){
    this.getHora();
    this.obtenerCanciones();
  }
}
