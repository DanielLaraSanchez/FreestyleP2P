import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  socket: any;
  readonly URL: string = "ws://localhost:3000";


  constructor() { 
    this.socket = io(this.URL)
  }


 
  listen(eventName: string){
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data) => {
        subscriber.next(data);
      })
    })
  }

  emit(eventName: string, data: any){
    this.socket.emit(eventName, data);
  }

  setNickName(nickname: string){
    this.socket.emit('nickname', nickname);
  }




 

  
}
