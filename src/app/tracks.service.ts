import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getUrl, get_top_tracks } from '../assets/urls';
import { ITrack } from './ITrack';

@Injectable({
  providedIn: 'root'
})
export class TracksService {
  public tracks: ITrack[];
  public title: string = 'top 10 tracks';
  constructor(private http: HttpClient) {}

  getTopTracks = () => {
    this.http
      .get(get_top_tracks)
      .toPromise()
      .then(res => {
        res['tracks'].track.map((item: { rank: number }, index: number) => {
          item.rank = index + 1;
          return item;
        });
        this.tracks = res['tracks'].track;
      });
  };

  getTracks = (tag: string) => {
    this.http
      .get(getUrl(tag))
      .toPromise()
      .then(res => {
        res['tracks'].track.map((track: { duration: string; tag: string }) => {
          track.tag = tag;
          let duration = parseInt(track.duration);
          track.duration = `${Math.floor(duration / 60)}:${
            duration % 60 > 9 ? duration % 60 : '0' + (duration % 60)
          }`;
          return track;
        });
        this.tracks = res['tracks'].track;
      });
  };
}
