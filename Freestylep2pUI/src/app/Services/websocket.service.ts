import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';
import { WSAEACCES } from 'constants';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  URL = 'ws://localhost:6503';
  constructor() { }

  private subject: Rx.Subject<MessageEvent>

  public connect(): Rx.Subject<MessageEvent>{
    if(!this.subject){
      this.subject = this.create();
      console.log("Succesfully Connect: " + this.URL)
    }

    return this.subject;
  }

  public create():Rx.Subject<MessageEvent>{
    let ws = new WebSocket(this.URL, 'json');

    let observable = Rx.Observable.create(
      (obs: Rx.Observer<MessageEvent>) => {
        ws.onmessage = obs.next.bind(obs);
        ws.onerror = obs.error.bind(obs);
        ws.onclose = obs.complete.bind(obs);
        return ws.close.bind(ws);
      }
    )

    let observer = {
      next: (data: Object) => {
        if(ws.readyState === WebSocket.OPEN){
          ws.send(JSON.stringify(data));
        }
      }
    }

   

    return Rx.Subject.create(observer, observable)
  }

 

  
}
