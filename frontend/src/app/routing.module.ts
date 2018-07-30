import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  { path: 'videos', component: VideoComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports:[ RouterModule]
})
export class RoutingModule { }

