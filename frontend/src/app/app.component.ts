import { Component, OnInit } from '@angular/core';
import { YoutubeService } from './services/youtube.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';


  constructor() {}

  ngOnInit() {
    
  }


}
