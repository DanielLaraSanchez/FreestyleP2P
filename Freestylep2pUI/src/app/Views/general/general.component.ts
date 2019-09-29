import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Router } from '@angular/router';
import { WebsocketService } from 'src/app/Services/websocket.service';
// import { Peer } from 'simple-peer';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})

export class GeneralComponent implements OnInit {
  socket;
  peersArray;
  constructor(public _webSocketService: WebsocketService, public router: Router) {
    this.socket = this._webSocketService.socket;
   }

  ngOnInit() {
// this.getPeersOnline();
this.peersArray = this.getPeersOnline()

  }

  nextPage(){
    this.router.navigate(['privado'])
  }

  getPeersOnline(){
    let arrayOfPeers;
    this._webSocketService.listen('getAllPeers').subscribe((data)=>{
      console.log(data)
      this.peersArray = data;
      arrayOfPeers = data;
    });
    return arrayOfPeers;
  }


 

 
}
