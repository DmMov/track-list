import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '.track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.sass']
})
export class TrackComponent implements OnInit {
  @Input() public track: {};
  @Input() public tag: string;

  constructor() { }

  ngOnInit() {
  }

}
