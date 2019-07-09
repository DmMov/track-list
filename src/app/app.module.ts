import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TagMenuComponent } from './tag-menu/tag-menu.component';
import { TrackComponent } from './track/track.component';
import { TopTracksComponent } from './top-tracks/top-tracks.component';
import { ChartTrackComponent } from './top-tracks/chart-track/chart-track.component';

@NgModule({
  declarations: [
    AppComponent,
    TagMenuComponent,
    TrackComponent,
    routingComponents,
    ChartTrackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }