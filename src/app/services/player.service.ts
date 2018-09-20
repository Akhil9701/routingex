import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  apiUrl : string ="http://localhost:4600/player";
  constructor(private ht:HttpClient) { }
  getAllPlayers():Observable<any>{
    return this.ht.get(this.apiUrl, { responseType: 'json' })
  }
  
  getPlayerById() {
  }
}
