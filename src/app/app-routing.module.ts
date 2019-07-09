import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackListComponent } from './track-list/track-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TopTracksComponent } from './top-tracks/top-tracks.component';

const routes: Routes = [
  { path: '', redirectTo: '/tracks/top', pathMatch: 'full' },
  { path: 'tracks/top', component: TopTracksComponent },
  { path: 'tracks/:tag', component: TrackListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  TrackListComponent,
  TopTracksComponent,
  PageNotFoundComponent
];
