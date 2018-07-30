import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { YoutubeService } from './services/youtube.service';
import { UrlPipe } from './pipes/url.pipe';
import { RoutingModule } from './/routing.module';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    UrlPipe,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [
    YoutubeService
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
