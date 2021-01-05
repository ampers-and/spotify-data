import {songs, artists1, artists2, artists3, audioFeatures} from "./rawData";

//get track ids for all 100 tracks, split into arrays of 50 ids
export let trackIds = [];
songs.items.map(i => trackIds.push(i.track.id))

export const trackIdsArr1 = trackIds.slice(0, 50);
export const trackIdsArr2 = trackIds.slice(50, trackIds.length);


//get artists ids for each track; concat to all artists arr, split to 50 ids each arr
export let artistIDsbyTrack = [];

songs.items.map( i => artistIDsbyTrack.push(i.track.artists.map(a => a.id)))

export let artistIds = [];

artistIDsbyTrack.forEach(a => a.forEach(b => artistIds.push(b)));

export const artistIdsArr1 = artistIds.slice(0, 50);
export const artistIdsArr2 = artistIds.slice(50, 100);
export const artistIdsArr3 = artistIds.slice(100, artistIds.length);

//audio features
export const trackFeatures = audioFeatures.audio_features;

//genres, from artists
const artists = artists1.artists.concat(artists2.artists.concat(artists3.artists))
export let genreByArtist = [];

artists.map(a => genreByArtist.push(a.genres));

//genre count
export const genres = artists
    .map((artist) => artist.genres.map((genre, i) => genre))
    .reduce(
      (accumulator, currentValue) => accumulator.concat(currentValue),
      []
    );

export const genresOccurrences = {};

for (let genre of genres) {
    if (!genresOccurrences[genre]) {
    genresOccurrences[genre] = 1;
    } else {
    genresOccurrences[genre]++;
    }
}

export const pieDataForm = [];

for (let [k,v] of Object.entries(genresOccurrences)){

  pieDataForm.push({
    "id": k,
    "label": k,
    "value": v
  })
}

//remove genres occuring once

export const pieData = [];

for (let [k,v] of Object.entries(genresOccurrences)){

  if (v > 1)
  {
    pieData.push({
      "id": k,
      "label": k,
      "value": v
    })
  }
}