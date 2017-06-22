import { Component, OnInit,NgZone } from '@angular/core';
import { YoutubePlaylistService,Playlist } from 'angular2-youtube';
declare var $:any;
@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtubeplayer.component.html',
  styleUrls: ['./youtubeplayer.component.css']
})
export class YoutubeplayerComponent implements OnInit {

  constructor(private ngZone:NgZone) {
          window.onresize = (e) => {
            this.ngZone.run(() => {
                //console.log("Width: " + window.innerWidth);
                //console.log("Height: " + window.innerHeight);
                let playerW = (window.innerWidth-30);
                $(".videoWrapperInner iframe").css(
                    {
                        "width": playerW +"px",
                        "max-width": 640+"px",
                        "padding-right": "20px"
                    }
                );
            });
        }
  
  }

  ngOnInit() {
   
  }
}
