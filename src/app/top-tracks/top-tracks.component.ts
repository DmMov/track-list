import { Component, OnInit } from '@angular/core';
import { TracksService } from '../tracks.service';

@Component({
  selector: '.top-tracks',
  templateUrl: './top-tracks.component.html',
  styleUrls: ['./top-tracks.component.sass']
})
export class TopTracksComponent implements OnInit {
  constructor(private tracksService: TracksService) {}

  ngOnInit() {
    this.tracksService.getTopTracks();
  }
}
