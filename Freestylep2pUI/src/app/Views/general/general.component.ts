import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Router } from '@angular/router';
import { WebsocketService } from 'src/app/Services/websocket.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  constructor(public _dataService: DataService, public router: Router, public _websocketService: WebsocketService) { }

  ngOnInit() {
  }


  public getUsers(){
    return this._dataService.freestylers;
  }

  public startBattle(){
    console.log("button works")
    this.router.navigate(['privado'])
  }

  public connectToSignalingServer(){
    this._websocketService.connect().subscribe(x =>{
    })
    this._websocketService.getUserList().subscribe(x => {
      console.log(x, "subject")
    })
  }

}
