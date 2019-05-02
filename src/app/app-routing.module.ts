import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackListComponent } from './track-list/track-list.component';

const routes: Routes = [
  {
    path: 'disco', component: TrackListComponent
  },
  {
    path: 'rap', component: TrackListComponent
  },
  {
    path: 'rock', component: TrackListComponent
  },
  {
    path: 'pop', component: TrackListComponent
  },
  {
    path: 'country', component: TrackListComponent
  },
  {
    path: 'electronic', component: TrackListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TrackListComponent];

