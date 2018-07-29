import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  public baseURL: String = "https://www.googleapis.com/youtube/v3/search";

  constructor(private _http: HttpClient) { }

  getVideo(search: String){
    let uri = `${this.baseURL}?part=snippet&maxResults=6&q=${search}&key=AIzaSyASSJNgzHQQDmhotVtZZwUbDGibRw7OQCc`; 
    return this._http.get<any>(uri);
  }
}
