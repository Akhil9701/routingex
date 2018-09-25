import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service'
import { Router } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-showallplayers',
  templateUrl: './showallplayers.component.html',
  styleUrls: ['./showallplayers.component.css']
})
export class ShowallplayersComponent implements OnInit {
players:any[]=[]
  constructor(private ps:PlayerService ,private rt:Router) { }

  ngOnInit() {
    this.ps.getAllPlayers().subscribe((res) => {
      console.log(res)
      this.players = res
    })
  }
  btnEdit(id){
    this.rt.navigate(['updateplayers/'+id])
  }
  btnDelete(id:number){
    this.ps.deleteplayer(id).subscribe((res)=>{
      alert('deleted')
     location.reload()
    })
  }

}
