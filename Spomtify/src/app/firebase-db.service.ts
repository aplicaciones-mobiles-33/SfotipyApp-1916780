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

  getArtistas(){
    return this.http.get('https://spomtify-5162b-default-rtdb.firebaseio.com/Artistas.json')
  }
}
