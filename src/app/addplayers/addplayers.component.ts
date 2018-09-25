import { Component, OnInit } from '@angular/core';
import { Player } from '../model/player.model';
import { PlayerService } from '../services/player.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-addplayers',
  templateUrl: './addplayers.component.html',
  styleUrls: ['./addplayers.component.css']
})
export class AddplayersComponent implements OnInit {
  url:string=''
  ply: Player
  constructor(private ps: PlayerService, private rt: Router) {
    this.ply = new Player()
  }
  btnaddplayers(plyFrm) {
    if (plyFrm.valid) {
      this.ply.image=this.ply.image.replace('data:image/jpeg;base64,','')
      this.ply.image=this.ply.image.replace('data:image/jpg;base64,','')
      this.ply.image=this.ply.image.replace('data:image/png;base64,','')
      console.log(JSON.stringify(this.ply))
      this.ps.addPlayers(this.ply).subscribe((data) => {
        console.log(data);
        alert(JSON.stringify(data))
      this.rt.navigate(['showallplayers'])
      })
    }

  }
fileSelect(event){
  if(event.target.files){
    var reader=new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=(ev:any)=>{
      this.url=ev.target.result
      this.ply.image=reader.result
    }
  }
}

  ngOnInit() {
  }

}

