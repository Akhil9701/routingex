import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Player } from '../model/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  DeletePlayer(): any {
    throw new Error("Method not implemented.");
  }


  apiUrl: string = "http://localhost:4600/player";
  constructor(private ht: HttpClient) { }

  getAllPlayers(): Observable<any> {
    return this.ht.get(this.apiUrl, { responseType: 'json' })
  }

  getPlayerById(i: number): Observable<any> {
    return this.ht.get(this.apiUrl + '/' + i, { responseType: 'json' })
  }
  addPlayers(playerobj: Player): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    }
    return this.ht.post(this.apiUrl, JSON.stringify(playerobj), httpOptions)
  };
  deleteplayer(id: number): Observable<any> {
    return this.ht.delete(this.apiUrl + '/' + id, { responseType: 'json' })
  }

  updatePlayers(ply: Player): Observable<any> {
    const headers = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    return this.ht.put(this.apiUrl, JSON.stringify(ply), headers)

  }
}


