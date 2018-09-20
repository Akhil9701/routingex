import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service'
@Component({
  selector: 'app-showallplayers',
  templateUrl: './showallplayers.component.html',
  styleUrls: ['./showallplayers.component.css']
})
export class ShowallplayersComponent implements OnInit {
players:any[]=[]
  constructor(private ps:PlayerService) { }

  ngOnInit() {
    this.ps.getAllPlayers().subscribe((res) => {
      console.log(res)
      this.players = res
    })
  }

}
