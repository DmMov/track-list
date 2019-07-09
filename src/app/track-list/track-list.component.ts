import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TracksService } from '../tracks.service';
import { ITrack } from '../ITrack';

@Component({
  selector: '.track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.sass']
})
export class TrackListComponent implements OnInit, DoCheck {

  public activeTag: string;

  constructor(private route: ActivatedRoute, private tracksService: TracksService) {
  }

  ngOnInit() {
    this.tracksService.getTracks(this.route.snapshot.params.tag);
  }

  // GetTracks = () => {
  //   console.log("get tracks");
  //   return this.tracksService.getTracks().subscribe(data => {
  //     let tracks = data["tracks"].track;
  //     tracks = tracks.filter((track: { duration: string; }) => track.duration != '0');
  //     tracks.map((track: { duration: string; }) => {
  //       let duration = parseInt(track.duration);
  //       track.duration = `${Math.floor(duration / 60)}:${duration % 60 > 9 ? duration % 60 : '0' + duration % 60}`;
  //       return track;
  //     })
  //     this.tracks = tracks;
  //   });
  // }

  ngDoCheck() {
    if (this.activeTag !== this.route.snapshot.params.tag) {
      this.activeTag = this.route.snapshot.params.tag;
      return;
    }
    console.log("hello")
  }
}
