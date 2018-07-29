import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { YoutubeService } from '../services/youtube.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  providers: [YoutubeService]
})
export class VideoComponent implements OnInit {
  
  public search: String;
  public videos:any=[];

  constructor(public _ys:YoutubeService) { }

  ngOnInit() {
  }
  searchVideo(){
    this._ys.getVideo(this.search).subscribe(result =>{
      this.videos = result.items;
    }
    )};
  

}
