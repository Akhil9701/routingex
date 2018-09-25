import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { PlayerService } from '../services/player.service';
import { Player } from '../model/player.model';

@Component({
  selector: 'app-updateplayers',
  templateUrl: './updateplayers.component.html',
  styleUrls: ['./updateplayers.component.css']
})
export class UpdateplayersComponent implements OnInit {
  ply:Player
  constructor(private acr:ActivatedRoute,private ps:PlayerService,private rt:Router) {
    this.ply=new Player();
   }

   updatePlayers(plyFrm){
     if(plyFrm.valid){
       this.ps.updatePlayers(this.ply).subscribe((data)=>{
         this.rt.navigate(['showallplayers'])
       })
     }
   }
  ngOnInit() {
    let i=parseInt(this.acr.snapshot.params["id"])
    this.ps.getPlayerById(i).subscribe((data)=>{
      this.ply=data[0];
    })
  }

}
