import { Component, OnInit, Input } from '@angular/core';
import { ITrack } from 'src/app/ITrack';

@Component({
  selector: '.chart-track',
  templateUrl: './chart-track.component.html',
  styleUrls: ['./chart-track.component.sass']
})
export class ChartTrackComponent implements OnInit {
  constructor() {}
  @Input() public track: any;
  ngOnInit() {
  }
}
