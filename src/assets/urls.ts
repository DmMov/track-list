export const root_url: string = 'http://ws.audioscrobbler.com/2.0/';
export const api_key: string = 'f6b9b2ef3b3771296c596a5d02a469d6';
export const get_top_tracks: string = `${root_url}?method=chart.gettoptracks&limit=10&api_key=${api_key}&format=json`;
export const getUrl = (tag: string): string =>
  `${root_url}?method=tag.gettoptracks&tag=${tag}&api_key=${api_key}&format=json`;
