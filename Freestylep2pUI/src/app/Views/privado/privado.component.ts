import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketService } from 'src/app/Services/websocket.service';


@Component({
  selector: 'app-privado',
  templateUrl: './privado.component.html',
  styleUrls: ['./privado.component.css']
})
export class PrivadoComponent implements OnInit {
  client = {};
  remoteSocketId;
  peerConnection;
  socket;
  pairedPeerWaiting = false;
  sender;
  peerObject = {};
  userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
  words;
  isConnected: boolean = false;
  constructor(public router: Router, public _webSocketService: WebsocketService) {
    this.socket = this._webSocketService.socket;
   }
 
 
  ngOnInit() {
    this.waitForInstructions();
    this.setNickNameOnLogin();
    // this.readyToBattle();

  }

  setNickNameOnLogin(){
    let userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
    let nickname: string = userDetails.name;

    console.log(userDetails)
    this.socket.emit('setnickname', nickname);
  }

   
  nextPage(){
    this.router.navigate([''])
  }

  putWordsInPage(words){
    var text = words;
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 10000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}
}


  waitForInstructions() {
    this.socket.on('onOffer', (senderId, words) => {
      this.words = words;
      this.putWordsInPage(words.peer1)
      console.log(words, "words")
      this.isConnected = true;
      console.log('funciona on offer', senderId)
      this.onOffer(this.socket, this.userDetails);
    })

    this.socket.on('onSendOffer', (recieverId, words) => {
      this.words = words;
      this.putWordsInPage(words.peer2)
      this.isConnected = true;

      console.log(words, "words")
      console.log('funciona sendOffer', recieverId)

      this.sendOffer(this.socket, recieverId, this.userDetails);
    })
  }

  onOffer(socket, userDetails) {
    let peerConnection = new RTCPeerConnection();
    let video = document.createElement('video');
    let div = document.getElementById('webCamCol1');
    video.height = 400;
    video.width = 400;
    video.style.objectFit = "cover";
    div.appendChild(video);
    //////////////////////////////////////////////////
    let videoOtherPeer = document.createElement('video');
    videoOtherPeer.height = 400;
    videoOtherPeer.width = 400;
    videoOtherPeer.style.objectFit = "cover";

    let videoOtherPeerDiv = document.getElementById('webCamCol2');
    videoOtherPeerDiv.appendChild(videoOtherPeer);
    var constraints = { audio: false, video: { width: 1280, height: 1720 } };
    navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
      video.srcObject = stream;
      video.play();
    }).catch(error => console.error(error));

    ///////////////////////////////////////////////////    var constraints = { audio: false, video: { width: 1280, height: 720 } };
    socket.on('offer', function (id, description, peerUserDetails) {
      peerConnection.setRemoteDescription(description)
        .then(() => peerConnection.createAnswer())
        .then(sdp => peerConnection.setLocalDescription(sdp))
        .then(function () {

          socket.emit('answer', id, peerConnection.localDescription, userDetails);
        });
      let stream = video.srcObject;

      (<MediaStream>stream).getTracks().forEach(track => {
        this.sender = peerConnection.addTrack(track, <MediaStream>stream)
      });

      peerConnection.ontrack = function (event) {
        videoOtherPeer.srcObject = event.streams[0];
        videoOtherPeer.play()
      };
      peerConnection.onicecandidate = function (event) {
        if (event.candidate) {
          socket.emit('candidate', id, event.candidate);
        }
      };
      let otherPeerWrapperDiv = document.getElementById('peerWrapper')
      let otherPeerH3 = document.createElement('h3');
      otherPeerH3.textContent = peerUserDetails.name;
      otherPeerH3.style.color = 'white'
      otherPeerWrapperDiv.appendChild(otherPeerH3)
      let myWrapperDiv = document.getElementById('myWrapper')
      let myH3 = document.createElement('h3');
      myH3.textContent = userDetails.name;
      myH3.style.color = 'white'
      myWrapperDiv.appendChild(myH3)
      this.peerObject = peerUserDetails;
      console.log(peerUserDetails)
    })

    socket.on('candidate', function (id, candidate) {
      peerConnection.addIceCandidate(new RTCIceCandidate(candidate))
        .catch(e => console.error(e));
    });
    socket.on('broadcaster', function () {
      socket.emit('watcher');
    });

    socket.on('bye', function () {
      peerConnection.removeTrack(this.sender);
      peerConnection.close();
      peerConnection = new RTCPeerConnection();
      // peerConnection = undefined;
      video.hidden = true;
      videoOtherPeer.hidden = true;
      let stream = video.srcObject;
      (<MediaStream>stream).getTracks().forEach(track => {
        track.stop();
      });
      let otherPeerStream = videoOtherPeer.srcObject;
      (<MediaStream>otherPeerStream).getTracks().forEach(track => {
        track.stop();
      });
      socket.emit('imfree', socket.id)
      window.location.reload();
    });


  }
  sendOffer(socket, recieverId, userDetails) {
    let peerConnections = {};
    let peerConnection;
    let video = document.createElement('video');
    let div = document.getElementById('webCamCol1');
    video.height = 400;
    video.width = 400;
    video.style.objectFit = "cover";
    div.appendChild(video);
    ///////////////////////////////////////
    let videoOtherPeer = document.createElement('video');
    videoOtherPeer.height = 400;
    videoOtherPeer.width = 400;
    videoOtherPeer.style.objectFit = "cover";
    let videoOtherPeerDiv = document.getElementById('webCamCol2');
    videoOtherPeerDiv.appendChild(videoOtherPeer);
    if (Object.keys(peerConnections).length < 2) {
      var constraints = { audio: false, video: { width: 1280, height: 720 } };
      navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
        video.srcObject = stream;
        video.play();
        socket.emit('broadcaster');
      }).catch(error => console.error(error));

      socket.on('answer', function (id, description, peerUserDetails) {
        peerConnections[id].setRemoteDescription(description);
        this.peerObject = peerUserDetails;
        let otherPeerWrapperDiv = document.getElementById('peerWrapper')
        let otherPeerH3 = document.createElement('h3');
        otherPeerH3.textContent = peerUserDetails.name;
        otherPeerH3.style.color = 'white'
        otherPeerWrapperDiv.appendChild(otherPeerH3)
        let myWrapperDiv = document.getElementById('myWrapper')
        let myH3 = document.createElement('h3');
        myH3.textContent = userDetails.name;
        myH3.style.color = 'white'
        myWrapperDiv.appendChild(myH3)
        console.log(peerUserDetails)
      });


      socket.on('watcher', function () {
        peerConnection = new RTCPeerConnection();
        peerConnections[recieverId] = peerConnection;
        let stream = video.srcObject;
        (<MediaStream>stream).getTracks().forEach(track => {
          this.sender = peerConnection.addTrack(track, <MediaStream>stream)
        });
        peerConnection.createOffer().then(sdp => peerConnection.setLocalDescription(sdp)).then(function () {
          console.log(userDetails)
          socket.emit('offer', recieverId, peerConnection.localDescription, userDetails );
        });
        peerConnection.onicecandidate = function (event) {
          if (event.candidate) {
            socket.emit('candidate', recieverId, event.candidate);
          }
        };

        peerConnection.ontrack = function (event) {
          videoOtherPeer.srcObject = event.streams[0];
          videoOtherPeer.play()
        };
      });

      socket.on('candidate', function (id, candidate) {
        peerConnections[id].addIceCandidate(new RTCIceCandidate(candidate));
      });
      socket.on('bye', function (id) {
        peerConnection.removeTrack(this.sender)
        peerConnection.close();
        peerConnection = new RTCPeerConnection();
        peerConnections = {}
        delete peerConnections[id];
        video.hidden = true;
        videoOtherPeer.hidden = true;
        let stream = video.srcObject;
        (<MediaStream>stream).getTracks().forEach(track => {
          track.stop();
        });
        let otherPeerStream = videoOtherPeer.srcObject;
        (<MediaStream>otherPeerStream).getTracks().forEach(track => {
          track.stop();
        });
        socket.emit('imfree', socket.id)
        window.location.reload();
      });
    }
  }


  readyToBattle() {
    this.socket.emit('readyToBattle', this._webSocketService.socket.id);


  }

  createNamesInPage(userDetails, peerUserDetails){
    let otherPeerWrapperDiv = document.getElementById('peerWrapper')
        let otherPeerH3 = document.createElement('h3');
        otherPeerH3.textContent = peerUserDetails.name;
        otherPeerH3.style.color = 'white'
        otherPeerWrapperDiv.appendChild(otherPeerH3)
        let myWrapperDiv = document.getElementById('myWrapper')
        let myH3 = document.createElement('h3');
        myH3.textContent = userDetails.name;
        myH3.style.color = 'white'
        myWrapperDiv.appendChild(myH3)
        this.peerObject = peerUserDetails;
  }



}
