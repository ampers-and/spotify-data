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

//sunburst data format

// {
//   "name": "chart",
//   "children": [
//     {
//       "name": "genre",
//       "children": [
//         {
//           "name": "artist",
//           "children": [
//             {
//               "name": "song",
//               "loc": rank, number
//             },

//first, genre object with artist array


//or song, artist, genre

//song names
export let trackNames = [];
songs.items.map(i => trackNames.push(i.track.name));

//artist names per track
export let artistNamesbyTrack = [];

songs.items.map( i => artistNamesbyTrack.push(i.track.artists.map(a => a.name)))

//artists to genre object
export let genreGroupedByArtist = {};

artists.map(a => genreGroupedByArtist[a.name] = a.genres);

//combine, song name -> artist children -> genre children

export const bigData = {"songs":[]}

//song names
trackNames.forEach( t => bigData["songs"].push({"name": t}))


//artist arrays -> names and genres
artistNamesbyTrack.forEach( (a,i) => {
  bigData["songs"][i]["artists"]= a.map( b => ({
    "name": b, "genres": genreGroupedByArtist[b]
  }))
})

export const bigDataFormat = { "name": "songs", "children":[]}

//song names
trackNames.forEach( t => bigDataFormat["children"].push({"name": t}))

//artist arrays -> names and genres
artistNamesbyTrack.forEach( (a,i) => {
  bigDataFormat["children"][i]["children"]= a.map( b => ({
    "name": b, "children": genreGroupedByArtist[b].map( c => ({
      "name": c, "size": 1
    }))
  }))
})