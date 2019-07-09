import { Component, OnInit } from '@angular/core';
import { TracksService } from '../tracks.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: '.tag-menu',
  templateUrl: './tag-menu.component.html',
  styleUrls: ['./tag-menu.component.sass']
})
export class TagMenuComponent implements OnInit {

  constructor(private tracksService: TracksService, private route: ActivatedRoute) { }
  ngOnInit() {
  }

  onLinkClick(event: { target: { name: string; }; }) {
    this.tracksService.getTracks(event.target.name);
  }
}
