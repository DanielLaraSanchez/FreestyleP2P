import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privado',
  templateUrl: './privado.component.html',
  styleUrls: ['./privado.component.css']
})
export class PrivadoComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    this.getWebCam();
  }

  nextPage(){
    this.router.navigate([''])
  }

  public async getWebCam() {
    var constraints = { audio: false, video: true };
    navigator.mediaDevices.getUserMedia(constraints)
      .then(function (mediaStream) {
          var video = document.querySelector('video');
          video.srcObject = mediaStream;
          console.log(mediaStream)
          video.onloadedmetadata = function (e) {
            video.play();


           

          };
        
      })
      .catch(function (err) { console.log(err.name + ": " + err.message); });
  }


}
