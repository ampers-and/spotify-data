import React from 'react'
import * as data from '../utils/manipulate'
import { MyResponsivePie } from "./charts/genrePie";
import { MyResponsiveSunburst } from "./charts/sunburst";
import {MySunburst} from "./charts/reactSunburst";

const main = () => {

    const namesT = data.trackNames;
    const idsT = data.trackIds;
    const arr1T = data.trackIdsArr1;
    const arr2T = data.trackIdsArr2;
    console.log({namesT}, {idsT}, {arr1T}, {arr2T});

    const namesAT = data.artistNamesbyTrack;
    const idsAT = data.artistIDsbyTrack;
    const idsA = data.artistIds;
    const arr1A = data.artistIdsArr1;
    const arr2A = data.artistIdsArr2;
    const arr3A = data.artistIdsArr3;
    console.log({namesAT}, {idsAT}, {idsA});
    console.log({arr1A}, {arr2A}, {arr3A});

    const featT = data.trackFeatures;
    console.log({featT});

    const genreArArr = data.genreGroupedByArtist;
    const genresA = data.genreByArtist;
    const genreArr = data.genres;
    const genreCount = data.genresOccurrences;
    const genreData = data.pieDataForm;
    const genreLessData = data.pieData;
    console.log({genreArArr}, {genresA}, {genreArr}, {genreCount}, {genreData}, {genreLessData});

    const bigData = data.bigData;
    const bigDataF = data.bigDataFormat;
    bigDataF.children = bigDataF.children.slice(0,10)
    console.log({bigData}, {bigDataF})

    return (
        <div>
            <p>{idsT.toString()}</p>
            <p>{arr1T.toString()}</p>
            <p>{arr2T}</p>
            <p>{arr1A.toString()}</p>
            <p>{arr2A.toString()}</p>
            <p>{arr3A.toString()}</p>
            <div style={{height: "1000px"}}>
                <MyResponsivePie data = {genreLessData} />
            </div>
            <div style={{height: "1000px"}}>
                <MyResponsiveSunburst data = {bigDataF} />
                <MySunburst data={bigDataF}/>
            </div>
        </div>
    )
}

export default main
