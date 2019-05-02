import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TagMenuComponent } from './tag-menu/tag-menu.component';
import { TrackListComponent } from './track-list/track-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TagMenuComponent,
    TrackListComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }